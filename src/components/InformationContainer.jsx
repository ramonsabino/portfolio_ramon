import "../styles/components/informationcontainer.sass";
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(85) 9 9765-1791 </p>
          {/* <div className="wapp">
            <FaWhatsapp id="cell" />
            <h3>Whatssapp</h3>
            <p>(85) 9 9290-7301</p>
          </div> */}
        </div>
      </div>

      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>ramon-sabino@hotmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Fortaleza - Ceará</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;