import React, { useState, useEffect } from "react";
import { obtenerClima } from "../helpers/obtener-clima";

import "../css/navbar.css";

const NavBar = ({ darkMode, cambiarModoOscuro }) => {
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
          const { main, weather } = resultado;
          setTiempo({
            temp: main.temp,
            clima: weather[0],
          });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div className="fixed-top">
      <nav
        className={`navbar navbar-expand-lg ${
          darkMode ? "bg-dark navbar-dark" : "bg-light navbar-ligth"
        } `}
      >
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
            {tiempo && (
              <div className="d-flex gap-2 align-items-center justify-content-center">
                <img
                  src={`http://openweathermap.org/img/wn/${tiempo.clima.icon}@2x.png`}
                  alt="clima"
                  className="icon-tiempo bg-dark"
                />
                <span className={darkMode ? "text-white" : "text-dark"}>
                  {Math.round(tiempo.temp)}°C
                </span>
              </div>
            )}
            <div className="d-flex gap-2 align-items-center justify-content-center ms-2 ">
              {darkMode ? (
                <i className="fa fa-moon-o text-white" aria-hidden="true"></i>
              ) : (
                <i className="fa fa-sun-o" aria-hidden="true"></i>
              )}

              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  onChange={cambiarModoOscuro}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
