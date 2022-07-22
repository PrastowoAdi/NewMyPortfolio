import React from "react";

export default function ContentSkeleton() {
  return (
    <div className="max-w-xl mx-auto mb-16">
      <div className="animate-pulse">
        <div className="w-1/2 h-4 bg-gray-300 rounded-md" />
        <div className="w-2/5 h-4 mt-3 bg-gray-300 rounded-md" />
        <div className="w-2/6 h-4 mt-3 bg-gray-300 rounded-md" />
      </div>
    </div>
  );
}
