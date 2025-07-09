import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context for the cart
export const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};

// Cart provider component
export const CartProvider = ({ children }) => {
  // Initialize cart from localStorage or as an empty array
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Currency state
  const [currency, setCurrency] = useState("RWF"); // Default currency set to RWF

  // Update localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Function to convert price based on selected currency
  const convertPrice = (price) => {
    const numericPrice = parseFloat(price); // Ensure price is a number
    if (isNaN(numericPrice)) {
      return { amount: 0, symbol: currency === "RWF" ? "RWF" : "$" }; // Return 0 if the price is not a valid number
    }
    if (currency === "RWF") {
      return { amount: numericPrice * 1100, symbol: "RWF" }; // Example conversion rate from USD to RWF
    }
    return { amount: numericPrice, symbol: "$" }; // Return price in USD
  };

  // Add product to the cart (with quantity management)
  const addToCart = (product) => {
    // Convert Price to a number and apply conversion
    const { amount } = convertPrice(parseFloat(product.Price)); // Extract amount from conversion

    const productWithNumberPrice = {
      ...product,
      Price: amount, // Set Price to the converted amount
    };

    const existingProduct = cart.find(
      (item) => item.id === productWithNumberPrice.id
    );

    if (existingProduct) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productWithNumberPrice.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart((prevCart) => [
        ...prevCart,
        { ...productWithNumberPrice, quantity: 1 },
      ]);
    }
  };

  // Remove product from the cart by its ID
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Clear all items from the cart
  const clearCart = () => {
    setCart([]);
  };

  // Function to change currency
  const changeCurrency = (newCurrency) => {
    setCurrency(newCurrency);
    // Optionally, you can convert existing cart prices to the new currency here
    setCart((prevCart) =>
      prevCart.map((item) => ({
        ...item,
        Price: convertPrice(item.Price / (currency === "RWF" ? 1100 : 1)), // Adjust price based on the new currency
      }))
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        currency,
        changeCurrency,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
