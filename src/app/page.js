// import Image from "next/image";
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.page_default}>
        <h1>RoomWork</h1>
        <h5>Go work and relax in RoomWork</h5>
        <p>
          Poszukujesz wygodnego i przystępnego cenowo zakwaterowania dla swoich
          pracowników w lokalnej okolicy? Skorzystaj z naszej oferty kwater
          pracowniczych!
        </p>
        <p>
          Jeśli szukasz komfortowego i funkcjonalnego zakwaterowania dla swojego
          zespołu w okolicy, to nasze kwatery pracownicze są idealnym
          rozwiązaniem dla Ciebie! Skontaktuj się z nami już dziś, aby poznać
          naszą ofertę oraz sprawdzić dostępność naszych kwater pracowniczych.
          Jesteśmy pewni, że znajdziemy idealne mieszkanie dla Twoich
          pracowników!
        </p>
        <p style={{ textAlign: 'center' }}>
          Życzymy miłego przeglądania i zapraszamy do kontaktu.
        </p>
      </div>
    </main>
  );
}
