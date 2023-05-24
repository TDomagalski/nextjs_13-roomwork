import Link from 'next/link';
import Image from 'next/image';

import styles from './page.module.scss';

export default function Kontakt() {
  return (
    <main className={styles.main}>
      <div className={styles.Contact_info}>
        <h1>Kontakt</h1>
        <p className={styles.info_company}>
          Family Party non-profit Sp. z o.o.
        </p>
        <p className={styles.info_adress}>ul. Krakowska 62D</p>
        <p className={styles.info_adress}>32-090 Słomniki</p>
        <p className={styles.info_nip}>NIP: 682-177-77-38</p>
        <p className={styles.info_regon}>REGON: 381101585</p>
        <Link href="/">www.RoomWork.pl</Link>
        <div className={styles.page_link_phoneEmail}>
          <div className={styles.phone}>
            <Image
              src="/phone_call-icon.svg"
              alt="Write e-mail to Us"
              width={50}
              height={50}
              priority
            />
            <span>664-939-711</span>
          </div>
          <div className={styles.email}>
            <Image
              src="/email-icon.svg"
              alt="Write e-mail to Us"
              width={50}
              height={50}
              priority
            />
            <span>kwatery@roomwork.pl</span>
          </div>
        </div>
      </div>
      <div className={styles.page_Contact_form}>
        <h2>Skontaktuj się z nami</h2>
        <h2>Czekamy na wiadomość</h2>
        {/* <ContactForm /> */}
      </div>
    </main>
  );
}
