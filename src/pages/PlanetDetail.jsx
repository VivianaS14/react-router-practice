import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlanetDetail } from "../api";
import { DetailedCard } from "../components";

const PlanetDetail = () => {
  const params = useParams();
  const [planet, setPlanet] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getDetail = async () => {
    try {
      setIsLoading(true);
      const res = await getPlanetDetail(params.id);
      setPlanet(res.data);
      console.log(res.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <>
      {isLoading && <p>Loading ...</p>}
      {error && <p>Error</p>}
      {planet && (
        <DetailedCard
          name={planet.name}
          climate={planet.climate}
          population={planet.population}
        />
      )}
    </>
  );
};

export default PlanetDetail;
