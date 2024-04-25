import { useState } from "react";
import Time from "./components/Time";
import Ingrediants from "./components/Ingrediants";
import Instructions from "./components/Instructions";
import Nutrition from "./components/Nutrition";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };
  const body = document.querySelector("body");

  body.classList.toggle("dark", darkMode);

  return (
    <main className={darkMode ? "dark" : ""}>
      <div className="toggle" onClick={handleToggle}>
        <p className="light"> Light </p>
        <div className="toggle-btn">
          <div className="toggle-slider" />
        </div>
        <p className="dark-text"> Dark </p>
      </div>
      <div className="container">
        <img
          src="/image-omelette.jpeg"
          alt="Omlette picture"
          className="recipe-img"
        />
        <div className="recipe">
          <h1> Simple Omelette Recipe </h1>
          <p>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
          <Time />
          <Ingrediants />
          <Instructions />
          <Nutrition />
        </div>
      </div>
    </main>
  );
}

export default App;
