import React from "react";
import { Container } from "./style";
import LogoFooter from "../../assets/logo-footer.png";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { FaSearchLocation } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Container>
      <div className="logo">
        <a href="#home">
          <img src={LogoFooter} alt="logo" />
        </a>
        <p className="timeStamp">{currentYear}©Todos os direitos reservados</p>
      </div>

      <div id="contact">
        <h3>
          <BsFillTelephoneForwardFill /> Entre em Contato
        </h3>
        <p>
          <span>Telefones Comerciais: </span>
          <span>- (83) 3077-2752 </span>
          <span>- (83) 9 9604-5553 </span>
          <span>- (83) 9 9855-0808</span>
        </p>
      </div>
      <div className="map">
        <h3>
          <FaSearchLocation /> Onde Estamos{" "}
        </h3>
        <p>
          <span>- Av. Almirante Barroso - 245b</span>
          <span>- Campina Grande - PB </span>
        </p>
      </div>
    </Container>
  );
}

export default Footer;
