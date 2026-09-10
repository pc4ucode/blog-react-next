import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Container } from '@/components/Container';

export const metadata: Metadata = {
  title: {
    default: 'The blog - Este é um blog com Next.js adadsa',
    template: '%s | The blog',
  },
  description: 'Este é um blog com Next.js',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang='pt-BR'>
      <body>
        <Container>
          <Header />
          {children}
          <footer>
            <h1 className='text-6xl font-bold text-center py-8'>FOOTER</h1>
          </footer>
        </Container>
      </body>
    </html>
  );
}
