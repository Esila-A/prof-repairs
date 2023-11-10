import Paint from "../icons/paint-roll.png";
import Floor from "../icons/draws.png";
import Blueprint from "../icons/blueprint.png";
import Sink from "../icons/sink.png";
import WaEn from "../icons/water-energy.png";
import Furniture from "../icons/furniture.png";

const DashboardServices = () => {
  return (
    <div className="services" id="services">
      <h2 className="services_heading">USŁUGI</h2>
      <div className="services_info">
        <div className="services_info--detailes">
          <img src={Paint} className="services_info--detailes img"/>
          <h3 className="services_info--detailes title">ŚCIANY I SUFITY</h3>
          <ul className="services_info--detailes list">
            <li>malowanie ścian i sufitów</li>
            <li>zrywanie tapet</li>
            <li>gruntowanie</li>
            <li>kładzenie gładzi</li>
            <li>listwy sufitowe</li>
          </ul>
        </div>
        <div className="services_info--detailes">
          <img src={Floor} className="services_info--detailes img"/>
          <h3 className="services_info--detailes title">PARKIETY I SCHODY</h3>
          <ul className="services_info--detailes list">
            <li>cyklinowanie</li>
            <li>bejcowanie</li>
            <li>lakierowanie</li>
            <li>układanie nowych parkietów</li>
            <li>listwy podłogowe</li>
          </ul>
        </div>
        <div className="services_info--detailes">
          <img src={Blueprint} className="services_info--detailes img"/>
          <h3 className="services_info--detailes title">PRZEBUDOWA</h3>
          <ul className="services_info--detailes list">
            <li>rozbiórka (demontaż)</li>
            <li>montaż ścian działowych (bloczków, pustaków, GK)</li>
            <li>podwieszanie sufitów z płyty gipsu-kartonowej</li>
          </ul>
        </div>
        <div className="services_info--detailes">
          <img src={Sink} className="services_info--detailes img"/>
          <h3 className="services_info--detailes title">KUCHNIA I ŁAZIENKA</h3>
          <ul className="services_info--detailes list">
            <li>układanie kafli naściennych i podłogowych</li>
            <li>mozaiki</li>
            <li>montaż armatury</li>
            <li>zabudowy</li>
          </ul>
        </div>
        <div className="services_info--detailes">
          <img src={WaEn} className="services_info--detailes img"/>
          <h3 className="services_info--detailes title">ELEKTRYKA I HYDRAULIKA</h3>
          <ul className="services_info--detailes list">
            <li>modyfikacja istniejących instalacji hydraulicznych i elektrycznych</li>
            <li>montaż gniazdek, włączników i oświetlenia</li>
            <li>oświetlene wewnętrzne i zewnętrzne</li>
          </ul>
        </div>
        <div className="services_info--detailes">
          <img src={Furniture} className="services_info--detailes img"/>
          <h3 className="services_info--detailes title">MEBLE</h3>
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
        Realizujemy kompleksowe usługi remontowe, obejmujące pełen zakres działań od początku do końca. Nasza oferta uwzględnia znacznie szerszy zakres prac niż przedstawione w powyższych listach. Jeśli nie znajdziesz konkretnej usługi, której potrzebujesz, zachęcamy do kontaktu telefonicznego. Chętnie omówimy wszystkie szczegóły i dostosujemy nasze usługi do Twoich indywidualnych potrzeb. 
      </p>
    </div>
  );
};

export default DashboardServices;
