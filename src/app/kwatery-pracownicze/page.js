import Link from 'next/link';
import Image from 'next/image';

import styles from './page.module.scss';

export default function KwateryPracownicze() {
  return (
    <main className={styles.main}>
      <h1>Kwatery pracownicze</h1>
      <p>
        Nasze kwatery pracownicze są w pełni wyposażone. Każda kwatera posiada
        łazienkę, wygodne łóżka, poduszki, kołdry, pościele, szafki, stół i
        krzesła, a także dostęp do internetu i w pełni wyposażonej,
        ogólnodostępnej kuchni wraz z pralnią.
      </p>

      <p>
        Oferujemy atrakcyjne zniżki dla firm, które wynajmują kwatery
        pracownicze na dłuższy okres czasu.
      </p>

      <div className={styles.offer_nav}>
        <div className={styles.choose_room}>
          <Image
            src="/arrow-down_icon.svg"
            alt="Arrow down VV"
            width={35}
            height={35}
            priority
          />
          <h4>Wybierz piętro</h4>
          <Image
            src="/arrow-down_icon.svg"
            alt="Arrow down VV"
            width={35}
            height={35}
            priority
          />
        </div>
        <Link href="/kwatery-pracownicze/parter">
          <Image
            src="/aparts-down_icon.svg"
            alt="Pokoje na parterze"
            width={100}
            height={100}
            priority
          />
          <span>Kwatery parter</span>
        </Link>
        <Link href="/kwatery-pracownicze/pietro">
          <Image
            src="/aparts-up_icon.svg"
            alt="Pokoje na piętrze"
            width={100}
            height={100}
            priority
          />
          <span>Kwatery piętro</span>
        </Link>
      </div>
    </main>
  );
}
