import React, { useEffect, useState } from "react";
import { Card } from "../components";
import { getPlanets } from "../api";
import config from "../config";

const PlanetsList = () => {
  const [planets, setPlanets] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      const res = await getPlanets();
      // use the data as res.data.results

      setPlanets(res.data.results);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container d-flex flex-wrap">
      {/* console.log("planets", planets) */}
      {isLoading && <h3>... Loading</h3>}
      {error.length > 0 && <p>Error: {error}</p>}

      {planets.length > 0
        ? planets.map((planet, i) => (
            <Card
              key={i}
              title={planet.name}
              description={planet.terrain}
              link={`${config.routes.PLANETS}/${i + 1}`}
            />
          ))
        : null}
    </div>
  );
};

export default PlanetsList;
