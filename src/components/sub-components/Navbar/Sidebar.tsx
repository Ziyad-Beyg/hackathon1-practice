import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCart2, BsSearch } from "react-icons/bs";
import {
  NavigationLinksData,
  NavigationTypes,
} from "../../utils/NavigationLinksandTypes";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="lg:hidden sm:flex hover:cursor-pointer">
      <Sheet>
        <SheetTrigger>
          <GiHamburgerMenu size={20} />
        </SheetTrigger>
        <SheetContent side={"right"}>
          <SheetHeader className="mt-6">
            <div className="flex items-center space-x-5 mt-4 mb-8">
              <div className="items-center flex-1 space-x-1 px-2 py-1 ring-1 ring-gray-200 flex">
                <BsSearch fill="gray" />
                <input
                  type="text"
                  placeholder="What are you looking for"
                  className="px-2 py-1 flex-1  text-sm  rounded-[15px] focus:outline-none "
                  maxLength={20}
                />
              </div>

              <div className="relative bg-gray-200 rounded-full hover:cursor-pointer flex items-center justify-center p-3 ">
                <BsCart2 size={20} />
                <p className="bg-red-500 rounded-full w-[20px] h-[20px] text-[14px] flex items-center justify-center absolute top-0  right-1">
                  0
                </p>
              </div>
            </div>

            {NavigationLinksData.map(
              (items: NavigationTypes, index: number) => (
                <SheetTitle
                  key={index}
                  className="space-y-4 mt-6 text-lg font-normal hover:ml-5 duration-300"
                >
                  <Link href={items.href}>{items.label}</Link>
                </SheetTitle>
              )
            )}
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;
