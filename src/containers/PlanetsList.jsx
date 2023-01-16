import React, { useEffect, useState } from "react";
import { Card } from "../components";
import { getPlanets } from "../api";
import config from "../config";

const PlanetsList = () => {
  const [planets, setPlanets] = useState([]);

  const getData = async () => {
    const res = await getPlanets();
    // use the data as res.data.results

    setPlanets(res.data.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container d-flex flex-wrap">
      {console.log("planets", planets)}

      {planets.map((planet, i) => (
        <Card
          key={i}
          title={planet.name}
          description={planet.terrain}
          link={`${config.routes.PLANETS}/${i + 1}`}
        />
      ))}
    </div>
  );
};

export default PlanetsList;
