import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type of a cart item
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  img: string;
}

// Define the methods and data the context will provide
interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  getTotalQuantityById: (id: number) => number | undefined;
}

// Create the context with an initial empty value
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

// Custom hook to use the context in other components
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// Context provider
export const CartContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Add a product to the cart
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...prevCart, item];
    });
  };

  // Remove a product from the cart
  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate the total price of items in the cart
  const getTotalPrice = (): number => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  // Get the total number of items in the cart
  const getTotalItems = (): number => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  // Get the quantity of a specific item by its ID
  const getTotalQuantityById = (id: number): number | undefined => {
    const product = cart.find((item) => item.id === id);
    return product?.quantity;
  };

  // Pass all the necessary values to the context
  const data: CartContextType = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalItems,
    getTotalPrice,
    getTotalQuantityById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
