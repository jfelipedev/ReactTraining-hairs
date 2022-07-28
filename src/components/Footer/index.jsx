import React from "react";
import { Container } from "./style";
import LogoFooter from "../../assets/logo-footer.png";


function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Container>
      
        <div className="logo">
          <a href="/">
            <img src={LogoFooter} alt="logo" />
          </a>
          <p className="timeStamp">
            {currentYear}©Todos os direitos reservados
          </p>
        </div>
      
      <div>
        <h3>Entre em Contato</h3>
        <p>
          <span> &#9743; Telefones Comerciais: </span>
          <span>- (83) 3077-2752 </span>
          <span>- (83) 9 9604-5553 </span>
          <span>- (83) 9 9855-0808</span>
        </p>
      </div>
      <div className="map">
        <h3>Onde Estamos</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          eum voluptas similique assumenda accusamus earum rem, iusto a fuga
          atque ipsum consectetur at cumque aspernatur magnam molestias hic
          tempore ipsa, temporibus eveniet deleniti. Harum delectus consequuntur
          quibusdam nobis maxime, aut magnam numquam nihil. Quisquam, id.Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eum
          voluptas similique assumenda accusamus earum rem, iusto a fuga atque
          ipsum consectetur at cumque aspernatur magnam molestias hic tempore
          ipsa, temporibus eveniet deleniti. Harum delectus consequuntur
          quibusdam nobis maxime, aut magnam numquam nihil. Quisquam, id.
        </p>
      </div>
    </Container>
  );
}

export default Footer;
