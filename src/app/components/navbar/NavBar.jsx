"use client";
import Link from "next/link";
import React, { useContext } from "react";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { ThemeContext } from "../../../context/ThemeContext";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
];
const NavBar = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="h-[100px] text-[22px] px-6 flex justify-between items-center shadow-md">
      <Link className="font-bold" href={"/"}>
        LogoBrand
      </Link>

      <div
        className={`flex justify-between items-center rounded-md ${
          darkMode == true ? "bg-slate-800 text-gray-300" : ""
        }`}
      >
        <DarkModeToggle />
        {links &&
          links.map((link) => (
            <Link
              className="px-3 py-2 hover:bg-green-200"
              key={link.id}
              href={link.url}
            >
              {link.title}
            </Link>
          ))}
        <button
          className="ml-6 px-5 py-2 border-none rounded-md cursor-pointer bg-green-300"
          onClick={() => {
            console.log("Login");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default NavBar;
