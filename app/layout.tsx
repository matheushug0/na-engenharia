import type {Metadata} from 'next';
import { Inter, Manrope, JetBrains_Mono, Comfortaa, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });
const comfortaa = Comfortaa({ subsets: ['latin'], variable: '--font-comfortaa' });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });

export const metadata: Metadata = {
  metadataBase: new URL('https://na-engenharia.vercel.app'),
  title: 'N&A Engenharia | Energia Solar',
  description: 'Reduza sua conta de luz em até 90% e invista no que realmente importa.',
  openGraph: {
    title: 'N&A Engenharia | Energia Solar',
    description: 'Reduza sua conta de luz em até 90% e invista no que realmente importa.',
    url: 'https://na-engenharia.vercel.app',
    siteName: 'N&A Engenharia',
    images: ['/og_image.png'],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'N&A Engenharia | Energia Solar',
    description: 'Reduza sua conta de luz em até 90% e invista no que realmente importa.',
    images: ['/og_image.png'],
  },
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"><g fill="none" stroke="%23FFFFFF" stroke-width="24" stroke-linecap="round"><path d="M 150 212 Q 316 400 150 588"/><path d="M 230 196 Q 396 400 230 604"/><path d="M 310 144 Q 476 400 310 656"/><path d="M 390 104 Q 556 400 390 696"/><path d="M 650 212 Q 484 400 650 588"/><path d="M 570 196 Q 404 400 570 604"/><path d="M 490 144 Q 324 400 490 656"/><path d="M 410 104 Q 244 400 410 696"/></g></svg>',
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable} ${comfortaa.variable} ${plusJakartaSans.variable} dark`}>
      <body className="bg-[#0B1121] text-slate-50 font-sans antialiased selection:bg-amber-400/30 selection:text-amber-200" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
