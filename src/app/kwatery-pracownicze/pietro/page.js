import Link from 'next/link';
import Image from 'next/image';

import styles from '../kwatery-version.module.scss';

export default function KwateryPietro() {
  return (
    <div className={styles.main}>
      <div className={styles.page_outlet}>
        <h3>Pokoje na piętrze</h3>
        <p>
          Kliknij w pokój, a wyświetlą się niezbędne informacje o pomieszczeniu,
          wraz ze zdjęciami.
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
            <h4>Wybierz pokój</h4>
            <Image
              src="/arrow-down_icon.svg"
              alt="Arrow down VV"
              width={35}
              height={35}
              priority
            />
          </div>

          <div className={styles.room_version}>
            <Link href="/kwatery-pracownicze/pietro/kwatera-1">
              <Image
                src="/enter_room.svg"
                alt="Wejdź do pokoju"
                width={35}
                height={35}
                priority
              />
              <span className={styles.span_mobile}>1</span>
              <span className={styles.span_desktop}>Pokój 1</span>
            </Link>
            <Link href="/kwatery-pracownicze/pietro/kwatera-2">
              <Image
                src="/enter_room.svg"
                alt="Wejdź do pokoju"
                width={35}
                height={35}
                priority
              />
              <span className={styles.span_mobile}>2</span>
              <span className={styles.span_desktop}>Pokój 2</span>
            </Link>
            <Link href="/kwatery-pracownicze/pietro/kwatera-3">
              <Image
                src="/enter_room.svg"
                alt="Wejdź do pokoju"
                width={35}
                height={35}
                priority
              />
              <span className={styles.span_mobile}>3</span>
              <span className={styles.span_desktop}>Pokój 3</span>
            </Link>
            <Link href="/kwatery-pracownicze/pietro/kwatera-4">
              <Image
                src="/enter_room.svg"
                alt="Wejdź do pokoju"
                width={35}
                height={35}
                priority
              />
              <span className={styles.span_mobile}>4</span>
              <span className={styles.span_desktop}>Pokój 4</span>
            </Link>
            <Link href="/kwatery-pracownicze/pietro/kwatera-5">
              <Image
                src="/enter_room.svg"
                alt="Wejdź do pokoju"
                width={35}
                height={35}
                priority
              />
              <span className={styles.span_mobile}>5</span>
              <span className={styles.span_desktop}>Pokój 5</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
