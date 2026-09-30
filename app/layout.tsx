import type { Metadata } from 'next';
import { Bricolage_Grotesque, Newsreader } from 'next/font/google';
import Nav from '@/components/Nav';
import './globals.css';

const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--f-display' });
const body = Newsreader({ subsets: ['latin'], variable: '--f-body', style: ['normal', 'italic'] });

export const metadata: Metadata = {
  title: { default: 'PatrimonioNariño', template: '%s · PatrimonioNariño' },
  description: 'Explora iglesias, museos, monumentos, centros históricos y carnavales de Pasto y Nariño.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body><Nav /><main>{children}</main><footer>PatrimonioNariño · Patrimonio cultural de Pasto y Nariño · Verifica los horarios antes de tu visita</footer></body>
    </html>
  );
}
