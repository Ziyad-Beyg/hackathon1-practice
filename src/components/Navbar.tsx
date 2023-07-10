import Logo from "/public/Logo.webp";
import Image from "next/image";
import Link from "next/link";
import { BsCart2, BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className=" wrapper flex items-center justify-between mt-6">
      <Image className="hover:cursor-pointer" src={Logo} alt="Website Logo" />

      <ul className="md:flex space-x-8 hidden">
        <li>
          <Link href={"/male"}>Male</Link>
        </li>
        <li>
          <Link href={"/female"}>Female</Link>
        </li>
        <li>
          <Link href={"/kids"}>Kids</Link>
        </li>
        <li>
          <Link href={"/all-products"}>All Products</Link>
        </li>
      </ul>
      <div className="items-center space-x-1 px-2 py-1 ring-1 ring-gray-200 hidden md:flex">
        <BsSearch fill="gray" />
        <input
          type="text"
          placeholder="What are you looking for"
          className="px-2 py-1 flex-1  text-sm  rounded-[15px] focus:outline-none "
        />
      </div>

      <div className="relative bg-gray-200 rounded-full hover:cursor-pointer md:flex items-center justify-center p-3 hidden">
        <BsCart2 size={20} />
        <p className="bg-red-500 rounded-full w-[20px] h-[20px] text-[14px] flex items-center justify-center absolute top-0  right-1">
          0
        </p>
      </div>

      <div className="md:hidden sm:flex">
        <GiHamburgerMenu size={20} />
      </div>
    </div>
  );
};

export default Navbar;
