import styles from './page.module.scss';

export default function Galeria() {
  return (
    <div className={styles.main}>
      <h1>Galeria</h1>
      <h4>Witamy w naszej galerii kwater pracowniczych!</h4>
      <p>
        Przeglądając naszą bogatą kolekcję zdjęć, będziesz mógł zobaczyć, jak
        komfortowe i przyjemne są nasze kwatery pracownicze. Oferujemy
        różnorodne rozwiązania mieszkalne, które spełnią oczekiwania Twojego
        Zespołu.
      </p>
      <div className={styles.img_container}>
        <h2>Gallery</h2>
      </div>
    </div>
  );
}
