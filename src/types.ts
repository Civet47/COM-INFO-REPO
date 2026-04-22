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

declare global {
  interface Window {
    aistudio: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}
