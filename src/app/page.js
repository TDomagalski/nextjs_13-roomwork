// import Image from "next/image";
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.page_default}>
        <h1>RoomWork</h1>
        <h5>Go work and relax in RoomWork</h5>
        <p>
          Witamy na naszej stronie internetowej. Mamy do zaoferowania kwatery
          pracownicze do wynajęcia.
        </p>
        <p style={{ textAlign: 'center' }}>
          Życzymy miłego przeglądania i zapraszamy do kontaktu.
        </p>
      </div>
    </main>
  );
}
