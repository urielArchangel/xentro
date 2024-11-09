import localFont from "next/font/local";
import "./globals.css";
import RainbowKitContexts from "./src/FE/web3/Rainbowkit/RaibowkitProvider";
import ModalProvider from "./src/FE/misc/modals/ModalProvider";

const gilroySemiBold = localFont({
  src: "./fonts/gilroy-semibold.ttf",
  variable: "--font-gilroy-sb",
  weight: "900",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gilroySemiBold.variable}  antialiased  `}>
        <RainbowKitContexts>
          <ModalProvider>
          {children}
          </ModalProvider>
        </RainbowKitContexts>
      </body>
    </html>
  );
}
