import Link from 'next/link';

import styles from './page.module.scss';

export default function Navbar() {
  return (
    <div className={styles.navigation_bar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span style={{ fontSize: '2rem' }}>RoomWork.pl</span>
        </Link>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/kwatery-pracownicze">Kwatery</Link>
          <Link href="/galeria">Galeria</Link>
          <Link href="/kontakt">Kontakt</Link>
        </nav>
      </div>
    </div>
  );
}
