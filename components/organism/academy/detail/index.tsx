import { useState } from "react";
import ItemNav from "../../../molecules/ItemNav";
import TitleLeft from "../../../molecules/landingPage/TitleLeft";
import BgImg from "./BgImg";
import ItemProject from "./ItemProject";
import ItemProjectSkeleton from "./skeleton/ItemProjectSkeleton";
import TitleLeftSkeleton from "./skeleton/TitleLeftSkeleton";

export default function DetailPage() {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 5000);
  return (
    <section id="DetailAcademy" className="pt-36 pb-20 dark:bg-neutral-800">
      <div className="container">
        <div className="text-secondary px-6 w-full gap-2 flex pb-12 justify-end lg:justify-start lg:pb-0 dark:text-neutral-100">
          <ItemNav href="/academy" title="Academy" />
          {" / "}
          <ItemNav href="/academy/detail" title="Detail" active />
        </div>
        <div className="flex flex-wrap pb-20">
          <BgImg display="hidden" />
          <div className="w-full px-4 self-center lg:w-1/2 py-4">
            <div className="max-w-xl mx-auto mb-16">
              {loading ? (
                <TitleLeft
                  title="Course Complated"
                  shortDesc="Udemy"
                  desc="Whether you want to learn or to share what you know, you`ve come to the right place. As a global destination for online learning, we connect people through knowledge."
                />
              ) : (
                <TitleLeftSkeleton />
              )}
            </div>
          </div>
          <BgImg display="block" visible="hidden" />
        </div>
        <div className="flex flex-wrap pb-10">
          {loading ? (
            <>
              <ItemProject
                bgImg="/img/landing-page/academy/academyudemy1.png"
                logoImg="/img/landing-page/academy/udemylogo.png"
                title="Next.js Projects - 3 NextJS projects"
                desc="LNext.js (react js framework) Projects. Build 3 NextJS hands
            on projects. IMDB, Instagram and Google clones using Next js."
                course="128"
                hours="50"
                href="#"
                hrefDetail="/academy/detail/course/detail"
              />
              <ItemProject
                bgImg="/img/landing-page/academy/academyudemy1.png"
                logoImg="/img/landing-page/academy/udemylogo.png"
                title="Next.js Projects - 3 NextJS projects"
                desc="LNext.js (react js framework) Projects. Build 3 NextJS hands
            on projects. IMDB, Instagram and Google clones using Next js."
                course="128"
                hours="50"
                href="#"
                hrefDetail="/academy/detail/course/detail"
              />
              <ItemProject
                bgImg="/img/landing-page/academy/academyudemy1.png"
                logoImg="/img/landing-page/academy/udemylogo.png"
                title="Next.js Projects - 3 NextJS projects"
                desc="LNext.js (react js framework) Projects. Build 3 NextJS hands
            on projects. IMDB, Instagram and Google clones using Next js."
                course="128"
                hours="50"
                href="#"
                hrefDetail="/academy/detail/course/detail"
              />
            </>
          ) : (
            <>
              <ItemProjectSkeleton />
              <ItemProjectSkeleton />
              <ItemProjectSkeleton />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
