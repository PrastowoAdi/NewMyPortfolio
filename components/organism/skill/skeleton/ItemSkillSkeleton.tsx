import React from "react";

export default function ItemSkillSkeleton() {
  return (
    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
      <div className="rounded-md shadow-lg overflow-hidden mb-10 bg-white dark:bg-neutral-600">
        <div className="w-full p-2 animate-pulse">
          <div className="w-[100px] h-[100px] bg-gray-300 rounded-full mx-auto" />
        </div>
        <div className="px-6 mt-3 animate-pulse">
          <div className="w-full h-3 bg-gray-300 rounded-md" />
          <div className="w-[90%] mt-1 h-3 bg-gray-300 rounded-md" />
          <div className="w-1/2 mt-1 h-3 bg-gray-300 rounded-md" />
        </div>
        <div className="p-5 mt-3 ">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-1/2 border-r-2 border-r-neutral-100">
              <div className="w-5 h-5 mx-auto bg-gray-300 rounded-full animate-pulse" />
              <div className="w-10 h-3 bg-gray-300 mx-auto mt-1 rounded-md animate-pulse" />
            </div>
            <div className="w-1/2">
              <div className="w-5 h-5 mx-auto bg-gray-300 rounded-full animate-pulse" />
              <div className="w-10 h-3 bg-gray-300 mx-auto mt-1 rounded-md animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
