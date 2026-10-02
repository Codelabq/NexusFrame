import { Geist, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';

const geist = Geist({ subsets: ['latin'] });
const hankenGrotesk = Hanken_Grotesk({ subsets: ['latin'] });
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export const fonts = {
  geist,
  hankenGrotesk,
  jetBrainsMono,
};
