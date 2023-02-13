import React, { useState, useEffect } from "react";
import { obtenerClima } from "../helpers/obtener-clima";

const NavBar = () => {
  const [tiempo, setTiempo] = useState(null);

  useEffect(() => {
    clima();
  }, []);

  const clima = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const coords = pos.coords;
      const lat = coords.latitude;
      const long = coords.longitude;

      obtenerClima(lat, long)
        .then((resultado) => {
          setTiempo(resultado);
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div className="fixed-top">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <i className="fa fa-ravelry" aria-hidden="true"></i> Kindel
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacto
                </a>
              </li>
            </ul>
            <div>{/* clima  */}</div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
