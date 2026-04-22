export type EvidenceStrength = 'strong' | 'weak' | 'disputed';
export type EvidenceType = 'statistic' | 'quote' | 'research' | 'link';

export interface Evidence {
  id: string;
  type: EvidenceType;
  content: string;
  source?: string;
  url?: string;
  strength: EvidenceStrength;
}

export interface Argument {
  title: string;
  points: string[];
  evidence: Evidence[];
}

export interface CaseFile {
  id: string;
  title: string;
  category: string;
  summary: string;
  tags: string[];
  proposition: Argument[];
  opposition: Argument[];
}

export const CASE_FILES: CaseFile[] = [
  {
    id: 'state-ownership',
    title: 'State Ownership: Nationalization vs. Privatization',
    category: 'Economics',
    summary: 'The debate over whether key industries (banks, utilities, natural resources) should be owned by the state or private entities.',
    tags: ['Economics', 'Policy', 'Infrastructure'],
    proposition: [
      {
        title: 'Natural Monopolies and Inelastic Demand',
        points: [
          'Markets only work when companies face competitive pressures to lower prices and innovate.',
          'In industries with high barriers to entry (utilities, infrastructure), private firms can price gouge due to inelastic demand.',
          'Nationalization ensures services remain affordable and accessible to all, especially in poor areas.'
        ],
        evidence: [
          {
            id: 'ev-1',
            type: 'statistic',
            content: 'Privatized UK rail fares increased 20% faster than inflation between 1995 and 2015.',
            source: 'Action for Rail Report',
            strength: 'strong'
          }
        ]
      },
      {
        title: 'Long-Term Development vs. Short-Term Profit',
        points: [
          'Private companies are focused on quarterly reports and short-term profitability to satisfy investors.',
          'Governments can prioritize long-term initiatives like poverty alleviation and infrastructure.',
        ],
        evidence: [
          {
            id: 'ev-2',
            type: 'research',
            content: 'State-owned enterprises in China have been instrumental in the rapid expansion of high-speed rail network.',
            source: 'World Bank Research',
            strength: 'strong'
          }
        ]
      }
    ],
    opposition: [
      {
        title: 'Efficiency and Innovation',
        points: [
          'Nationalized SOEs are insulated from competitive pressures, leading to slack, waste, and negligence.',
          'Bureaucracy and red tape stymie innovation within state-owned enterprises.',
        ],
        evidence: [
          {
            id: 'ev-3',
            type: 'research',
            content: 'Study comparing privatized vs state-owned telecom firms shows 30% higher efficiency in private firms.',
            source: 'OECD Digital Economy Papers',
            strength: 'disputed'
          }
        ]
      },
      {
        title: 'Corruption and Political Patronage',
        points: [
          'SOEs often become enmeshed in patronage networks, staffed with party loyalists.',
          'State ownership creates conditions for corruption to arise.',
        ],
        evidence: [
          {
            id: 'ev-4',
            type: 'research',
            content: 'High correlation between state-owned resource dependence and corruption indices in Sub-Saharan Africa.',
            source: 'Transparency International',
            strength: 'strong'
          }
        ]
      }
    ]
  },
  {
    id: 'drug-legalization',
    title: 'Legalization of All Drugs',
    category: 'Social Policy',
    summary: 'The movement to fully legalize the consumption and production of all currently illegal substances.',
    tags: ['Society', 'Health', 'Policy'],
    proposition: [
      {
        title: 'Bodily Autonomy',
        points: [
          'Individuals have a fundamental right to control their own bodies.',
          'The state should not act as a "baby-sitter"; people should be free to make their own choices.'
        ],
        evidence: [
          {
            id: 'ev-5',
            type: 'quote',
            content: "Over himself, over his own body and mind, the individual is sovereign.",
            source: 'John Stuart Mill, On Liberty',
            strength: 'strong'
          }
        ]
      },
      {
        title: 'Harm Reduction and Safety',
        points: [
          'Legalization eliminates the black market and associated violence.',
          'Government regulation ensures drug purity, reducing accidental overdoses.'
        ],
        evidence: [
          {
            id: 'ev-6',
            type: 'statistic',
            content: 'Portugal saw a 60% decrease in overdose deaths after decriminalization in 2001.',
            source: 'Drug Policy Alliance',
            strength: 'strong'
          }
        ]
      }
    ],
    opposition: [
      {
        title: 'Public Health Crisis',
        points: [
          'Legalization increases addiction by normalizing drug use and increasing access.',
          'Widespread availability leads to higher rates of health problems.'
        ],
        evidence: [
          {
            id: 'ev-7',
            type: 'research',
            content: 'Study suggests legalization of cannabis in Colorado led to 15% increase in youth usage.',
            source: 'Journal of Adolescent Health',
            strength: 'disputed'
          }
        ]
      }
    ]
  }
];
