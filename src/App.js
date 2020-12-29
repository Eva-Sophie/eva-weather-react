import React from "react";
import "./styles.css";
import SearchForm from "./SearchForm"
import City from "./City"
import Weather from "./Weather"
import Footer from "./Footer"
import Icon from "./Icon"

export default function App() {
  return (
<div className="App">
<div className="container">
<div className="weather-app-page">
<div className="weather-app">
<SearchForm />
<div class="row">
<City />
<Weather />
<Icon />

</div>
</div>
</div>
</div>
<Footer />
</div>
  );
}


