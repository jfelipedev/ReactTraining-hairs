import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import { GlobalStyle } from "./styles/global";
import Info from "./components/Info";
import PriceTable from "./components/PriceTable";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Menu />  
      <Gallery />
      <Info />
      <PriceTable />
      <Footer />
      <GlobalStyle />
    </>
  );
}


export default App;
