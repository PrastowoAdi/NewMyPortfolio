/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */

import { useState } from "react";
import TitleLeft from "../../../molecules/landingPage/TitleLeft";
import Education from "./education";
import ImgEducation from "./education/ImgEducation";
import Job from "./job";
import ImgJob from "./job/ImgJob";

export default function History() {
  const [content, setContent] = useState("education");
  const [activeBtnEdu, setActiveBtnEdu] = useState("active-btn_history");
  const [activeBtnJob, setActiveBtnJob] = useState("");

  const btnContentEducation = () => {
    setContent("education");
    setActiveBtnEdu("active-btn_history");
    setActiveBtnJob("");
  };

  const btnContentJob = () => {
    setContent("job");
    setActiveBtnJob("active-btn_history");
    setActiveBtnEdu("");
  };

  return (
    <section id="MyHistory" className="bg-neutral-100 dark:bg-neutral-800">
      <svg
        viewBox="0 0 1440 288"
        className="text-white dark:text-neutral-700"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 192L48 165.3C96 139 192 85 288 80C384 75 480 117 576 154.7C672 192 768 224 864 208C960 192 1056 128 1152 133.3C1248 139 1344 213 1392 250.7L1440 288V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V192Z"
          fill="currentColor"
        />
      </svg>

      <div className="container">
        <div className="w-full px-4">
          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2 py-4">
              <div className="max-w-xl mx-auto mb-16">
                <TitleLeft
                  title="History"
                  shortDesc="My History of Life"
                  desc="This is the history of my life from i in high school until I
                    get my job now, its a long story but you can read it bellow."
                />

                <div className="overflow-hidden border-b-2 pt-5 pb-4">
                  <button
                    className={`cursor-pointer p-2 mr-2 ${activeBtnEdu}`}
                    onClick={btnContentEducation}
                  >
                    <div className="flex items-center text-gray-700 dark:text-neutral-200">
                      <img
                        className="h-5 w-5 mr-1"
                        src="/img/landing-page/history/education/education.svg"
                        alt="icon"
                      />
                      <h4 className="text-base">Education</h4>
                    </div>
                  </button>
                  <button
                    className={`cursor-pointer p-2 mr-2 ${activeBtnJob}`}
                    onClick={btnContentJob}
                  >
                    <div className="flex items-center text-gray-700 dark:text-neutral-200">
                      <img
                        className="h-5 w-5 mr-1"
                        src="/img/landing-page/history/job/job.svg"
                        alt="icon"
                      />
                      <h4 className="text-base">Job Experience</h4>
                    </div>
                  </button>
                </div>
                <div className="pt-1">
                  {content === "education" ? (
                    <Education />
                  ) : content === "job" ? (
                    <Job />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 py-4">
              {content === "education" ? (
                <ImgEducation />
              ) : content === "job" ? (
                <ImgJob />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
