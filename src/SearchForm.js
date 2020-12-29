import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <form id="search-form">
      <div class="row">
        <div class="col-10">
          <input
            type="text"
            id="city-input"
            placeholder="Enter your city here"
            autocomplete="off"
          />
          <button id="search-button">Search</button>
        </div>
        <div class="col-2">
          <button id="current-location">My location</button>
        </div>
      </div>
    </form>
  );
}