import classNames from "classnames";
import React from "react";

interface ProfileImgProps {
  hidden?: boolean;
  block?: boolean;
  lgHidden?: boolean;
}
export default function ProfileImg(props: Partial<ProfileImgProps>) {
  const { hidden, block, lgHidden } = props;
  const classname = classNames({
    "w-full self-center px-4 lg:w-1/2": true,
    hidden,
    "lg:block": block,
    "lg:hidden": lgHidden,
  });
  return (
    <div className={classname}>
      <div className="relative mt-10">
        <img
          src="/img/landing-page/hero/hero.png"
          alt="hero-img"
          className="max-w-full mx-auto"
        />
      </div>
    </div>
  );
}
