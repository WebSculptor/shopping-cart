"use client";

import React from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

export default function Navbar() {
  const { handleCartClick } = useShoppingCart();

  return (
    <div className="w-full sticky top-0 inset-x-0 z-20 bg-background border-b">
      <MaxWidthContainer className="py-8 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold">
          Shopping
        </Link>
        <div
          onClick={() => handleCartClick()}
          className="cursor-pointer relative"
        >
          <ShoppingBag className="w-6 h-6 pointer" />

          <span className="absolute -top-3 -right-3 text-base text-background w-6 h-6 border-[3px] border-background rounded-full bg-primary flex items-center justify-center">
            0
          </span>
        </div>
      </MaxWidthContainer>
    </div>
  );
}
