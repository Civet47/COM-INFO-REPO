export interface GuideSection {
  id: string;
  title: string;
  description: string;
  content: string;
  category: 'Strategic' | 'Matter' | 'Roles';
}

export const CASE_CONSTRUCTION_GUIDES: GuideSection[] = [
  {
    id: 'rebuttals',
    title: 'Rebuttal & Weighing',
    description: 'Master the art of refutation and comparative weighing for Whips and Deputy speakers.',
    category: 'Strategic',
    content: `
# Rebuttal & Weighing Strategic Guide

## The Rebuttal-Weighing Game
To win high-level debate rounds, you must do more than just say the other side is wrong. You must explain *why* their arguments fail and *how* your arguments are more important.

### Key Strategies for Refutation
1. **Take the strongest version of their argument**: Don't attack a "straw man". Attack their best logic.
2. **Explain why they are wrong (Rebuttal)**:
   - **Analytic Gaps**: Point out where their logic leaps without sufficient reasoning.
   - **Opposite Claim**: Prove that the inverse of their claim is actually true.
   - **Meta-commentary**: Use framing and characterization to show their argument is irrelevant to the "Heart of the Debate".

3. **Explain which is more important (Weighing)**:
   - **Intensity of preference**: How much do people care about this?
   - **Scope**: How many people are affected?
   - **Probability**: How likely is this outcome compared to theirs?
   - **Irreversibility**: Can the harm be undone?
    `
  },
  {
    id: 'deputy-speeches',
    title: 'Deputy Speeches',
    description: 'Guidelines for the DPM and DLO roles: Rebuilding, Completion, and Robustness.',
    category: 'Roles',
    content: `
# Mastering Deputy Speeches (DPM/DLO)

## The Goal
The primary goal of a Deputy speech is to **Win the Debate** by ensuring your Opening case is bulletproof before the Back Half teams speak.

### Core Components
1. **Rebuilding and Completion**:
   - Address the rebuttals from the previous speaker.
   - Bridge gaps your partner might have left.
   - Add new reasons why key links in your case are true.
2. **Rebuttal**:
   - Generate multiple layers of rebuttal to the opposite Opening team.
   - Exploit analytic gaps or weak points in their setup.
3. **New Substantive**:
   - Turn your rebuttals into new positive points for your side.
   - "Burn the turf": Cover the most intuitive extensions to make it harder for your Closing team to take the credit.

### Efficiency & Modules
- Think of your speech in modules (e.g., "Rebuilding Case", "Interactive Rebuttal", "New Analysis").
- Be methodical and clear when moving between modules.
    `
  },
  {
    id: 'politics',
    title: 'Debating Politics',
    description: 'Analysis of state power, incentives, and political processes.',
    category: 'Matter',
    content: `
# Debating Politics & State Power

## The State Power Principle
The state has a monopoly on violence. Every action it takes is done through force or the threat of force. This infringes on individual autonomy and must be justified through **Consent** (Democracy/Social Contract).

### Common Political Clashes
- **Majoritarianism vs. Minority Rights**: Does a 51% vote justify harming a 1% minority?
- **Public Choice Theory**: Most issues are decided by small interest groups, not the general public.
- **Technocracy**: Decisions should be made by experts (Utilitarian metric) rather than popular vote.

### Analyzing Incentives
- **Democracies**: Leaders are driven by electability, short-term economic cycles, and framing.
- **Non-Democracies**: Power is often concentrated in figureheads/oligarchs. They are sensitive to "bread and butter" issues that could trigger popular dissent.
- **The Iron Triangle**: The interaction between Congress, Bureaucracy, and Interest Groups that maintains power structures.
    `
  },
  {
    id: 'economics',
    title: 'States & Monetary Policy',
    description: 'Understanding inflation, recessions, and central bank responses.',
    category: 'Matter',
    content: `
# Economics Matter Guide

## Monetary Supply Essentials
- **Inflation**: Occurs when people have more money and want to buy more, causing production to increase and prices to rise. Target is usually 2%.
- **Deflation**: A loss of confidence leads to a "deflationary spiral" where spending drops and unemployment rises.

## Recessions & Responses
1. **Recessions**: Periods of declining activity, often caused by financial crises, supply shocks, or natural disasters.
2. **Government Responses**:
   - **Bailouts**: State pays debt (risk of moral hazard).
   - **Bail-ins**: Creditors cancel debt (risk of investor flight).
   - **Fiscal Stimulus**: Lowering taxes or increasing investment.
3. **Central Bank Responses**:
   - **Quantitative Easing**: Buying bonds to influx cash.
   - **Interest Rate Targeting**: Lowering rates to encourage borrowing.

### Key Term: The Liquidity Trap
When interest rates are so low that monetary policy becomes ineffective at stimulating the economy.
    `
  },
  {
    id: 'matter-file',
    title: 'Vietnam WUDC Matter File',
    description: 'Stock arguments on nationalization, currency, and international relations.',
    category: 'Matter',
    content: `
# Vietnam WUDC Matter Repository

## State Ownership & Nationalization
**Case for Nationalization**:
- Profit incentives raise prices and lower quality for essential services.
- Natural monopolies (water, electricity) should be state-controlled to prevent "price gouging".
- SOEs can act as vehicles for long-term development that private firms ignore.

**Case for Privatization**:
- SOEs are often vectors for corruption and political patronage.
- Private firms have better access to capital and international expertise.
- Competition drives efficiency and innovation.

## Currency & Dollar Hegemony
- **Original Sin**: Developing nations are often forced to borrow in foreign currencies (USD/EUR).
- **Dollar Hegemony**: 60% of international assets are in USD. This gives the US unique "Neo-colonial" power over global interest rates.
- **Counterfactual**: SDR (Special Drawing Rights) or a basket of currencies could provide a more stable global alternative.
    `
  },
  {
    id: 'bp-terms',
    title: 'BP Debate Glossary',
    description: 'A comprehensive guide to British Parliamentary terminology, speaker roles, and judging concepts.',
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
    id: 'paudc-2027',
    title: 'PAUDC 2027 Tshwane',
    description: 'Details for the Pan-African Universities Debating Championship 2027 in South Africa.',
    category: 'Strategic',
    content: `
# PAUDC 2027: Tshwane - "Where Vision Finds a Home"

## Introduction
The Pan-African Universities Debating Championship (PAUDC) 2027 will be hosted in the City of Tshwane, South Africa's administrative capital. This event serves as a prelude to the World Universities Debating Championship (WUDC) 2028.

## Tournament Vision
1. **Elevate Competitive Excellence**: Uphold highest standards in adjudication and tabulation.
2. **Expand Continental Participation**: Engage underrepresented regions through outreach.
3. **Build Sustainable Capacity**: Develop operational frameworks that endure beyond the event.
4. **Revive Dialogue as Civic Leadership**: Reinforce debate as a tool for democratic engagement.

## Host Institution: University of Pretoria Debate Union
A vibrant community with a rich history, including the first all-women previously disadvantaged team to win SANUDC.

## Practical Details
- **Accommodation**: Participants will be housed in official residences of the University of Pretoria.
- **Transport**: Secure transportation including the Gautrain, known for its high-tech surveillance.
- **Socials**: Cultural Night, Ubuntu Night, Games Night, Karaoke, Amapiano Night, and Poolside Party.
    `
  }
];
