import React from "react";
import { Container, ContainerContent } from "./styles";
import OwnerPic from "../../assets/owner.png";

function Info() {
  return (
    <Container>
      <ContainerContent>
        <div className="about">
          <h1>MORE THAN JUST A HAIRCUT</h1>
          <p>
            Focada em excelência, a Hairs conta com tudo que o homem moderno
            precisa. Um ambiente confortável, descontraído e exclusivamente
            masculino, com cuidados para todos os estilos de barba e cabelo,
            além de serviços como massagem, podologia, estética masculina e dia
            do noivo. Uma barbearia premium, para cuidar do visual, tomar uma
            cerveja gelada, assistir aos seus esportes favoritos ou jogar uma
            partida de sinuca.
          </p>
        </div>
        <div>
          <img src={OwnerPic} alt="owner" />
        </div>        
      </ContainerContent>
    </Container>
  );
}

export default Info;
