import React from "react";

const Cart = props => {
  const bCart = props.cart.length > 0;
  const shippingCost = 2.5;
  const getCartItem = () => {
    const elements = props.cart.map((item, index) => {
      return (
        <p>
          {item.title} : {item.price} * {item.count} = {item.price * item.count}
        </p>
      );
    });
    return <>{elements}</>;
  };

  const getSubTotal = () => {
    return 60; // faire un reduce
  };

  return (
    <div className="cart">
      <div className="cartItem">
        {/* <button className="validCart btnDisabled">Valider mon panier</button> */}
        <button className={bCart ? "validCart" : "validCart btnDisabled"}>
          Valider mon panier
        </button>
        {bCart ? (
          <>
            <div>{getCartItem()} </div>
            <p> Sous-total : {shippingCost} €</p>
            <p> Frais de livraison : {getSubTotal()} €</p>
            <p> Total : {getSubTotal() + shippingCost} €</p>
          </>
        ) : (
          <div className="emptyCart"> Votre panier est vide</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
