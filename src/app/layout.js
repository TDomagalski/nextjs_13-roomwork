import { Inter } from 'next/font/google';

// styles
import './globals.scss';

// components
import Infobar from '../components/Infobar/page';
import Navbar from '../components/Navbar/page';
import Contactrow from '../components/Contactrow/page';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'RoomWork - kwatery pracownicze',
  description:
    'Kwatery pracownicze do wynajęcia dla firm i osób prywatnych dla swojej ekipy i pracowników w Słomnikach i w pobliżu miejscowości Niedźwiedź, Proszowice, Niegardów, Smroków, Prandocin-Iły ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <header>
          <Infobar />
          <Navbar />
        </header>
        <main>
          {children}
          <Contactrow />
        </main>
      </body>
    </html>
  );
}
