"use client";
const { createContext, useState, useContext } = require("react");

export const ShoppingCartContext = createContext({});

const ShoppingCart = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (id, quanttity) => {
    setCartItems((currentItem) => {
      if (currentItem.find((item) => item.id === id) == null) {
        return [...currentItem, { id, quantity: quanttity }];
      } else {
        return currentItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: quanttity };
          } else {
            return item;
          }
        });
      }
    });
  };

  const RemoveFromCart = (id) => {
    setCartItems((currentItem) => {
      return currentItem.filter((item) => item.id !== id);
    });
  };

  const increaseQuantity = (id) => {
    setCartItems((currentItems) => {
      return currentItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };
  const decreaseQuantity = (id) => {
    setCartItems((currentItems) => {
      return currentItems.map((item) => {
        if (item.id === id) {
          if (item.quantity > 0) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      });
    });
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        RemoveFromCart,
        addToCart,
        increaseQuantity,
        setCartItems,
        decreaseQuantity,
        totalPrice,
        setTotalPrice,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCart;

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
