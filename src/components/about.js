import Convo from "../icons/convo.png";
import Invoice from "../icons/invoice.png";
import Wallet from "../icons/wallet.png";

const About = () => {

  return (
    <div className="about" id="about">
      <span className="about_heading">O NAS</span>
      <p className="about_paragraph">
      Firma Prof Repairs oferuje kompleksowe usługi remontowo-wykończeniowe. Nasz zespół doświadczonych pracowników posiada bogate wieloletnie doświadczenie zdobyte w firmach budowlanych, remontowych i wykończeniowych. Naszą misją jest dostarczanie usług najwyższej jakości, dlatego też stale inwestujemy w najnowocześniejsze narzędzia, sprzęt i techniki.<br/><br/>
      Nasza firma zwraca szczególną uwagę na czystość podczas wykonywanych prac i zawsze dokładnie sprząta po ich zakończeniu. Niezależnie od tego, czy potrzebujesz remontu całego mieszkania, czy pojedynczego pomieszczenia, jesteśmy gotowi podjąć się zadania. Nasza dewiza to realizacja Twojej wizji, ale jeśli potrzebujesz wsparcia w projektowaniu lub pomysłów, chętnie dzielimy się naszą wiedzą i doświadczeniem.<br/><br/>
      Nasz priorytet to precyzyjne wykonanie zleceń i pełne zadowolenie klienta. Jeśli szukasz profesjonalnej firmy remontowej, która zrozumie Twoje potrzeby i zapewni doskonałą jakość usług, to Prof-Repairs jest gotowy do działania. Skontaktuj się z nami już dziś, aby rozpocząć projekt, który spełni Twoje oczekiwania.
      </p>
      <div className="about_points">
        <div className="about_points--details">
          <img src={Convo} alt="conversation-icon" className="icon"/>
          <p className="about_paragraph about_paragraph--withIcon">
            Określamy zakres i terminy prac, ustalamy dokładne koszty i tworzymy
            umowę.
          </p>
        </div>
        <div className="about_points--details">
          <img src={Invoice} alt="invoice-icon" className="icon"/>
          <p className="about_paragraph about_paragraph--withIcon">
            Na życzenie wystawiamy fakturę.
          </p>
        </div>
        <div className="about_points--details">
          <img src={Wallet} alt="wallet-icon" className="icon"/>
          <p className="about_paragraph about_paragraph--withIcon">
            Przyjmujemy płatność gotówką i kartą.
          </p>
        </div>
      </div>
      <p className="about_paragraph-star">
        <span className="star">*</span> Większość naszych usług świadczymy tylko na terenie
        Warszawy. Poza miasto wyjeżdżamy wyłącznie do zleceń dotyczących
        parkietów powyżej 60m<sup>2</sup> (renowacja parkietu, układanie
        nowego).
      </p>
    </div>
  );
};

export default About;
