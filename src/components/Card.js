import React from "react";
import ReplacementImage from "../images/deliveroo.png";

const Card = props => {
  const item = props.meal;
  // console.log("card: ", item);
  // console.log(props);

  return (
    <div
      className="card"
      onClick={() => {
        props.onClickAdd(item);
      }}
    >
      <div className="cardInfo">
        <p className="titleCard">{item.title}</p>

        {item.description ? (
          <p className="descCard">{item.description}</p>
        ) : (
          <></>
        )}

        <div className="card-infos">
          <p className="priceCard">{item.price} $ </p>

          {item.popular ? (
            <div className="favorite">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#ff8000"
                stroke="#ff8000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span className="favoriteText">{item.popular} Populaire</span>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="cardImage">
        {item.picture ? (
          <img
            className="mealImg"
            src={item.picture}
            alt="Plat"
            onError={e => {
              // e.target.src = ReplacementImage;
              e.target.style = "display: none;"; //pb sur l'image de  Bircher Muesli
            }}
          ></img>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Card;
