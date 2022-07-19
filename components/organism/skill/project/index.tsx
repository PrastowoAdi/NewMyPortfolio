import React from "react";
import TitleLeft from "../../../molecules/landingPage/TitleLeft";
import ImgBg from "./ImgBg";
import ItemNav from "./ItemNav";
import ItemProject from "./ItemProject";

export default function ProjectPage() {
  return (
    <section id="MyProject" className="pt-36 pb-20 dark:bg-neutral-800">
      <div className="container">
        <div className="text-secondary px-6 w-full gap-2 flex pb-16 justify-end lg:pb-15 dark:text-neutral-100">
          <ItemNav href="/skill" title="Skill" />
          {" / "}
          <ItemNav href="/skill/project" title="Project" active />
        </div>
        <div className="flex flex-wrap">
          <ImgBg />
          <div className="w-full px-4 lg:w-1/2 py-4 self-center">
            <div className="max-w-xl mx-auto mb-16">
              <TitleLeft title="Project Complated" shortDesc="ReactJS" />
              <div className="w-full lg:w-4/5">
                <p className="font-medium text-md text-secondary dark:text-neutral-100">
                  Below is some my programming project was i learned and build
                  using ReactJS :
                </p>
              </div>
              <ul className="mt-1">
                <li>
                  <ItemProject
                    href="/skill/project/detail"
                    title="Twitter Clone"
                  />
                  <ItemProject
                    href="/skill/project/detail"
                    title="Instagram Clone"
                  />
                  <ItemProject
                    href="/skill/project/detail"
                    title="Google Search Clone"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
