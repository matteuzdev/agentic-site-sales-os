[CmdletBinding(SupportsShouldProcess)]
param(
    [string]$Destination = (Join-Path $env:USERPROFILE ".codex\skills"),
    [switch]$Force
)

$ErrorActionPreference = "Stop"
$repositoryRoot = Split-Path -Parent $PSScriptRoot
$skillsRoot = Join-Path $repositoryRoot "skills"

if (-not (Test-Path -LiteralPath $skillsRoot)) {
    throw "Skills directory not found: $skillsRoot"
}

New-Item -ItemType Directory -Path $Destination -Force | Out-Null

$installed = @()
foreach ($skill in Get-ChildItem -LiteralPath $skillsRoot -Directory) {
    $target = Join-Path $Destination $skill.Name

    if ((Test-Path -LiteralPath $target) -and -not $Force) {
        throw "Skill '$($skill.Name)' already exists at '$target'. Run with -Force to replace it."
    }

    if ($PSCmdlet.ShouldProcess($target, "Install skill $($skill.Name)")) {
        if (Test-Path -LiteralPath $target) {
            Remove-Item -LiteralPath $target -Recurse -Force
        }
        Copy-Item -LiteralPath $skill.FullName -Destination $target -Recurse
        $installed += $skill.Name
    }
}

Write-Host "Installed $($installed.Count) skills in $Destination"
$installed | ForEach-Object { Write-Host " - $_" }
