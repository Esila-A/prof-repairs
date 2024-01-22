import { NavHashLink } from "react-router-hash-link";

import One from "../photos/1.png";
import Two from "../photos/2.png";
import Three from "../photos/3.jpeg";
import Four from "../photos/4.jpg";
import Five from "../photos/5.jpeg";
import Six from "../photos/6.jpeg";
import Seven from "../photos/7.jpeg";
import Seventeen from "../photos/17.jpeg";

const Landing = () => {

  return (
    <div className="landing" id="landing">
      <h1 className="landing_heading-one">PROF REPAIRS</h1>
      <h2 className="landing_heading-two">PROFESJONALNE USŁUGI REMONTOWO-WYKOŃCZENIOWE</h2>
      <div id="carousel" className="landing_carousel laptop" >
        <div className="landing_carousel--inner">
          <div className="landing_carousel--image">
            <img src={One} alt="One" className="landing_carousel--container" />
          </div>
          <div className="landing_carousel--image">
            <img src={Two} alt="Two" className="landing_carousel--container" />
          </div>
          <div className="landing_carousel--image">
            <img src={Three} alt="Three" className="landing_carousel--container" />
          </div>
          <div className="landing_carousel--image">
            <img src={Four} alt="Four" className="landing_carousel--container" />
          </div>
          <div className="landing_carousel--image">
            <img src={Five} alt="Five" className="landing_carousel--container" />
          </div>
          <div className="landing_carousel--image">
            <img src={Six} alt="Six" className="landing_carousel--container" />
          </div>
          <div className="landing_carousel--image">
            <img src={Seven} alt="Seven" className="landing_carousel--container" />
          </div>
          <div className="landing_carousel--image">
            <img src={Seventeen} alt="Seventeen" className="landing_carousel--container" />
          </div>
          <div className="landing_carousel--image">
            <img src={One} alt="One" className="landing_carousel--container" />
          </div>
          <div className="landing_carousel--image">
            <img src={Two} alt="Two" className="landing_carousel--container" />
          </div>
          <div className="landing_carousel--image">
            <img src={Three} alt="Three" className="landing_carousel--container" />
          </div>
          <div className="landing_carousel--image">
            <img src={Four} alt="Four" className="landing_carousel--container" />
          </div>
          <div className="landing_carousel--image">
            <img src={Five} alt="Five" className="landing_carousel--container" />
          </div>
          <div className="landing_carousel--image">
            <img src={Six} alt="Six" className="landing_carousel--container" />
          </div>
          <div className="landing_carousel--image">
            <img src={Seven} alt="Seven" className="landing_carousel--container" />
          </div>
          <div className="landing_carousel--image">
            <img src={Seventeen} alt="Seventeen" className="landing_carousel--container" />
          </div>
        </div>
      </div>
      <div id="carousel" class="landing_carousel mobile">
        <img src={One} alt="One" class="landing_carousel--container" />
        <img src={Two} alt="Two" class="landing_carousel--container" />
        <img src={Three} alt="Three" class="landing_carousel--container" />
        <img src={Four} alt="Four" class="landing_carousel--container" />
        <img src={Five} alt="Five" class="landing_carousel--container" />
        <img src={Six} alt="Six" class="landing_carousel--container" />
        <img src={Seven} alt="Seven" class="landing_carousel--container" />
        <img src={Seventeen} alt="Seventeen" class="landing_carousel--container" />
      </div>
      <p className="landing_paragraph">
        Oferujemy szeroką gamę kompleksowych usług budowlanych, remontowych i wykończeniowych.<br/>
        Potrzebujesz cyklinowania, malowania bądź złożenia mebli? A może chcesz całkowicie przebudwać łazienkę?<br/>
        Nie wahaj się i zadzwoń lub napisz.
      </p>
      <NavHashLink to="/contact/#contact" className="landing_button btn">
        SKONTAKTUJ SIĘ
      </NavHashLink>
    </div>
  );
};

export default Landing;
