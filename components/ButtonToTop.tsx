"use client"

import Image from "next/image";
import React from "react";

export default function ButtonToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button className="fixed right-[53px] top-[841px] hover:cursor-pointer z-100" onClick={scrollToTop}>
      <Image
        src="/images/up_btn.png"
        alt="Go up button"
        width={74}
        height={74}
      ></Image>
    </button>
  );
}
