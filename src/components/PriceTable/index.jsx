import React from "react";
import { Container, ContainerContent } from "./style";
import PeakyBlinder from '../../assets/peaky-blinder.png'
import SlickBack from '../../assets/slick-back.png'
import MessyPomp from '../../assets/messy-pomp.png'
import Pompadour from '../../assets/pompadour.png'
import ManBum from '../../assets/man-bum.png'
import SkinFade from '../../assets/skin-fade.png'
import Scissors from '../../assets/scissors.svg'

function PriceTable() {
  return (
    <Container>
      <ContainerContent>
        <div className="priceTable contentTitle">
          <h1>Pricing</h1>

          <table>
            <thead>
              <tr>
                <th className="scissors" ><img src={Scissors} alt="" /></th>
                <th>Estilo</th>
                <th>Valor</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><img src={PeakyBlinder} alt="" /></td>
                <td>Peaky Blinder</td>
                <td>R$100</td>
              </tr>

              <tr>
              <td><img src={MessyPomp} alt="" /></td>
                <td>Messy Pomp</td>
                <td>R$50</td>
              </tr>

              <tr>
              <td><img src={Pompadour} alt="" /></td>
                <td>Pompadour</td>
                <td>R$60-R$120</td>
              </tr>

              <tr>
              <td><img src={ManBum} alt="" /></td>
                <td>Man Bun</td>
                <td>R$100</td>
              </tr>

              <tr>
              <td><img src={SkinFade} alt="" /></td>
                <td>Skin Fade</td>
                <td>R$50</td>
              </tr>

              <tr>
              <td><img src={SlickBack} alt="" /></td>
                <td>Slick Back</td>
                <td>R$60-R$120</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ContainerContent>
    </Container>
  );
}

export default PriceTable;
