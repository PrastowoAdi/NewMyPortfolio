import React from "react";

interface BgImgProps {
  visible?: string;
  display?: string;
}
export default function BgImg(props: Partial<BgImgProps>) {
  const { visible, display } = props;
  return (
    <div
      className={`${visible} w-full self-center px-4 lg:w-1/2 lg:${display}`}
    >
      <div className="">
        <img
          src="/img/academy/detail/bg-detail.svg"
          alt="bg-img"
          className="w-[70%] mx-auto"
        />
      </div>
    </div>
  );
}
