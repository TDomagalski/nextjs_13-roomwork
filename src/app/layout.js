import './globals.scss';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'RoomWork - kwatery pracownicze',
  description:
    'Kwatery pracownicze do wynajęcia dla firm i osób prywatnych dla swojej ekipy i pracowników w Słomnikach i okolicy',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
