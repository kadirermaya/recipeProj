import React, { useEffect, useState } from "react";
import './App.css';

const App = () => {

  const APP_ID = "1efc8125";
  const APP_KEY = "adb1707c25630ea73b5774e260fadf88";


  useEffect(() => {
    getRecipes();
  }, []);


  const getRecipes = async() => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button
          className="search-button"
          type="submit">Search
          </button>
      </form>
    </div>
  )
}



export default App;
