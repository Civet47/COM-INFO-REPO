export interface Argument {
  title: string;
  points: string[];
}

export interface CaseFile {
  id: string;
  title: string;
  category: string;
  summary: string;
  proposition: Argument[];
  opposition: Argument[];
}

export const CASE_FILES: CaseFile[] = [
  {
    id: 'state-ownership',
    title: 'State Ownership: Nationalization vs. Privatization',
    category: 'Economics',
    summary: 'The debate over whether key industries (banks, utilities, natural resources) should be owned by the state or private entities.',
    proposition: [
      {
        title: 'Natural Monopolies and Inelastic Demand',
        points: [
          'Markets only work when companies face competitive pressures to lower prices and innovate.',
          'In industries with high barriers to entry (utilities, infrastructure), private firms can price gouge due to inelastic demand.',
          'Nationalization ensures services remain affordable and accessible to all, especially in poor areas.'
        ]
      },
      {
        title: 'Long-Term Development vs. Short-Term Profit',
        points: [
          'Private companies are focused on quarterly reports and short-term profitability to satisfy investors.',
          'Governments can prioritize long-term initiatives like poverty alleviation, infrastructure, and national standing.',
          'SOEs (State-Owned Enterprises) can cross-subsidize losses to provide services in low-income areas where private firms won\'t operate.'
        ]
      }
    ],
    opposition: [
      {
        title: 'Efficiency and Innovation',
        points: [
          'Nationalized SOEs are insulated from competitive pressures, leading to slack, waste, and negligence.',
          'Bureaucracy and red tape stymie innovation within state-owned enterprises.',
          'Private firms face evolutionary pressures to adapt and evolve rapidly to stay in business.'
        ]
      },
      {
        title: 'Corruption and Political Patronage',
        points: [
          'SOEs often become enmeshed in patronage networks, staffed with under-qualified cronies as rewards for party loyalty.',
          'State ownership creates conditions for corruption to arise as politicians use control over resources for political gain.',
          'Nationalization undermines democratization by reducing voters\' bargaining power and empowering state security apparatuses.'
        ]
      }
    ]
  },
  {
    id: 'drug-legalization',
    title: 'Legalization of All Drugs',
    category: 'Social Policy',
    summary: 'The movement to fully legalize the consumption and production of all currently illegal substances.',
    proposition: [
      {
        title: 'Bodily Autonomy',
        points: [
          'Individuals have a fundamental right to control their own bodies and live dignified lives.',
          'The state should not act as a "baby-sitter"; people should be free to make their own choices even if they are self-destructive.',
          'Different people find fulfillment in different ways; the state should err on the side of liberty.'
        ]
      },
      {
        title: 'Harm Reduction and Safety',
        points: [
          'Legalization eliminates the black market and the violence associated with turf wars.',
          'Government regulation ensures drugs are pure and sold in safe quantities, reducing accidental overdoses.',
          'Tax revenue from the drug trade can be diverted to funding rehabilitation programs and public health.'
        ]
      }
    ],
    opposition: [
      {
        title: 'Public Health Crisis',
        points: [
          'Legalization increases addiction by normalizing drug use and increasing access.',
          'Widespread availability leads to higher rates of drug-induced health problems and social decay.',
          'The "drug-industrial complex" (like Purdue Pharma) would lobby against regulation and for increased consumption.'
        ]
      },
      {
        title: 'Social Externalities',
        points: [
          'Drug use is not a victimless crime; it leads to family breakdown, child neglect, and increased crime to fund habits.',
          'The state has a duty to protect citizens from their own irrational actions and the negative impacts on the community.'
        ]
      }
    ]
  },
  {
    id: 'dollar-hegemony',
    title: 'Dollar Hegemony and Global Finance',
    category: 'International Relations',
    summary: 'The dominance of the US Dollar as the world\'s primary reserve currency and its implications for global stability.',
    proposition: [
      {
        title: 'Stability and Network Effects',
        points: [
          'The USD provides a stable and liquid asset for global trade and investment.',
          'Network effects make it efficient; most investors and institutions already use and trust the dollar.',
          'The SWIFT system clears most transactions in USD, providing a reliable global infrastructure.'
        ]
      }
    ],
    opposition: [
      {
        title: 'Global Contagion and Vulnerability',
        points: [
          'Global dependence on the dollar means financial crises in the US ripple across the entire world.',
          'Dollar appreciation in times of crisis induces sovereign debt crises in developing economies (EMEs).',
          'The US can weaponize its financial power through unilateral sanctions, as seen with Iran and Russia.'
        ]
      }
    ]
  }
];
