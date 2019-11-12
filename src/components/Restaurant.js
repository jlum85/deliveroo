import React from "react";

const Restaurant = props => {
  const item = props.restaurant;
  return (
    <section className="restaurant">
      <div className="wrapperResto">
        <div className="restoInfo">
          <p className="restoTitle">{item.name} </p>
          <p className="restoDesc">{item.description} </p>
        </div>
        <div className="colImg">
          <img className="restoImg" src={item.picture} alt="Restaurant"></img>
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
