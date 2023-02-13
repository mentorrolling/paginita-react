import { detalleCard } from "./data/info.js";

import CarouselApp from "./components/CarouselApp";
import NavBar from "./components/NavBar";
import CardApp from "./components/CardApp.jsx";

function App() {
  return (
    <div>
      {/* Agregar los componentes  */}
      <NavBar />
      <CarouselApp />
      <div className="container">
        <div className="row my-5">
          {detalleCard.map((item, index) => (
            <CardApp key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
