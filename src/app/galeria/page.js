// import Gallery from 'react-photo-gallery';
import styles from './page.module.scss';
// import { galleryImgs } from './galleryImgs';

export default function Galeria() {
  return (
    <main className={styles.main}>
      <div className={styles.page_gallery}>
        <h1>Galeria</h1>
        <p>
          Poniżej prezentują się zdjęcia wszystkich kwater, wspólnych
          pomieszczeń, dwóch kuchni, patio jak i również budynku z zewnątrz.
        </p>
        <p>Miłego oglądania.</p>
        <div className={styles.img_container}>
          <h2>Gallery</h2>
          {/* <Gallery photos={galleryImgs} /> */}
        </div>
      </div>
    </main>
  );
}
