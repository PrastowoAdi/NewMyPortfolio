import React from "react";

export default function ProgramItemSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="w-7 h-7 rounded-full bg-gray-300" />
      <div className="w-full h-3 rounded-md bg-gray-300 mt-1" />
    </div>
  );
}
