import React from "react";

const Nutrition = () => {
  return (
    <div className="nutrition">
      <h2>Nutrition</h2>
      <p className="desc">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <ul>
        <li>
          <p>Calories</p> <p className="element">277kcal</p>
        </li>
        <hr />
        <li>
          <p>Carbs</p> <p className="element">0g</p>
        </li>
        <hr />
        <li>
          <p> Protein</p> <p className="element"> 20g</p>
        </li>
        <hr />
        <li>
          <p> Fat</p> <p className="element">22g</p>
        </li>
      </ul>
    </div>
  );
};

export default Nutrition;
