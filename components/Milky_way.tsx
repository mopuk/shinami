import React from "react";
import Image from "next/image";

export default function Milky_way() {
  return (
    <div>
      <Image
        src="/images/milky_way.png"
        alt="Milky Way"
        width={1920}
        height={316}
      ></Image>
    </div>
  );
}
