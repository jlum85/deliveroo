import React from "react";

const CartProduct = props => {
  const item = props.product;
  return (
    <div className="product-item" key={item.id}>
      <div className="product-Quantity">
        <svg
          onClick={() => {
            props.onClickLess(item);
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00cdbd"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
        <div className="product-item-count">{item.count}</div>
        <svg
          onClick={() => {
            props.onClickAdd(item);
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00cdbd"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
      </div>

      <span>{item.title}</span>
      <span>{(item.price * item.count).toFixed(2)} € </span>
    </div>
  );
};

export default CartProduct;
