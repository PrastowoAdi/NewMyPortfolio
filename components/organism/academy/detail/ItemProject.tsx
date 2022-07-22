/* eslint-disable object-curly-newline */

import Link from "next/link";

/* eslint-disable react/jsx-one-expression-per-line */
interface ItemProjectProps {
  bgImg: string;
  logoImg: string;
  title: string;
  desc: string;
  hours: string;
  course: string;
  href: string;
  hrefDetail: string;
}

export default function ItemProject(props: ItemProjectProps) {
  const {
    bgImg,
    logoImg,
    title,
    desc,
    hours,
    course,
    href = "/",
    hrefDetail = "/",
  } = props;
  return (
    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
      <div className="rounded-md shadow-lg overflow-hidden mb-10 bg-white dark:bg-neutral-100">
        <div
          className="w-full p-5"
          style={{
            backgroundImage: `url(${bgImg})`,
          }}
        >
          <div className="w-[150px] h-[150px] bg-white/20 m-auto backdrop-blur-xs p-5 rounded-full">
            <img src={logoImg} alt="logo" />
          </div>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-dark truncate dark:text-neutral-800">
            <Link href={hrefDetail}>
              <a className="hover:text-slate-500 hover:transition hover:duration-500 dark:hover:text-neutral-600 dark:hover:brightness-100">
                {title}
              </a>
            </Link>
          </div>
          <p className="text-sm text-secondary dark:text-neutral-500">{desc}</p>
        </div>
        <div className="p-5">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-1/3 border-r-2 border-r-neutral-100 dark:border-r-neutral-500">
              <img
                src="/img/landing-page/academy/clock.png"
                alt="clock"
                className="w-5 h-5 mx-auto"
              />
              <h5 className="text-xs font-semibold text-center mt-1 dark:text-neutral-500">
                {hours} hours
              </h5>
            </div>
            <div className="w-1/3 border-r-2 border-r-neutral-100 dark:border-r-neutral-500">
              <img
                src="/img/landing-page/academy/online-learning.png"
                alt="course"
                className="w-5 h-5 mx-auto"
              />
              <h5 className="text-xs font-semibold text-center mt-1 dark:text-neutral-500">
                {course} courses
              </h5>
            </div>
            <div className="w-1/3">
              <a
                href={href}
                target="_blank"
                className="hover:text-slate-500 hover:transition hover:duration-500 dark:hover:brightness-150"
                rel="noreferrer"
              >
                <img
                  src="/img/landing-page/academy/certificate.png"
                  alt="course"
                  className="w-5 h-5 mx-auto"
                />
                <h5 className="text-xs font-semibold text-center mt-1 dark:text-neutral-500">
                  certificate
                </h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
