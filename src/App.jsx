import { useState } from "react";
import { detalleCard } from "./data/info.js";

import "./App.css";

import CarouselApp from "./components/CarouselApp";
import NavBar from "./components/NavBar";
import CardApp from "./components/CardApp.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const cambiarModoOscuro = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "bg-secondary" : ""}>
      {/* Agregar los componentes  */}
      <NavBar cambiarModoOscuro={cambiarModoOscuro} darkMode={darkMode} />
      <CarouselApp />
      <div className="container">
        <div className="row mt-5 pb-5">
          {detalleCard.map((item, index) => (
            <CardApp key={index} item={item} darkMode={darkMode} />
          ))}
        </div>
      </div>

      {/* footer  */}
    </div>
  );
}

export default App;
