"use client";
import Logo from "/public/Logo.webp";
import Image from "next/image";
import Link from "next/link";
import { BsCart2 } from "react-icons/bs";
import {
  NavigationLinksData,
  NavigationTypes,
} from "../utils/NavigationLinksandTypes";
import SearchBar from "../sub-components/Navbar/SearchBar";
import CartBtn from "../sub-components/Navbar/CartBtn";
import Sidebar from "../sub-components/Navbar/Sidebar";

const Navbar = () => {
  return (
    <div className=" wrapper flex items-center justify-between mt-6">
      <Image className="hover:cursor-pointer" src={Logo} alt="Website Logo" />

      <ul className="lg:flex space-x-8 hidden">
        {NavigationLinksData.map((item: NavigationTypes, index: number) => (
          <li key={index}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
     
     <SearchBar />

      <CartBtn />

      <Sidebar />
    </div>
  );
};

export default Navbar;
