import React from "react";
import { MenuContent, MainMenu } from "./style"; 
import { FaSearch } from "react-icons/fa";


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
         <i className="search-icon"><FaSearch /></i> <input type="text" placehold="Pesquise"/>
        </li>
       
      </MainMenu>
    </MenuContent>
  );
}

export default Menu;
