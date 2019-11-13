import React from "react";
import Card from "./Card";

const Menu = props => {
  // console.log("Menu");
  // console.log(props);

  const getCards = () => {
    const tab = props.menu;
    const elements = tab.map((item, index) => {
      return (
        <Card key={item.id} meal={item} onClickAdd={props.onClickAdd}></Card>
      );
    });
    return elements;
  };

  return (
    <div className="catMenu">
      <h2 className="titleMenu">{props.title}</h2>
      <div className="cardList">{getCards()}</div>
    </div>
  );
};

export default Menu;
