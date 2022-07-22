import React from "react";

export default function ContentDetailSkeleton() {
  return (
    <div className="max-w-xl mx-auto mb-16 animate-pulse">
      <div className="w-1/2 h-3 bg-gray-300 rounded-md" />
      <div className="w-1/5 h-3 mt-1 bg-gray-300 rounded-md" />
      <div className="w-4/5 h-3 mt-3 bg-gray-300 rounded-md" />
      <div className="w-3/6 h-3 mt-1 bg-gray-300 rounded-md" />
      <div className="w-1/3 h-3 mt-3 bg-gray-300 rounded-md" />
      <div className="w-1/3 h-3 mt-1 bg-gray-300 rounded-md" />
      <div className="w-1/3 h-3 mt-1 bg-gray-300 rounded-md" />
    </div>
  );
}
