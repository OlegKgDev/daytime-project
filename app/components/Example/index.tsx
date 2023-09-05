import React from "react";
import Image from "next/image";

const Example: React.FC = () => (
  <div className="flex w-full h-96 relative">
    <div className="absolute z-10 top-0 left-0 w-full bg-black bg-opacity-50">
      <p className="text-center font-bold text-white py-1">EXAMPLE</p>
    </div>
    <div className="w-1/2 relative">
      <Image
        src="/images/before-img.webp"
        alt="Before Image"
        className="object-cover"
        fill
      />
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50">
        <p className="text-center font-bold text-white py-1">BEFORE</p>
      </div>
    </div>
    <div className="w-1/2 relative">
      <Image
        src="/images/after-img.webp"
        alt="After Image"
        className="object-cover"
        fill
      />
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50">
        <p className="text-center font-bold text-white py-1">AFTER</p>
      </div>
    </div>
  </div>
);

export default Example;
