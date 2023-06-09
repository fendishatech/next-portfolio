"use client";
import { useContext } from "react";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import "./globals.css";
import { Inter, Roboto } from "next/font/google";
import { ThemeContextProvider } from "../context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });
const roboto = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "A full stack Next js, portfolio app with mysql database",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} `}>
        <ThemeContextProvider>
          <NavBar />
          {children}
          <Footer />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
