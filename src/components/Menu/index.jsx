import React from "react";
import { MenuContent, MainMenu } from "./style"; 

function Menu() {
  return (
    <MenuContent>
      <MainMenu>
        <div className="menu">
        <li>
          <a href="#home">Inicio</a>
        </li>
        <li>
          <a href=".#about">Sobre</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
        </div>
        <li>
          <input type="text" placehold="Pesquise"/>
        </li>
       
      </MainMenu>
    </MenuContent>
  );
}

export default Menu;
