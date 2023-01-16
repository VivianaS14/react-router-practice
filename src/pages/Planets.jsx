import React from "react";
import { PlanetsList } from "../containers";

const Planets = () => {
  return (
    <div className="container d-flex flex-column">
      <h1>Welcome to Planets</h1>
      <PlanetsList />
    </div>
  );
};

export default Planets;
