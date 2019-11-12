import React from "react";

const Restaurant = props => {
  const item = props.restaurant;
  return (
    <div className="restaurant">
      <div className="wrapperResto">
        <div className="restoInfo">
          <h1 className="restoTitle">{item.name} </h1>
          <p className="restoDesc">{item.description} </p>
        </div>
        <div className="colImg">
          <img className="restoImg" src={item.picture} alt="Restaurant"></img>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
