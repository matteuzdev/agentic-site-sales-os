# Closed-Loop Revenue Automation

## Objective

The system must continuously move commercial work forward, not merely display a funnel.

A loop is:

```text
EVENT
→ STATE
→ DECISION
→ ACTION
→ RESULT
→ EVIDENCE
→ STATE UPDATE
→ NEXT EVENT
```

## Chosen architecture

### 1. State machine
Each lead has an explicit state:
NEW → ENRICHED → QUALIFIED → CONTACT_READY → CONTACTED → REPLIED → DISCOVERY → PROOF → PROPOSAL → NEGOTIATION → WON / LOST.

Transitions create immutable events.

### 2. Event-driven orchestration
Use durable background workflows for waits, retries, follow-ups, AI calls and provider webhooks.

Preferred first option: Inngest with Next.js/Vercel.
Alternative: Supabase Queues + Cron.
Future high-scale alternative: dedicated queue/worker.

### 3. Database
Supabase/Postgres.

Core tables:
- leads
- lead_events
- searches
- opportunities
- icp_profiles
- conversations
- messages
- sales_strategies
- proofs
- proposals
- tasks
- experiments
- outcomes

### 4. AI workers
AI does not own the database state.

AI workers receive structured context and return recommendations:
- research/enrichment
- ICP match
- lead qualification
- sales strategy selector
- message copilot
- objection classifier
- proof recommender
- proposal assistant
- post-outcome analyst

State transitions remain deterministic and auditable.

### 5. Messaging providers
Use a provider abstraction.

```text
MessagingProvider
├─ official WhatsApp Business Platform
├─ Twilio WhatsApp
├─ Evolution API — official Cloud API mode
└─ browser/WhatsApp-Web adapter — experimental only
```

Official provider is preferred for durable production.

WhatsApp-Web automation can be useful for controlled experiments, but it is more fragile because it depends on browser internals and may break as WhatsApp Web changes.

### 6. Human approval gates
Manual approval required for:
- first-contact outbound until strategy is validated
- discounts
- guarantees
- legal claims
- final proposals
- contract terms
- high-risk automation

## Autonomous loop

Example:

```text
HunterX search completed
→ create leads
→ dedupe
→ enrich top leads
→ ICP match
→ strategy selection
→ create contact task
→ user approves first message
→ send
→ wait
→ webhook/message event arrives
→ AI classifies reply
→ next-best-action
→ proof/proposal/follow-up
→ result stored
→ experiment metrics updated
→ strategy/ICP evidence updated
```

## Anti-loop rule

No infinite AI chatter.

Every loop iteration must end in one of:
- real-world action
- wait for external event
- human approval
- terminal state
- measurable experiment result

## Commercial feedback loop

```text
message variant
+ ICP
+ niche
+ proof type
+ sales strategy
→ outcome
→ conversion metrics
→ experiment result
→ update playbook
```

This is how the OS learns without pretending model output is truth.

## Immediate build slice

1. application shell
2. Today screen
3. pipeline
4. HunterX import/search adapter
5. durable lead history
6. lead detail
7. AI next-best-action placeholder
8. provider abstraction for messaging
9. event schema
10. first revenue loop
