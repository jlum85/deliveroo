import React from "react";

const CartTotal = props => {
  return (
    <>
      <div className="subTotal">
        <div className="total">
          <span>Sous-total</span>
          <span> {props.subTotal.toFixed(2)} €</span>
        </div>

        <div className="total">
          <span>Frais de livraison</span>
          <span>{props.shippingCost} € </span>
        </div>
      </div>

      <div className="total sumAll">
        <span>Total</span>
        <span>{(props.subTotal + props.shippingCost).toFixed(2)} € </span>
      </div>
    </>
  );
};

export default CartTotal;
