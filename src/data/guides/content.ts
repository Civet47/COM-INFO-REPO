export interface GuideSection {
  id: string;
  title: string;
  description: string;
  content: string;
  category: 'Strategic' | 'Matter' | 'Roles' | 'Analysis';
}

export const CASE_CONSTRUCTION_GUIDES: GuideSection[] = [
  {
    id: 'rebuttals-expanded',
    title: 'Advanced Rebuttal & Weighing',
    description: 'Methodical refutation, meta-commentary, and the interactive weighing game.',
    category: 'Strategic',
    content: `
# Advanced Rebuttal & Weighing

## 1. The Methodical Approach
Rebuttal is not just saying "they are wrong." It is about proving it systematically.

### Layers of Rebuttal
1. **Analytic Gaps**: Point out where the other team's argument lacks a logical link.
2. **Weak Points**: Attack the weakest part of their case (low probability/low impact).
3. **Opposite Claim**: Proving the direct opposite of what they asserted.
4. **Meta-commentary**: Framing the argument as irrelevant or secondary to your own.

## 2. Competitive Weighing Game
When both sides have good arguments, the judge needs to know why yours matters *more*.

### Judging Metrics
- **Intensity of preference**: Does this outcome affect a group that has no other choice?
- **Scope vs. Severity**: Is it better to help 1 million people a little, or 100 people a lot?
- **Probability**: How certain is your outcome compared to the other team's?
- **Irreversibility**: Can the harm on the other side be fixed? If not (e.g., death), it weighs higher.

## 3. Practice Exercise: Drugs Legalization
**Argument**: "Legalizing drugs keeps young people out of the criminal justice system."
- **Rebuttal**: "The black market won't disappear; it will shift to even more dangerous, unregulated substances where young people are still targeted, creating a dual-threat of law enforcement and cartel violence."
    `
  },
  {
    id: 'deputy-mastery',
    title: 'Deputy Speech Mastery (DPM/DLO)',
    description: 'Modular speech construction, bridging gaps, and the "Burn the Turf" strategy.',
    category: 'Roles',
    content: `
# Deputy Speech Mastery

## 1. The Strategy: Win the Top Half
Your job is to ensure that after your speech, the Opening half of the table is functionally decided in your favor.

### Core Tasks
- **Rebuilding**: Fix what the previous speaker broke. Focus on things your partner "didn't do enough."
- **Completion**: Bridge logical gaps. If your partner gave a claim, provide the mechanization (the "how").
- **Robustness**: Add new reasons why a key link is true.

## 2. Modular Speech Design
Don't write a linear script. Build your speech in **Modules**:
1. **Interactive Rebuttal**: 1.5 - 2 mins addressing the direct clash.
2. **Case Extension/Completion**: 3 - 4 mins deepening your own case.
3. **Pre-emption**: 1 min anticipating what the Back Half might say.

## 3. "Burning the Turf"
Try to run the most intuitive "extensions" yourself. If you leave nothing obvious for your Closing team to say, they have to work significantly harder to beat you.
    `
  },
  {
    id: 'politics-deep-dive',
    title: 'Politics & State Incentives',
    description: 'State power principles, social contract issues, and technocratic vs. democratic models.',
    category: 'Matter',
    content: `
# Debating Politics: Incentives & Power

## 1. The State Power Principle
Debates often boil down to: **Consent vs. Utility**.
- **The Monopoly on Violence**: The state is the only actor allowed to use force. This is only legitimate if citizens **Consent** (Social Contract).
- **Technocracy**: Decisions made by experts to maximize Utility. *Counter*: Experts don't know everyone's individual preferences.

## 2. Analyzing Country Incentives
- **Democracies**: Driven by the "Window of Opportunity" (trigger events) and electability. Voters often vote on *character* or *confirmation bias* rather than dry policy.
- **Non-Democracies**: Fragile and unstable. Figureheads must keep **Oligarchs** happy (wealth/arms) and manage **Popular Sentiment** (bread and butter issues).
- **The Revolving Door**: Officials moving between government and the private sector, maintaining power in "The Iron Triangle" (Congress, Bureaucracy, Interest Groups).

## 3. Barriers to Voting
One-person, one-vote? Consider:
- **Lost Votes**: Gerrymandering and safe seats.
- **Voter Apathy**: Lack of access to research or disillusionment with limited choices.
    `
  },
  {
    id: 'economics-expanded',
    title: 'States & Monetary Policy',
    description: 'Inflation traps, recession responses, and central bank independence.',
    category: 'Matter',
    content: `
# Economics: Monetary & Fiscal Policy

## 1. Monetary Supply Essentials
- **Money's Value**: Not intrinsic, but derived from what it can purchase.
- **Inflation**: People have more money -> demand increases -> production increases -> wages rise -> prices rise. 2% is a healthy target.
- **Hyperinflation**: Rapid loss of value makes saving impossible.

## 2. Responding to Recessions
Recessions are declining economic activity tied to a lack of confidence.

### Fiscal Stimulus (Government)
- **Bailouts**: Saving essential companies (Moral Hazard risk).
- **Bail-ins**: Creditors cancel debt (Confidence loss risk).
- **Multiplier Effect**: Money spent on low-income groups or public works tends to circulate more.

### Monetary Stimulus (Central Bank)
- **Quantitative Easing**: Cash influx by buying bonds.
- **Interest Rate Targeting**: Lowering rates to encourage borrowing.
- **The Liquidity Trap**: When interest rates hit zero and monetary policy becomes useless.

## 3. Central Bank Independence
- **Pro**: Technocratic decision-making prevents populists from printing money for short-term gain.
- **Con**: Lacks democratic accountability; "Bankers, Bureaucrats, and Central Bank Politics."
    `
  },
  {
    id: 'vietnam-matter-file',
    title: 'WUDC Matter Repository',
    description: 'Deep file on nationalization, resource curse, and dollar hegemony.',
    category: 'Matter',
    content: `
# WUDC Global Matter Repository

## 1. State Ownership & Privatization
- **Natural Monopolies**: Industries like water/electricity have demand inelasticity. Private firms will "price gouge"; the state should control them.
- **SOEs (State-Owned Enterprises)**: Often vectors for corruption/patronage, but can cross-subsidize losses to provide services to low-income areas.
- **Privatization**: Signals fiscal discipline, attracts foreign investment, and removes "Soft Budget Constraints" (bloated administrative costs).

## 2. The Resource Curse
- **Dutch Disease**: Dominant export sector causes currency appreciation, killing other export industries.
- **Rentier Effect**: State relies on "economic rents" (minerals) rather than taxes, making them detached from citizen accountability.

## 3. Dollar Hegemony
- **Original Sin**: Most developing nations cannot borrow in their own currency.
- **Neo-colonialism**: US dollar dominance allows the US to export its inflation and manipulate global interest rates via the SWIFT system.
    `
  },
  {
    id: 'round-tests-1',
    title: 'Motion Analysis: Rounds 1-4',
    description: 'South African Exceptionalism, Crypto, Critical Minerals, CHAN Quotas.',
    category: 'Analysis',
    content: `
# Topic Analysis: Rounds 1-4

## Round 1: South African Exceptionalism
**Motion**: THR the concept of "South African Exceptionalism."
- **Gov**: Creates a superiority complex; distances SA from the continent; worsens xenophobia by framing migrants as "invaders."
- **Opp**: Builds national pride/cohesion; motivates higher governance standards (people expect resilience); acknowledges a unique history (Apartheid struggle).

## Round 2: Retail/Crypto Investing
**Motion**: THO the rise of retail/crypto investing in Africa.
- **Gov**: Expands financial inclusion (unbanked can invest); transforms paths for wealth-building; democratizes markets.
- **Opp**: High rates of fraud/scams; speculative gambling mentality leads to personal harm; amateur participation destabilizes economies.

## Round 3: Critical Minerals Cartel
**Motion**: THBT African states should form a collective bargaining cartel for critical minerals (cobalt, lithium).
- **Gov**: Dramatic increases global leverage; prevents "race-to-the-bottom" undercutting; forces technology transfers.
- **Opp**: Likely to fail due to internal fragmentation (divergent national interests); may provoke retaliation from China/US/EU.

## Round 4: AFCON Quota for Domestic Players
**Motion**: THP replacing CHAN with a quota for domestic players at AFCON.
- **Gov**: Gives domestic players visibility to scouts; strengthens domestic league investment.
- **Opp**: Undermines meritocracy; CHAN is a specialized platform where they don't have to compete with diaspora superstars.
    `
  },
  {
    id: 'round-tests-2',
    title: 'Motion Analysis: Rounds 5-8',
    description: 'Gender Abolition, Franchise Cinema, Abraham Accords, Stimulus.',
    category: 'Analysis',
    content: `
# Topic Analysis: Rounds 5-8

## Round 5: Gender Abolitionism
**Motion**: THBT the LGBTQ movement should adopt a gender-abolitionist vs. pluralist approach.
- **Gov**: Eliminates hierarchy/binary; prevents commodification of identity; avoids the "perpetual label" conflict.
- **Opp**: Erases historical identities; pluralism protects legal rights for marginalized groups; abolition may default to "male as neutral."

## Round 6: Franchise Cinema (IP Dominance)
**Motion**: THR the dominance of movies based on existing IPs.
- **Gov**: Crowds out original storytelling; homogenizes global culture; restricts creative freedom for directors.
- **Opp**: Reduces financial risk/stabilizes industry; allows for high-budget filmmaking not possible otherwise; fans enjoy immersive world-building.

## Round 7: Abraham Accords & Saudi Arabia
**Motion**: THS Saudi Arabia joining the Abraham Accords on condition of a two-state solution.
- **Gov**: Forces Israel into a meaningful concession; provides real monitoring via USA/Saudi leverage.
- **Opp**: Conditionality is impractical (Israel's domestic politics will block it); unconditional normalization lowers regional temperature better.

## Round 8: Fiscal vs. Monetary Stimulus
**Motion**: THBT fiscal stimulus is more effective than monetary stimulus in a recession.
- **Gov**: Injects money directly (skips the banks); creates jobs immediately; targets vulnerable populations precisely.
- **Opp**: Risks unsustainable debt; monetary stimulus is faster (Central Bank acts in hours); prevents political misallocation of funds.
    `
  },
  {
    id: 'round-tests-3',
    title: 'Motion Analysis: Rounds 9-13',
    description: 'Pascal\'s Wager, Global South Research, Legacy, ICJ Sudan, Waka-Trix.',
    category: 'Analysis',
    content: `
# Topic Analysis: Rounds 9-13 (Higher-Thinking)

## Round 9: Pascal's Wager (Agnostic perspective)
- **Gov**: Infinite-upside logic; provides psychological comfort in uncertainty.
- **Opp**: Instrumental belief is inauthentic (God won't be fooled); belief has real costs to autonomy and doubt.

## Round 10: South-to-South Research
- **Gov**: Aligns priorities with local needs; reduces dependency on Northern funding; avoids "Parachute Research."
- **Opp**: Global North has advanced technology/funding; intellectual diversity from North-South links is vital.

## Round 11: Leave a Legacy
- **Gov**: Legacy expectations create immense well-being pressure; people neglect the present for future recognition.
- **Opp**: Legacy motivates excellence; creates public goods (institutions/art) that outlast the individual.

## Round 12: ICJ & Sudan
**Motion**: THBT African states should withdraw recognition of ICJ jurisdiction.
- **Gov**: ICJ structural bias (treaty loopholes for the powerful); withdrawal boosts African regional legal bodies.
- **Opp**: Withdrawal weakens global accountability; ICJ has a track record of legitimate wins for African states.

## Round 13 (Grand Finals): The Waka-Trix
**Motion**: TH, as an average 20-year-old African person, would enter the Waka-Trix (un-colonized digital matrix).
- **Gov**: Reset trajectory untouched by colonial distortion; eliminates intergenerational trauma; stable governance.
- **Opp**: Self-annihilation (consciousness ends); real relationships have inherent value; Waka-Trix is not guaranteed utopia.
    `
  },
  {
    id: 'bp-glossary',
    title: 'BP Debate Glossary',
    description: 'Comprehensive guide to BP terminology, speaker roles, and judging concepts.',
    category: 'Roles',
    content: `
# BP Debate Terms & Phrases

## Common Terminology
- **The Motion**: The statement being debated (e.g., "This House Believes That...").
- **Info Slide**: Factual context provided before the motion.
- **Model**: Definitions and implementation details provided by the Prime Minister.
- **Squirrel**: A definition that unfairly limits the scope of the debate.
- **The Flow**: A holistic record of all arguments and clashes in the round.
- **POI (Point of Information)**: A 15-second interruption allowed between the 1st and 6th minute of a speech.

## Speaker Roles (The Benches)
1. **Opening Government (OG)**: Sets the definitions and provides the primary case.
   - **PM**: Prime Minister (1st speaker).
   - **DPM**: Deputy Prime Minister (2nd speaker).
2. **Opening Opposition (OO)**: Refutes OG and provides a counter-case.
   - **LO**: Leader of Opposition (1st speaker).
   - **DLO**: Deputy Leader of Opposition (2nd speaker).
3. **Closing Government (CG)**: Provides an "Extension" to the OG case.
   - **MG**: Member of Government.
   - **GW**: Government Whip (cannot bring new substantive).
4. **Closing Opposition (CO)**: Provides an "Extension" to the OO case.
   - **MO**: Member of Opposition.
   - **OW**: Opposition Whip.

## Judging Concepts
- **RFD**: Reason for Decision.
- **The Call**: The final ranking of the four teams (1st to 4th).
- **Speaker Scores (Speaks)**: Individual point allotments (usually 60-84 range).
- **Knife**: When a team directly contradicts its partner or its Opening bench.
    `
  },
  {
    id: 'paudc-2027-tshwane',
    title: 'PAUDC 2027: Tshwane',
    description: 'Vision and practical details for the upcoming Pan-African Championship.',
    category: 'Strategic',
    content: `
# PAUDC 2027: Tshwane - "Where Vision Finds a Home"

## Tournament Vision
1. **Elevate Competitive Excellence**: Uphold highest standards in adjudication and tabulation.
2. **Expand Continental Participation**: Engage underrepresented regions through intentional outreach.
3. **Build Sustainable Capacity**: Develop operational frameworks that endure beyond the event.
4. **Revive Dialogue as Civic Leadership**: Reinforce debate as a tool for democratic engagement.

## Host Institution: University of Pretoria Debate Union
The Union has built a strong reputation, proudly housing the first all-womenPreviously disadvantaged team to win SANUDC.

## Practical Logistics
- **Accommodation**: Official residences of the University of Pretoria.
- **Transportation**: Secure shuttles and the Gautrain network (1000+ CCTV cameras).
- **Social Events**: Cultural & Ubuntu Night, Amapiano Party, Poolside socials.
    `
  },
  {
    id: 'logical-framework-kenya',
    title: 'Logical Framework: Femicide Prevention',
    description: 'A SMART approach to reducing femicide in Kenya through legal reform and victim support.',
    category: 'Analysis',
    content: `
# Logical Framework: Addressing Femicide in Kenya

## Project Objectives
- **Goal**: To reduce the incidence of femicide in Kenya by strengthening legal frameworks and victim support systems.
- **Indicator**: 30% reduction in reported cases by 2027; 60% public awareness.

## Key Outputs
1. **Legal Reform**: Drafting a femicide prevention Bill to be passed by 2026.
2. **Enforcement**: 50% increase in convictions for femicide cases.
3. **Victim Support**: Establishing at least 15 new women's shelters by 2027.

## Risks & Mitigations
- **Risk**: Cultural resistance to gender reforms.
- **Mitigation**: Working with respected community leaders and school-based education programs.
- **Risk**: Funding shortfalls for shelters.
- **Mitigation**: Seeking governmental and NGO partnerships.
    `
  }
];
