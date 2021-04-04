import React from "react";
import { planets } from "./planets";

export const Card = (props) => {
  const { name, nickname, description, id, image_url } = props;
  return (
    <div className="bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="planets" src={image_url} width="200" height="200" />

      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{nickname}</p>
      </div>
    </div>
  );
};

export default Card;
