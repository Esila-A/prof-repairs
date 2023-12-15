import One from "../photos/1.png";
import Two from "../photos/2.png";
import Three from "../photos/3.jpeg";
import Four from "../photos/4.jpg";
import Five from "../photos/5.jpeg";
import Six from "../photos/6.jpeg";
import Seven from "../photos/7.jpeg";
import Seventeen from "../photos/17.jpeg";

const DashboardLanding = () => {

  const scrollers = document.querySelectorAll(".landing_carousel");

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }
  
  function addAnimation() {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);
  
      const scrollerInner = scroller.querySelector(".landing_carousel--inner");
      const scrollerContent = Array.from(scrollerInner.children);
  
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }

  return (
    // <div className="landing" id="landing">
    //   <h1 className="landing_heading-one">PROF REPAIRS</h1>
    //   <h2 className="landing_heading-two">PROFESJONALNE USŁUGI REMONTOWO-WYKOŃCZENIOWE</h2>
    //   <div id="carousel" class="landing_carousel">
    //     <img src={One} alt="One" class="landing_carousel--container" />
    //     <img src={Two} alt="Two" class="landing_carousel--container" />
    //     <img src={Three} alt="Three" class="landing_carousel--container" />
    //     <img src={Four} alt="Four" class="landing_carousel--container" />
    //     <img src={Five} alt="Five" class="landing_carousel--container" />
    //     <img src={Six} alt="Six" class="landing_carousel--container" />
    //     <img src={Seven} alt="Seven" class="landing_carousel--container" />
    //     <img src={Seventeen} alt="Seventeen" class="landing_carousel--container" />
    //   </div>
    //   <p className="landing_paragraph">
    //   Oferujemy szeroką gamę kompleksowych usług budowlanych, remontowych i wykończeniowych.<br/>
    //   Potrzebujesz cyklinowania, malowania bądź złożenia mebli? A może chcesz całkowicie przebudwać łazienkę?<br/>
    //   Nie wahaj się i zadzwoń lub napisz.
    //   </p>
    //   <a href="#contact" className="landing_button btn">
    //     SKONTAKTUJ SIĘ
    //   </a>
    // </div>

    <div className="landing" id="landing">
      <h1 className="landing_heading-one">PROF REPAIRS</h1>
      <h2 className="landing_heading-two">PROFESJONALNE USŁUGI REMONTOWO-WYKOŃCZENIOWE</h2>
      <div id="carousel" className="landing_carousel" data-animated="true">
        <div className="landing_carousel--inner">
          <img src={One} alt="One" className="landing_carousel--container" />
          <img src={Two} alt="Two" className="landing_carousel--container" />
          <img src={Three} alt="Three" className="landing_carousel--container" />
          <img src={Four} alt="Four" className="landing_carousel--container" />
          <img src={Five} alt="Five" className="landing_carousel--container" />
          <img src={Six} alt="Six" className="landing_carousel--container" />
          <img src={Seven} alt="Seven" className="landing_carousel--container" />
          <img src={Seventeen} alt="Seventeen" className="landing_carousel--container" />
        </div>
      </div>
      <p className="landing_paragraph">
      Oferujemy szeroką gamę kompleksowych usług budowlanych, remontowych i wykończeniowych.<br/>
      Potrzebujesz cyklinowania, malowania bądź złożenia mebli? A może chcesz całkowicie przebudwać łazienkę?<br/>
      Nie wahaj się i zadzwoń lub napisz.
      </p>
      <a href="#contact" className="landing_button btn">
        SKONTAKTUJ SIĘ
      </a>
    </div>
  );
};

export default DashboardLanding;
