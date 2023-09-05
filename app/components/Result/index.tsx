"use client";
import React from "react";
import { useSelector } from "@/lib/redux/store";
import Image from "next/image";
import ImageSkeleton from "../general/ImageSkeleton";

const Result: React.FC = () => {
  const status = useSelector((state) => state.files.status);
  const uploadedFile = useSelector((state) => state.files.uploadedFile);
  const processedFile = useSelector((state) => state.files.processedFile);

  return (
    <div className="flex w-full h-96">
      <div className="w-1/2 relative">
        {!!uploadedFile && (
          <>
            <Image
              src={uploadedFile.data}
              alt="Before Image"
              className="object-cover"
              fill
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50">
              <p className="text-center font-bold text-white py-1">BEFORE</p>
            </div>
          </>
        )}
      </div>
      <div className="w-1/2 relative">
        {status === "loading" ? (
          <ImageSkeleton />
        ) : processedFile ? (
          <>
            <Image
              src={processedFile}
              alt="After Image"
              className="object-cover"
              fill
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50">
              <p className="text-center font-bold text-white py-1">AFTER</p>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Result;
