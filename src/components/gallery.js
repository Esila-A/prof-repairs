import One from "../photos/1.png";
import Two from "../photos/2.png";
import Three from "../photos/3.png";
import Four from "../photos/4.jpg";
import Five from "../photos/5.png";
import Six from "../photos/6.png";
import Seven from "../photos/7.jpg";
import Eight from "../photos/8.jpg";
import Nine from "../photos/9.jpg";
import Ten from "../photos/10.jpg";
import Eleven from "../photos/11.jpg";
import Twelve from "../photos/12.jpg";
import Thirteen from "../photos/13.jpg";
import Fourteen from "../photos/14.jpg";
import Fifteen from "../photos/15.jpg";
import Sixteen from "../photos/16.jpg";
import Seventeen from "../photos/17.jpg";

const Gallery = () => {
  return (
    <div className="gallery" id="gallery">
        <img src={One} alt="One" className="landing_carousel--container" />
        <img src={Two} alt="Two" className="landing_carousel--container" />
        <img src={Three} alt="Three" className="landing_carousel--container" />
        <img src={Four} alt="Four" className="landing_carousel--container" />
        <img src={Five} alt="Five" className="landing_carousel--container" />
        <img src={Six} alt="Six" className="landing_carousel--container" />
        <img src={Seven} alt="Seven" className="landing_carousel--container" />
        <img src={Eight} alt="Eight" className="landing_carousel--container" />
        <img src={Nine} alt="Nine" className="landing_carousel--container" />
        <img src={Ten} alt="Ten" className="landing_carousel--container" />
        <img src={Eleven} alt="Eleven" className="landing_carousel--container" />
        <img src={Twelve} alt="Twelve" className="landing_carousel--container" />
        <img src={Thirteen} alt="Thirteen" className="landing_carousel--container" />
        <img src={Fourteen} alt="Fourteen" className="landing_carousel--container" />
        <img src={Fifteen} alt="Fifteen" className="landing_carousel--container" />
        <img src={Sixteen} alt="Sixteen" className="landing_carousel--container" />
        <img src={Seventeen} alt="Seventeen" className="landing_carousel--container" />
        {/* <img src={Four} alt="Four" className="landing_carousel--container" />
        <img src={Five} alt="Five" className="landing_carousel--container" />
        <img src={Six} alt="Six" className="landing_carousel--container" />
        <img src={Seven} alt="Seven" className="landing_carousel--container" /> */}
    </div>
  );
}

export default Gallery;
