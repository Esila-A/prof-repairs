import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { BsCreditCard2BackFill } from "react-icons/bs";

const DashboardAbout = () => {
  const chatIcon = <BsFillChatLeftDotsFill className="icon" />;
  const invoiceIcon = <FaFileInvoiceDollar className="icon" />;
  const cardIcon = <BsCreditCard2BackFill className="icon" />;

  return (
    <div className="about" id="about">
      <h2 className="about_heading">O NAS</h2>
      <p className="about_paragraph">
        Firma Serlo oferuje kompleksowe usługi remontowo-wykończeniowe. Choć
        jesteśmy na rynku od niedawna, wszyscy nasi pracownicy posiadają
        wieloletnie doświadczenie zdobyte w firmach budowlanych, remontowych i
        wykończeniowych. Podczas pracy wykorzystujemy najnowsze sprzęty,
        narzędzia i techniki, by jakość świadczonych usług była jak najwyższa.
        Dbamy o czystość podczas pracy i sprzątamy po jej zakończeniu.
        Podejmujemy się zleceń dotyczących całych mieszkań, jak również
        pojedynczych pomieszczeń. Wykonujemy zlecenie zgodnie z wizją klienta, a
        w razie potrzeby chętnie dzielimy się naszą wiedzą i służymy radą.
        Precyzyjne wykonanie zleceń i zadowolenie klienta są dla nas
        najważniejsze.
      </p>
      <div className="about_points">
        <div className="about_points--details">
          {chatIcon}
          <p className="about_paragraph about_paragraph--withIcon">
            {/* Wszystko jest ustalane wraz z klientem -  */}
            Określamy zakres i terminy prac, ustalamy dokładne koszty i tworzymy
            umowę.
          </p>
        </div>
        <div className="about_points--details">
          {invoiceIcon}
          <p className="about_paragraph about_paragraph--withIcon">
            Na życzenie wystawiamy fakturę.
          </p>
        </div>
        <div className="about_points--details">
          {cardIcon}
          <p className="about_paragraph about_paragraph--withIcon">
            Przyjmujemy płatność gotówką i kartą.
          </p>
        </div>
      </div>
      <p className="about_paragraph">
        <span>*</span> Większość naszych usług świadczymy tylko na terenie
        Warszawy. Poza miasto wyjeżdżamy wyłącznie do zleceń dotyczących
        parkietów powyżej 60m<sup>2</sup> (renowacja parkietu, układanie
        nowego).
      </p>
    </div>
  );
};

export default DashboardAbout;
