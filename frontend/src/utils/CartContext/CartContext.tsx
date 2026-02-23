"use client";

import { createContext, useContext, useMemo, useState } from "react";

export type CartItem = {
  id: string;
  title: string;
  quantity: number;
  images: { src: string }[];
  variants: { id: string; price: { amount: string; currencyCode: string } }[];
  options: Record<string, unknown>;
};

type CartContextValue = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateCartItemQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const value = useMemo<CartContextValue>(() => {
    const addToCart = (item: CartItem) => {
      setCart((prev) => {
        const existing = prev.find((entry) => entry.id === item.id);
        if (existing) {
          return prev.map((entry) =>
            entry.id === item.id
              ? { ...entry, quantity: entry.quantity + item.quantity }
              : entry
          );
        }
        return [...prev, item];
      });
    };

    const removeFromCart = (id: string) => {
      setCart((prev) => prev.filter((entry) => entry.id !== id));
    };

    const updateCartItemQuantity = (id: string, quantity: number) => {
      setCart((prev) =>
        prev.map((entry) =>
          entry.id === id ? { ...entry, quantity } : entry
        )
      );
    };

    const clearCart = () => {
      setCart([]);
    };

    return {
      cart,
      addToCart,
      removeFromCart,
      updateCartItemQuantity,
      clearCart,
    };
  }, [cart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
