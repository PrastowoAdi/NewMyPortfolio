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
    <section id="MyHistory" className="bg-neutral-50">
      <img src="/img/landing-page/history/waves-1.svg" alt="waves" />
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
                    <div className="flex items-center text-gray-700">
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
                    <div className="flex items-center text-gray-700">
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
