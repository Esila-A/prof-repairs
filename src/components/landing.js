import One from "../photos/1.png";
import Two from "../photos/2.png";
import Three from "../photos/3.png";
import Four from "../photos/4.jpg";
import Five from "../photos/5.png";
import Six from "../photos/6.jpg";
import Seven from "../photos/7.png";

const DashboardLanding = () => {
  return (
    <div className="landing" id="landing">
      <h1 className="landing_heading-one">PROF REPAIRS</h1>
      <h2 className="landing_heading-two">PROFESJONALNE USŁUGI REMONTOWO-WYKOŃCZENIOWE</h2>
      <div className="landing_carousel">
        <img src={One} alt="One" className="landing_carousel--container" />
        <img src={Two} alt="Two" className="landing_carousel--container" />
        <img src={Three} alt="Three" className="landing_carousel--container" />
        <img src={Four} alt="Four" className="landing_carousel--container" />
        <img src={Five} alt="Five" className="landing_carousel--container" />
        <img src={Six} alt="Six" className="landing_carousel--container" />
        <img src={Seven} alt="Seven" className="landing_carousel--container" />
      </div>
      <p className="landing_paragraph">
      Oferujemy szeroką gamę kompleksowych usług budowlanych, remontowych i wykończeniowych.<br/>
      Potrzebujesz cyklinowania, malowania bądź złożenia mebli? A może chcesz całkowicie przebudwać łazienkę?<br/>
      Nie wachaj się i zadzwoń lub napisz.
      </p>
      <a href="#contact" className="landing_button btn">
        SKONTAKTUJ SIĘ
      </a>
    </div>
  );
};

export default DashboardLanding;
