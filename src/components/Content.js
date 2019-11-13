import React from "react";
import Menu from "./Menu";

const Content = props => {
  const getMenus = objMenus => {
    const keys = Object.keys(objMenus);
    const elements = keys.map((item, index) => {
      return (
        <Menu
          key={index}
          title={item}
          menu={objMenus[item]}
          onClickAdd={props.onClickAdd}
        ></Menu>
      );
    });
    return <>{elements}</>;
  };

  return (
    <div className="content">
      <div className="flexMenu">{getMenus(props.menu)}</div>
    </div>
  );
};

export default Content;
