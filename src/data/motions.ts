export interface Motion {
  id: string;
  text: string;
  infoSlide?: string;
  format: 'BP' | 'WSDC' | 'Both';
  category: string;
  level: 'Novice' | 'Intermediate' | 'Open';
  year?: number;
  tournament?: string;
}

export const MOTIONS: Motion[] = [
  {
    id: '1',
    text: 'This House believes that the feminist movement should oppose the commercialization of feminism (e.g., "girl boss" branding, feminist-themed merchandise).',
    format: 'BP',
    category: 'Social Justice',
    level: 'Open',
    tournament: 'WUDC 2024',
    year: 2024
  },
  {
    id: '2',
    text: 'This House would ban the use of private military contractors in combat zones.',
    format: 'Both',
    category: 'International Relations',
    level: 'Intermediate',
    tournament: 'EUDC 2023',
    year: 2023
  },
  {
    id: '3',
    text: 'This House regrets the rise of the "gig economy".',
    format: 'WSDC',
    category: 'Economics',
    level: 'Novice',
    tournament: 'WSDC 2022',
    year: 2022
  },
  {
    id: '4',
    text: 'This House would allow parents to edit the genetic code of their children for non-medical purposes.',
    format: 'BP',
    category: 'Ethics/Science',
    level: 'Open',
    tournament: 'Oxford IV',
    year: 2023
  },
  {
    id: '5',
    text: 'This House believes that developing nations should prioritize economic growth over environmental protections.',
    format: 'Both',
    category: 'Economics/Environment',
    level: 'Intermediate',
    tournament: 'Cambridge IV',
    year: 2022
  },
  {
    id: '6',
    text: 'This House would implement a universal basic income.',
    format: 'WSDC',
    category: 'Economics',
    level: 'Novice',
    tournament: 'Schools Nationals',
    year: 2023
  },
  {
    id: '7',
    text: 'This House supports the creation of a single global currency.',
    format: 'BP',
    category: 'Economics',
    level: 'Open',
    tournament: 'Yale IV',
    year: 2021
  },
  {
    id: '8',
    text: 'This House believes that social media companies should be held legally responsible for the content posted on their platforms.',
    format: 'Both',
    category: 'Technology/Law',
    level: 'Intermediate',
    tournament: 'WSDC 2021',
    year: 2021
  },
  {
    id: '9',
    text: 'This House would nationalize all systemically important financial institutions, such as banks and insurance companies.',
    format: 'BP',
    category: 'Economics/Finance',
    level: 'Open',
    tournament: 'Vietnam WUDC Matter File',
    year: 2023
  },
  {
    id: '10',
    text: 'This House would give more votes to the poor.',
    format: 'BP',
    category: 'Politics/Social Justice',
    level: 'Intermediate',
    tournament: 'Vietnam WUDC Matter File',
    year: 2023
  },
  {
    id: '11',
    text: 'This House would pursue a lucrative career and donate a large portion of their income rather than work in the non-profit sector.',
    format: 'BP',
    category: 'Ethics/Economics',
    level: 'Open',
    tournament: 'Vietnam WUDC Matter File',
    year: 2023
  },
  {
    id: '12',
    text: 'This House would legalize all drugs.',
    format: 'Both',
    category: 'Social Policy/Health',
    level: 'Intermediate',
    tournament: 'Vietnam WUDC Matter File',
    year: 2023
  },
  {
    id: '13',
    text: 'This House opposes Biden’s agreement to send F-16 fighter jets to Ukraine.',
    format: 'BP',
    category: 'International Relations',
    level: 'Open',
    tournament: 'Vietnam WUDC Matter File',
    year: 2023
  },
  {
    id: '14',
    text: 'This House supports the global rise of sovereign wealth funds.',
    format: 'BP',
    category: 'Economics/Finance',
    level: 'Open',
    tournament: 'Vietnam WUDC Matter File',
    year: 2023
  },
  {
    id: '15',
    text: 'This House regrets the PGA–LIV merger.',
    format: 'Both',
    category: 'Sports/Economics',
    level: 'Intermediate',
    tournament: 'Vietnam WUDC Matter File',
    year: 2023
  }
];
