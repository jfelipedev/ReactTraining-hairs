import React from "react";
import { MenuContent, MainMenu } from "./style"; 
import SearchIcon from "../../assets/search-icon.svg" 

function Menu() {
  return (
    <MenuContent>
      <MainMenu>
        <div className="menu">
        <li>
          <a href=".about">Inicio</a>
        </li>
        <li>
          <a href=".about">Sobre</a>
        </li>
        <li>
          <a href=".about">Contato</a>
        </li>
        </div>
        <li>
          <input type="text" placehold="Pesquise" id="" />
        </li>
        <li><a href="/"><img src={SearchIcon} alt="serach" className="search-icon"/></a></li>
      </MainMenu>
    </MenuContent>
  );
}

export default Menu;
