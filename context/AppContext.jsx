"use client";
import { createContext, useState, useContext } from "react";
import { products } from "@/assets/data";
import { toast } from "react-toastify";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productId) => {
    const product = products.find(
      (p) => p._id === productId || p.id === productId,
    );

    if (product) {
      setCartItems((prev) => {
        const existingItem = prev.find(
          (item) => item._id === productId || item.id === productId,
        );

        if (existingItem) {
          return prev.map((item) =>
            item._id === productId || item.id === productId
              ? { ...item, quantity: (item.quantity || 1) + 1 }
              : item,
          );
        }
        return [...prev, { ...product, quantity: 1 }];
      });

      toast.success(`${product.name} added to cart!`, {
        position: "bottom-right",
        autoClose: 2000,
        icon: "🛒",
        style: {
          backgroundColor: "#fff",
          color: "#ea580c",
          fontWeight: "bold",
          borderRadius: "12px",
          border: "1px solid #f3f4f6",
        },
      });
    }
  };

  const cartCount = cartItems.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0,
  );

  const value = {
    products,
    cartItems,
    setCartItems,
    addToCart,
    cartCount,
    currency: "$",
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
