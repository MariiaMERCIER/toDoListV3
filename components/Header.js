"use client";

import Image from "next/image";
import logo from "../assets/images/27b9e386375ebde43a9b022ba6c9d727.png";
import useThemeContext from "../context/ThemeProvider";

const Header = () => {
  const { setTheme, theme } = useThemeContext();

  return (
    <div className={`flex ${theme ? "bg-white" : "bg-black"}`}>
      <div
        className={`flex items-center my-0
      mx-auto pl-5 w-3/5	 justify-between ${theme ? "bg-white" : "bg-black"}`}
      >
        <div className="flex items-end  ">
          <Image src={logo} alt="logo" width={120} />
          <h1
            className={`font-comic font-bold text-2xl mb-5 ml-1 ${
              theme ? "text-black" : "text-white"
            }`}
          >
            My TODO list
          </h1>
        </div>
        <button
          className="text-3xl"
          onClick={() => {
            setTheme(!theme);
          }}
        >
          🎨
        </button>
      </div>
    </div>
  );
};

export default Header;
