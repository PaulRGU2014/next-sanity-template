import type { ReactNode } from "react";
import { CartProvider } from "@/utils/CartContext/CartContext";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body suppressHydrationWarning={true}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
