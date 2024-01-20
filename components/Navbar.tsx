import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <div className="">
          <Image
            src="/pfp.png"
            alt="logo"
            width={80}
            height={30}
            className="w-full h-full object-contain rounded-full"
          />
        </div>
        <h1 className="text-white text-[15px] font-semibold">Emad Ahmad</h1>
      </div>
      <div className="flex flex-row gap-5 mb-2">
        <Link href="https://www.linkedin.com/in/imad-ahmad-6a6837121/">
          <Image src="/Linkedin.png" alt="Linkedin" height={48} width={48} />
        </Link>
        <Link href="https://github.com/Driz-y">
          <Image src="/Github.gif" alt="Github" height={48} width={48} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
