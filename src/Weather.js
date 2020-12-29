import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div class="col-4">
      <strong id="temp-today">19 </strong>
      <span class="units">
        {" "}
        <a href="#" id="celsius" class="active">
          °C{" "}
        </a>{" "}
        |{" "}
        <a href="#" id="fahrenheit">
          °F
        </a>{" "}
      </span>
      <h4 id="weather-description">Partly cloudy</h4>
      <h4 id="humidity">Humidity: 80</h4>
      <h4 id="wind">Wind: 2km/h</h4>
    </div>
  );
}