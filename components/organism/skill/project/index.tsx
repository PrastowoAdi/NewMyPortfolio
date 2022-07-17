import React from "react";
import TitleLeft from "../../../molecules/landingPage/TitleLeft";
import ImgBg from "./ImgBg";
import ItemNav from "./ItemNav";
import ItemProject from "./ItemProject";

export default function ProjectPage() {
  return (
    <section id="MyProject" className="pt-36 pb-20">
      <div className="container">
        <div className="flex flex-wrap">
          <ImgBg />
          <div className="w-full px-4 lg:w-1/2 py-4">
            <div className="max-w-xl mx-auto mb-16">
              <div className="text-secondary pb-16 w-full gap-2 flex justify-end lg:pb-20">
                <ItemNav href="/skill" title="Skill" />
                {" / "}
                <ItemNav href="/skill/project" title="Project" active />
              </div>
              <TitleLeft title="Project Complated" shortDesc="ReactJS" />
              <div className="w-full lg:w-4/5">
                <p className="font-medium text-md text-secondary">
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
