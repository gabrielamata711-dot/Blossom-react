import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const isIncart = (item) => {
    const inCart = cart.some((element) => element.id === item.id);
    return inCart;
  };

  const addItem = (item) => {
    if (isIncart(item)) {
      alert("El producto ya existe en el carrito");
      return;
    }

    setCart([...cart, item]);
    alert("Producto agregado al carrito");
  };
  // ELIMINAR DEL CARRITO
  const removeItem = (id) => {
    const updatedCart = cart.filter((element) => element.id !== id);
    setCart(updatedCart);
    alert("Producto eliminado");
  };

  //VACIAR CARRITO
  const clearCart = () => {
    setCart([]);
  };

  //TOTAL ITEMS EN CARRITO
  const getTotalItems = () => {
    return cart.length;
  };

  //TOTAL A PAGAR
  const getCartTotal = () => {
    return cart.reduce((acc, element) => acc + element.price, 0);
  };

  //CHECKOUT
  const checkout = () => {
    alert("Su compra ha sido realizada");
    clearCart();
    navigate("/");
  };

  const values = {
    cart,
    addItem,
    clearCart,
    removeItem,
    getCartTotal,
    getTotalItems,
    checkout,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
