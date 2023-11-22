import Paint from "../icons/paint-roll.png";
import Floor from "../icons/draws.png";
import Blueprint from "../icons/blueprint.png";
import Sink from "../icons/sink.png";
import WaEn from "../icons/water-energy.png";
import Furniture from "../icons/furniture.png";

const DashboardServices = () => {
  return (
    <div className="services" id="services">
      <span className="services_heading">USŁUGI</span>
      <div className="services_info">
        <div className="services_info--detailes">
          <img src={Paint} alt="paint-icon" className="services_info--detailes img"/>
          <span className="services_info--detailes title">ŚCIANY I SUFITY</span>
          <ul className="services_info--detailes list">
            <li>malowanie ścian i sufitów</li>
            <li>zrywanie tapet</li>
            <li>gruntowanie</li>
            <li>kładzenie gładzi</li>
            <li>listwy sufitowe</li>
          </ul>
        </div>
        <div className="services_info--detailes">
          <img src={Floor} alt="floor-icon" className="services_info--detailes img"/>
          <span className="services_info--detailes title">PARKIETY I SCHODY</span>
          <ul className="services_info--detailes list">
            <li>cyklinowanie</li>
            <li>bejcowanie</li>
            <li>lakierowanie</li>
            <li>układanie nowych parkietów</li>
            <li>listwy podłogowe</li>
          </ul>
        </div>
        <div className="services_info--detailes">
          <img src={Blueprint} alt="blueprint-icon" className="services_info--detailes img"/>
          <span className="services_info--detailes title">PRZEBUDOWA</span>
          <ul className="services_info--detailes list">
            <li>rozbiórka (demontaż)</li>
            <li>montaż ścian działowych (bloczków, pustaków, GK)</li>
            <li>podwieszanie sufitów z płyty gipsu-kartonowej</li>
          </ul>
        </div>
        <div className="services_info--detailes">
          <img src={Sink} alt="sink-icon" className="services_info--detailes img"/>
          <span className="services_info--detailes title">KUCHNIA I ŁAZIENKA</span>
          <ul className="services_info--detailes list">
            <li>układanie kafli naściennych i podłogowych</li>
            <li>mozaiki</li>
            <li>montaż armatury</li>
            <li>zabudowy</li>
          </ul>
        </div>
        <div className="services_info--detailes">
          <img src={WaEn} alt="water-energy-icon" className="services_info--detailes img"/>
          <span className="services_info--detailes title">ELEKTRYKA I HYDRAULIKA</span>
          <ul className="services_info--detailes list">
            <li>modyfikacja istniejących instalacji hydraulicznych i elektrycznych</li>
            <li>montaż gniazdek, włączników i oświetlenia</li>
            <li>oświetlene wewnętrzne i zewnętrzne</li>
          </ul>
        </div>
        <div className="services_info--detailes">
          <img src={Furniture} alt="furniture-icon" className="services_info--detailes img"/>
          <span className="services_info--detailes title">MEBLE</span>
          <ul className="services_info--detailes list">
            <li>składanie mebli</li>
            <li>montaż mebli</li>
            <li>rozbiórka mebli</li>
            <li>meble wolnostojące</li>
            <li>meble zabudowane</li>
          </ul>
        </div>
      </div>
      <p className="services_additional">
      Jesteśmy specjalistyczną firmą świadczącą kompleksowe usługi remontowe, obejmujące pełen zakres działań od etapu planowania do zakończenia prac. Nasza oferta jest znacznie bardziej wszechstronna niż przedstawione powyżej listy. Jeśli nie znalazłeś interesującej Cię usługi w opublikowanej ofercie na naszej stronie, skontaktuj się z nami w celu ustalenia możliwości wykonania jej na zamówienie.
      </p>
    </div>
  );
};

export default DashboardServices;
