import Image from 'next/image';
import styles from './page.module.scss';

// GALLERY IMAGES
// ~~ Front img
import RoomWorkFront from '../../../public/front_img.webp';
// ~~ Patio img
import patioImg1 from '../../../public/kwatery-pracownicze/parter/patio/patio-parter_img1.webp';
// ~~ Parter hall imgs
import parterHallImg1 from '../../../public/kwatery-pracownicze/parter/korytarz/korytarz-parter_img1.webp';
import parterHallImg2 from '../../../public/kwatery-pracownicze/parter/korytarz/korytarz-parter_img2.webp';
// ~~ parter1
import parter1Img1 from '../../../public/kwatery-pracownicze/parter/kwatera1/kwatera-parter1_img1.webp';
import parter1Img2 from '../../../public/kwatery-pracownicze/parter/kwatera1/kwatera-parter1_img2.webp';
import parter1Img3 from '../../../public/kwatery-pracownicze/parter/kwatera1/kwatera-parter1_img3.webp';
// ~~ parter2
import parter2Img1 from '../../../public/kwatery-pracownicze/parter/kwatera2/kwatera-parter2_img1.webp';
import parter2Img2 from '../../../public/kwatery-pracownicze/parter/kwatera2/kwatera-parter2_img2.webp';
import parter2Img3 from '../../../public/kwatery-pracownicze/parter/kwatera2/kwatera-parter2_img3.webp';
// ~~ parter3
import parter3Img1 from '../../../public/kwatery-pracownicze/parter/kwatera3/kwatera-parter3_img1.webp';
import parter3Img2 from '../../../public/kwatery-pracownicze/parter/kwatera3/kwatera-parter3_img2.webp';
import parter3Img3 from '../../../public/kwatery-pracownicze/parter/kwatera3/kwatera-parter3_img3.webp';
// ~~ parter4
import parter4Img1 from '../../../public/kwatery-pracownicze/parter/kwatera4/kwatera-parter4_img1.webp';
import parter4Img2 from '../../../public/kwatery-pracownicze/parter/kwatera4/kwatera-parter4_img2.webp';
import parter4Img3 from '../../../public/kwatery-pracownicze/parter/kwatera4/kwatera-parter4_img3.webp';
// ~~ parter5
import parter5Img1 from '../../../public/kwatery-pracownicze/parter/kwatera5/kwatera-parter5_img1.webp';
import parter5Img2 from '../../../public/kwatery-pracownicze/parter/kwatera5/kwatera-parter5_img2.webp';
import parter5Img3 from '../../../public/kwatery-pracownicze/parter/kwatera5/kwatera-parter5_img3.webp';

// ~~ Piętro stairs nad hall
import pietroStairsImg1 from '../../../public/kwatery-pracownicze/pietro/klatka_schodowa/klatka_schodowa-pietro_img1.webp';
import pietroHallImg1 from '../../../public/kwatery-pracownicze/pietro/korytarz/korytarz-pietro_img1.webp';
import pietroHallImg2 from '../../../public/kwatery-pracownicze/pietro/korytarz/korytarz-pietro_img2.webp';
import pietroHallImg3 from '../../../public/kwatery-pracownicze/pietro/korytarz/korytarz-pietro_img3.webp';
// ~~ pietro1
import premium1Img1 from '../../../public/kwatery-pracownicze/pietro/kwatera1/kwatera-pietro1_img1.webp';
import premium1Img2 from '../../../public/kwatery-pracownicze/pietro/kwatera1/kwatera-pietro1_img2.webp';
import premium1Img3 from '../../../public/kwatery-pracownicze/pietro/kwatera1/kwatera-pietro1_img3.webp';
import premium1Img4 from '../../../public/kwatery-pracownicze/pietro/kwatera1/kwatera-pietro1_img4.webp';
// ~~ pietro2
import premium2Img1 from '../../../public/kwatery-pracownicze/pietro/kwatera2/kwatera-pietro2_img1.webp';
import premium2Img2 from '../../../public/kwatery-pracownicze/pietro/kwatera2/kwatera-pietro2_img2.webp';
import premium2Img3 from '../../../public/kwatery-pracownicze/pietro/kwatera2/kwatera-pietro2_img3.webp';
// ~~ pietro3
import premium3Img1 from '../../../public/kwatery-pracownicze/pietro/kwatera3/kwatera-pietro3_img1.webp';
import premium3Img2 from '../../../public/kwatery-pracownicze/pietro/kwatera3/kwatera-pietro3_img2.webp';
import premium3Img3 from '../../../public/kwatery-pracownicze/pietro/kwatera3/kwatera-pietro3_img3.webp';
import premium3Img4 from '../../../public/kwatery-pracownicze/pietro/kwatera3/kwatera-pietro3_img4.webp';
// ~~ pietro4
import premium4Img1 from '../../../public/kwatery-pracownicze/pietro/kwatera4/kwatera-pietro4_img1.webp';
import premium4Img2 from '../../../public/kwatery-pracownicze/pietro/kwatera4/kwatera-pietro4_img2.webp';
import premium4Img3 from '../../../public/kwatery-pracownicze/pietro/kwatera4/kwatera-pietro4_img3.webp';
import premium4Img4 from '../../../public/kwatery-pracownicze/pietro/kwatera4/kwatera-pietro4_img4.webp';
// ~~ pietro5
import premium5Img1 from '../../../public/kwatery-pracownicze/pietro/kwatera5/kwatera-pietro5_img1.webp';

export default function Galeria() {
  return (
    <div className={styles.main}>
      <div className={styles.gallery_description}>
        <h1>Galeria</h1>
        <h4>Witamy w naszej galerii kwater pracowniczych!</h4>
        <p>
          Przeglądając naszą bogatą kolekcję zdjęć, będziesz mógł zobaczyć, jak
          komfortowe i przyjemne są nasze kwatery pracownicze. Oferujemy
          różnorodne rozwiązania mieszkalne, które spełnią oczekiwania Twojego
          Zespołu.
        </p>
      </div>
      <div className={styles.gallery_container}>
        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={RoomWorkFront}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={patioImg1}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={parterHallImg1}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={parterHallImg2}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={parter1Img1}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={parter1Img2}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={parter1Img3}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={parter2Img1}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={parter2Img2}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={parter2Img3}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>

        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={parter3Img1}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={parter3Img2}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={parter3Img3}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>

        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={parter4Img1}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={parter4Img2}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={parter4Img3}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>

        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={parter5Img1}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={parter5Img2}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={parter5Img3}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>

        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={pietroStairsImg1}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={pietroHallImg1}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={pietroHallImg2}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={pietroHallImg3}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>

        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={premium1Img1}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={premium1Img2}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={premium1Img3}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={premium1Img4}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>

        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={premium2Img1}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={premium2Img2}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={premium2Img3}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>

        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={premium3Img1}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={premium3Img2}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={premium3Img3}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={premium3Img4}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>

        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={premium4Img1}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={premium4Img2}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={premium4Img3}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={premium4Img4}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>

        <div className={styles.img}>
          <Image
            alt="Zdjęcie kwater RoomWork.pl od frontu"
            src={premium5Img1}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
    </div>
  );
}
