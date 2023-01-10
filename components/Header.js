"use client";
import { memo } from "react";
import Image from "next/image";
import logo from "../assets/images/27b9e386375ebde43a9b022ba6c9d727.png";

const Header = () => {
  return (
    <div className="flex items-center pl-5">
      <Image src={logo} alt="logo" width={120} />
      <p>My TODO list</p>
    </div>
  );
};

export default memo(Header);
