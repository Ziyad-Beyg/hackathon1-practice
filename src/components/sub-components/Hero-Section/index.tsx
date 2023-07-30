import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BsCart2 } from "react-icons/bs";
import Image from "next/image";
import { ProjectImages } from "@/components/assets";

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full justify-between mt-12">
      <div className="flex flex-col items-start sm:max-w-xl  gap-10">
        <Badge className="bg-blue-100 text-blue-800 font-semibold text-lg rounded-xl">
          Sale 70%
        </Badge>

        <h1 className="scroll-m-20 text-6xl font-black tracking-tight lg:text-6xl leading-tight">
          An Industrial Take on Streetwear
        </h1>
        <p className="text-lg max-w-md text-muted-foreground text-gray-500">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Button className="bg-black text-white text-sm font-semibold tracking-wider px-5 py-3">
          <BsCart2 className="mr-2 h-5 w-5" fill="white" /> Start Shopping
        </Button>
        <div className="flex justify-between items-center flex-wrap w-full m-4 ">
          <Image
            src={ProjectImages.FeaturedBrand1}
            alt={"Bazaar Image"}
            className="object-contain min-w-fit m-4"
          />
          <Image
            src={ProjectImages.FeaturedBrand2}
            alt={"Bazaar Image"}
            className="object-contain min-w-fit m-4"
          />
          <Image
            src={ProjectImages.FeaturedBrand3}
            alt={"Bazaar Image"}
            className="object-contain min-w-fit m-4"
          />
          <Image
            src={ProjectImages.FeaturedBrand4}
            alt={"Bazaar Image"}
            className="object-contain min-w-fit m-4"
          />
        </div>
      </div>
      <div className="hidden lg:flex items-center">
        <div className="bg-[#FFECE3] w-[28rem] h-[28rem] rounded-full">
          <Image
            src={ProjectImages.HeroGirl}
            className="object-contain"
            alt="Hero Girl Image"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
