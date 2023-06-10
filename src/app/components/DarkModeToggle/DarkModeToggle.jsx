"use client";
import React, { useState, useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const DarkModeToggle = () => {
  const { toggleDarkMode, darkMode } = useContext(ThemeContext);
  return (
    <div
      onClick={toggleDarkMode}
      className="w-[48px] h-[28px] p-[2px] flex justify-between items-center relative border-[1.5px] border-[#53c28b70] rounded-[30px] cursor-pointer"
    >
      <div className="text-[14px]">🌙</div>
      <div className="text-[14px]">🔆</div>
      <div
        className={`w-[18px] h-[18px] absolute bg-[#53c28b] rounded-full  transition duration-300 ${
          darkMode == false ? "left-[2px]" : "right-[2px]"
        }`}
      />
    </div>
  );
};

export default DarkModeToggle;
