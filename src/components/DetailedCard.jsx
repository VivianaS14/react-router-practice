import React from "react";

const DetailedCard = ({ name, climate, population }) => {
  return (
    <>
      <p>{name}</p>
      <p>{climate}</p>
      <p>{population}</p>
    </>
  );
};

export default DetailedCard;
