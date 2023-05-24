import styles from '../kwatery-in.module.scss';

import RoomPersonIcon from '../../../../../public/room_equipment/RoomPersonIcon';

import RoomBedIcon from '../../../../../public/room_equipment/RoomBedIcon';
import RoomDoubleBedIcon from '../../../../../public/room_equipment/RoomDoubleBedIcon';
import RoomBathroomIcon from '../../../../../public/room_equipment/RoomBathroomIcon';
import RoomChairIcon from '../../../../../public/room_equipment/RoomChairIcon';
import RoomTableIcon from '../../../../../public/room_equipment/RoomTableIcon';
import RoomElectricityPlugIcon from '../../../../../public/room_equipment/RoomElectricityPlugIcon';
import RoomDimensions from '../../../../../public/room_equipment/RoomDimensions';
import WiFiIcon from '../../../../../public/room_equipment/WiFiIcon';

// import SlickCarousel from '../../../../components/SlickCarousel';
// eslint-disable-next-line max-len
// import kwateryStandard1 from '../../../../../public/kwatery/kwatery-standard/standard1/kwateraStandard1';

export default function Kwatera3() {
  return (
    <div className={styles.main}>
      <div className={styles.page_outlet}>
        <h3>3 - Trzyosobowy pokój na pietrze</h3>
        <div className={styles.room_equipment}>
          <div className={styles.room_equipment_boxs}>
            <RoomPersonIcon />
            <span>3</span>
          </div>
          <div className={styles.room_equipment_boxs}>
            <RoomBedIcon />
            <span>1</span>
          </div>
          <div className={styles.room_equipment_boxs}>
            <RoomDoubleBedIcon />
            <span>1</span>
          </div>
          <div className={styles.room_equipment_boxs}>
            <RoomBathroomIcon />
            <span>1</span>
          </div>
          <div className={styles.room_equipment_boxs}>
            <RoomChairIcon />
            <span>2~3</span>
          </div>
          <div className={styles.room_equipment_boxs}>
            <RoomTableIcon />
            <span>2</span>
          </div>
          <div className={styles.room_equipment_boxs}>
            <RoomElectricityPlugIcon />
            <span>4</span>
          </div>
          <div className={styles.room_equipment_boxs}>
            <WiFiIcon />
            <span>free</span>
          </div>
          <div className={styles.room_equipment_boxs}>
            <RoomDimensions />
            <span>~16m²</span>
          </div>
        </div>

        <div className={styles.room_equipment_info}>
          <h3>Informacja o pomieszczeniach</h3>
          <div className={styles.room_equipment_boxs}>
            <RoomPersonIcon />
            <span>Trzyosobowy pokój na piętrze</span>
          </div>
          <div className={styles.room_equipment_boxs}>
            <RoomBedIcon />
            <span>Jedno metalowe, parterowe łóżka</span>
          </div>
          <div className={styles.room_equipment_boxs}>
            <RoomDoubleBedIcon />
            <span>Jedno metalowe, piętrowe łóżko</span>
          </div>
          <div className={styles.room_equipment_boxs}>
            <RoomBathroomIcon />
            <span>Łazienka w każdym pokoju</span>
          </div>
          <div className={styles.room_equipment_boxs}>
            <RoomChairIcon />
            <span>Odpowiednia ilość krzeseł</span>
          </div>
          <div className={styles.room_equipment_boxs}>
            <RoomTableIcon />
            <span>Dwa biurka</span>
          </div>
          <div className={styles.room_equipment_boxs}>
            <RoomElectricityPlugIcon />
            <span>Gniazdko elektryczne przy każdym łóżku</span>
          </div>
          <div className={styles.room_equipment_boxs}>
            <WiFiIcon />
            <span>Darmowe WiFi na całym obiekcie</span>
          </div>
          <div className={styles.room_equipment_boxs}>
            <RoomDimensions />
            <span>Duży, komfortowy pokój</span>
          </div>

          {/* <SlickCarousel images={premium2Imgs} /> */}
        </div>
      </div>
    </div>
  );
}
