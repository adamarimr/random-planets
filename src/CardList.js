import React from "react";
import Card from "./Card";

// with this I make that the array repeat itself because of the index, so I won't have to write it 10 times like I initially did

const CardList = ({ planets }) => {
  const cardComponent = planets.map((user, i) => {
    return (
      <Card
        key={i}
        id={planets[i].id}
        name={planets[i].name}
        nickname={planets[i].nickname}
        description={planets[i].description}
        image_url={planets[i].image_url}
      />
    );
  });
  return <div>{cardComponent}</div>;
};

export default CardList;
