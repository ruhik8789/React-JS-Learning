import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAllItems, removeItem } from "./redux/slice";
import { useNavigate } from "react-router-dom";

const CartList = () => {
  const dispatch = useDispatch();
  const cartSelector = useSelector((state) => state.cart.items);
  const [cartItems, setCartItems] = React.useState(cartSelector);
  const navigate = useNavigate();

  useEffect(() => {
    setCartItems(cartSelector);
  }, [cartSelector]);

  const manageQuantity = (id, q) => {
    let quantity = parseInt(q) > 1 ? parseInt(q) : 1;

    const cartTempItems = cartSelector.map((item) => {
      return item.id === id ? { ...item, quantity } : item;
    });

    setCartItems(cartTempItems);
  };

  const handlePlaceOrder = () => {
    localStorage.clear();
    dispatch(clearAllItems());
    alert("Order Placed Successfully");
    navigate("/");
  }
  return (
    <>
      <div className="cart-container">
        <div className="cart-header">
          <h2>Your Cart Items</h2>
          <span>{cartItems.length} items</span>
        </div>
        {cartItems.length > 0
          ? cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <img src={item.thumbnail} alt="" />
                  <div className="item-details">
                    <h4>{item.title}</h4>
                    <p>{item.brand}</p>
                  </div>
                </div>
                <div className="item-actions">
                  <div style={{ display: "flex" }}>
                    <input
                      onChange={(e) => manageQuantity(item.id, e.target.value)}
                      value={item.quantity ? item.quantity : 1}
                      style={{ margin: "15px" }}
                      type="number"
                      placeholder="enter quantity"
                    />
                    <div>
                      <span className="price">
                        {(item.quantity
                          ? item.quantity * item.price
                          : item.price
                        ).toFixed(2)}
                      </span>
                      <button
                        onClick={() => dispatch(removeItem(item))}
                        className="add-to-cart"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : null}

        <div className="cart-footer">
          Total :{" "}
          {cartItems
            .reduce(
              (sum, item) =>
                item.quantity
                  ? sum + item.quantity * item.price
                  : sum + item.price,
              0,
            )
            .toFixed(2)}
        </div>
        <button onClick={() => handlePlaceOrder()} className="add-to-cart">
          Place Order
        </button>
      </div>
    </>
  );
};

export default CartList;
