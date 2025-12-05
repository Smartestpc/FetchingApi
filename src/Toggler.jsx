import { createContext, useState } from "react";

export let TogglerCont = createContext();
const Toggler = ({ children }) => {
  let [toggleBtn, setToggleBtn] = useState(true);
  let [cartCount, setCartCount] = useState(0);
  let [cart, setCart] = useState([]);

  function handleToggle() {
    setToggleBtn(!toggleBtn);
    // setCartCount(Number(cartCount));
  }

  function increaseCount() {
    setCartCount(cartCount + 1);
  }

  function updateCartCount(cartItems) {
    const totalItems = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setCartCount(totalItems);
  }

  return (
    <TogglerCont.Provider
      value={{
        toggleBtn,
        setToggleBtn,
        handleToggle,
        cartCount,
        setCartCount,
        increaseCount,
        cart,
        setCart,
        updateCartCount,
      }}
    >
      {children}
    </TogglerCont.Provider>
  );
};

export default Toggler;
