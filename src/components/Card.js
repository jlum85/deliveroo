import React from "react";

const Card = props => {
  const item = props.meal;

  return (
    <div className="card">
      <p className="titleCard">{item.title}</p>
      <p className="descCard">{item.description}</p>
      <p className="priceCard">{item.price} $</p>
      <p>{props.popular}</p>
      {/* <img className="mealImg" src={item.picture} alt="Plat"></img> */}
      {/* {item.picture ? (
        <img className="mealImg" src={item.picture} alt="Plat"></img>
      ) : (
        <></>
      )} */}
    </div>
  );
};

export default Card;
