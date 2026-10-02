# Workspace OS — Daily Operating Environment

## Goal

Turn Agentic Site Sales OS into Hianto's primary daily work environment.

The system should reduce the need to remember which tools to open. Prospecting, pipeline, messaging, proof, proposal, delivery and learning should live in one connected workspace.

## Core principle

Do not build another dashboard the user must remember to open.

Build the place where the work itself happens.

## Main workspace

The default screen should answer:

1. What should I do now?
2. Which leads need attention?
3. Which conversations are active?
4. Which proofs/proposals are pending?
5. What is the next revenue-producing action?

## Primary navigation

- Today
- Opportunities
- Prospects
- Pipeline
- Messages
- Proofs
- Proposals
- Clients
- Delivery
- CRM / History
- Intelligence

## Today view

The Today view is the operational home.

Show:
- active commercial goal
- outreach target
- leads remaining
- replies requiring action
- follow-ups due
- proposals waiting
- deals at risk
- next best action
- AI copilot guidance

The user should not need to decide what screen to open.

## Unified prospecting + CRM history

HunterX prospecting becomes a native subsystem of the OS.

Bring over:
- niche + city search
- Apify Google Maps provider
- normalization
- Opportunity Score
- Quente / Morno / Frio
- Alta / Média / Baixa priority
- filters
- favorites
- website enrichment
- CSV export
- lead history

But history must evolve beyond "past searches".

Each lead gets a durable commercial timeline:

```text
DISCOVERED
→ ENRICHED
→ REVIEWED
→ CONTACTED
→ REPLIED
→ QUALIFIED
→ PROOF CREATED
→ PROPOSAL SENT
→ NEGOTIATION
→ WON / LOST
→ CLIENT
```

Capture events:
- source/search that found lead
- timestamps
- score changes
- evidence
- message sent
- reply
- objection
- follow-up
- proof
- proposal
- price
- outcome
- loss reason
- notes
- next action

## Funnel

The funnel is not a report. It is the work surface.

Suggested columns:

```text
NEW
QUALIFIED
CONTACT READY
CONTACTED
REPLIED
DISCOVERY
PROOF
PROPOSAL
NEGOTIATION
WON
LOST
```

Cards should expose:
- business
- opportunity score
- ICP match
- latest message
- next action
- due date
- proof status
- deal value

Dragging a lead to another stage should create an event in history.

## Messaging workspace

ZapVoice-inspired concept:

Each lead opens a conversation workspace with:

- WhatsApp-style thread
- lead context
- stage
- persona/ICP context
- evidence
- approved message flows
- AI suggested next reply
- objections
- next action

### Flow-driven messaging

Flows can contain:

- message step
- wait/delay
- condition
- follow-up
- proof attachment
- proposal trigger
- manual approval
- stop condition
- handoff to human

Example:

```text
OPEN
→ personalized first message
→ wait
→ if reply: AI classify intent
→ if interested: send proof
→ if objection: objection play
→ if silent: follow-up
→ if qualified: proposal
```

Do not create spam automation.

Automation must preserve:
- authorization
- rate limits
- stop on opt-out
- manual control
- message quality
- audit trail

## AI Sales Copilot

The copilot should live inside the conversation, not in a separate "AI" page.

It should answer:
- what is happening?
- what does this buyer likely care about?
- which sales strategy are we using?
- what information is missing?
- what should I send next?
- should I send proof, ask a question or propose?
- is this lead worth more effort?

It can draft and recommend.

Human approval remains required for commitments, discounts, guarantees and sensitive actions.

## Sales Strategy Selector

Every opportunity should have an explicit sales strategy before active outreach.

Input:
- deal value
- buyer complexity
- buyer role
- problem clarity
- urgency
- evidence available
- sales cycle
- trust requirement
- number of stakeholders
- inbound/outbound context

Candidate strategy families:
- direct-response / transactional
- consultative
- solution selling
- SPIN-informed
- Challenger-informed
- account-based
- proof-led selling
- ROI/business-case selling
- relationship-led
- hybrid

The Commercial Research Engine must research and validate candidate strategies through IIP before crystallizing a standard playbook.

Output:
- chosen strategy
- why it fits
- opening approach
- qualification method
- proof type
- objection approach
- meeting threshold
- close path
- metrics

## Proof-led default

For Hianto's workflow, default toward reducing uncertainty before asking for a meeting:

```text
RESEARCH
→ PERSONALIZED INSIGHT
→ PROOF
→ MESSAGE
→ BUYER INTEREST
→ CONVERSATION
→ PROPOSAL
```

Meeting is not the first goal.

Meeting becomes useful when it materially increases trust, diagnosis quality, deal size or implementation clarity.

## Site Factory inside the same OS

When a deal moves to WON:

```text
WON
→ BRIEF
→ RESEARCH
→ COPY
→ VISUAL DIRECTION
→ MOCKUP
→ BUILD
→ QA
→ DEPLOY
→ HANDOFF
→ MAINTENANCE
```

The commercial record becomes the source for production context.

No retyping the client story into another app.

## Learning loop

Every interaction feeds evidence back into the system:

```text
lead
→ message
→ reaction
→ outcome
→ CRM history
→ sales analysis
→ ICP update
→ strategy update
→ offer update
→ next lead
```

This is commercial intelligence, not just CRM storage.

## First implementation slice

Build one connected path:

```text
HunterX search
→ lead enters OS
→ pipeline card
→ messaging workspace
→ AI next-message suggestion
→ proof attached
→ proposal stage
→ outcome history
```

If this slice works, the user has a real daily operating environment rather than another isolated tool.
