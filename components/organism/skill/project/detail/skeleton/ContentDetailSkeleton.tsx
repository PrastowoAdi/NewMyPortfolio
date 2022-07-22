import React from "react";

export default function ContentDetailSkeleton() {
  return (
    <div className="max-w-xl mx-auto animate-pulse">
      <div className="w-1/2 h-4 bg-gray-300 rounded-md" />
      <div className="w-2/3 h-4 mt-1 bg-gray-300 rounded-md" />
      <div className="w-full h-4 mt-3 bg-gray-300 rounded-md" />
      <div className="w-[90%] h-4 mt-1 bg-gray-300 rounded-md" />
      <div className="w-[60%] h-4 mt-1 bg-gray-300 rounded-md" />
      <div className="w-[70%] h-4 mt-1 bg-gray-300 rounded-md" />
      <div className="flex flex-wrap items-center gap-5 mt-5">
        <div className="">
          <div className="w-7 h-7 mt-3 bg-gray-300 rounded-full mx-auto" />
          <div className="w-10 h-4 mt-1 bg-gray-300 rounded-md mx-auto" />
        </div>
        <div className="">
          <div className="w-7 h-7 mt-3 bg-gray-300 rounded-full mx-auto" />
          <div className="w-10 h-4 mt-1 bg-gray-300 rounded-md mx-auto" />
        </div>
      </div>
    </div>
  );
}
