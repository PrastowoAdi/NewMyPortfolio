/* eslint-disable no-use-before-define */
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */

import Link from "next/link";
import { useState } from "react";
import BtnReadMore from "./BtnReadMore";

/* eslint-disable no-undef */
interface ItemSkillProps {
  img: string;
  desc: string;
  level: string;
  project: string;
  href: string;
}
export default function ItemSkill(props: ItemSkillProps) {
  const { img, desc, level, project, href = "/" } = props;
  const [max, setMax] = useState(150);
  const [len, setLen] = useState(100);

  const truncate = (str: string, maxString: number, maxLen: number) =>
    str.length > maxString ? `${str.substring(0, maxLen)}...` : str;

  const btnReadMore = () => {
    setMax(200);
    setLen(120);
  };

  setTimeout(() => {
    setMax(150);
  }, 10000);

  return (
    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
      <div className="rounded-md shadow-lg overflow-hidden mb-10 bg-white">
        <div className="w-full p-2">
          <div className="w-full">
            <img src={img} alt="item-img" />
          </div>
        </div>
        <div className="px-6">
          <p className="text-base text-secondary mb-5">
            {truncate(desc, max, len)}
          </p>
          {max === 200 ? (
            <BtnReadMore disabledBtn />
          ) : (
            <BtnReadMore onClick={() => btnReadMore()} />
          )}
        </div>
        <div className="p-5 mt-3">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-1/2 border-r-2 border-r-neutral-100">
              <img
                src="/img/skill/idea.png"
                alt="clock"
                className="w-5 h-5 mx-auto"
              />
              <h5 className="text-xs font-semibold text-center mt-1">
                {level}
              </h5>
            </div>
            <div className="w-1/2">
              <Link href={href}>
                <a className="hover:text-slate-500 hover:transition hover:duration-500">
                  <img
                    src="/img/skill/task.png"
                    alt="course"
                    className="w-5 h-5 mx-auto"
                  />
                  <h5 className="text-xs font-semibold text-center mt-1">
                    {project} Project Finish
                  </h5>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
