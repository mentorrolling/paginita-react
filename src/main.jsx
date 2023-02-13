import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "font-awesome/css/font-awesome.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//Promesas o Promise

// const generarInforme = () => {
//   return new Promise((resolve, reject) => {
//     let informe = false;

//     setTimeout(() => {
//       if (informe) {
//         resolve("Recibimos el informe 👍");
//       } else {
//         reject("Error 😭");
//       }
//     }, 2000);
//   });
// };

// generarInforme()
//   .then((respuesta) => console.log(respuesta))
//   .catch((error) => console.warn(error));

//HTTP
// fetch(
//   "https://api.openweathermap.org/data/2.5/weather?lat=-26,78&lon=-65,23&units=metric&appid=e3e500cbb8977b4c121b9a50e5f059a1"
// )
//   .then((response) => response.json())
//   .then((data) => {
//     const { weather } = data;
//     console.log(weather);
//   });

//async await

// const clima = () => {
//   navigator.geolocation.getCurrentPosition((pos) => {
//     const coords = pos.coords;
//     const lat = coords.latitude;
//     const long = coords.longitude;

//     obtenerClima(lat, long)
//       .then((resultado) => console.log(resultado))
//       .catch((error) => console.log(error));
//   });
// };
