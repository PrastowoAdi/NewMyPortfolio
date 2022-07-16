import TitleCenter from "../../../molecules/landingPage/TitleCenter";
import ItemCourse from "./ItemCourse";

export default function CourseAcademy() {
  return (
    <section id="academy" className="pb-32 bg-neutral-50">
      <img src="/img/landing-page/academy/waves-1.svg" alt="waves" />
      <div className="container">
        <div className="w-full px-4">
          <TitleCenter
            title="Academy"
            shortDesc="Course Training"
            desc="Below are some course or training i have been completed recently."
          />
        </div>
        <div className="flex flex-wrap">
          <ItemCourse
            bgImg="/img/landing-page/academy/academyudemy1.png"
            logoImg="/img/landing-page/academy/udemylogo.png"
            title="Next.js Projects - 3 NextJS projects"
            desc="LNext.js (react js framework) Projects. Build 3 NextJS hands
            on projects. IMDB, Instagram and Google clones using Next js."
            course="128"
            hours="50"
            href="#"
          />
          <ItemCourse
            bgImg="/img/landing-page/academy/academyudemy1.png"
            logoImg="/img/landing-page/academy/udemylogo.png"
            title="Next.js Projects - 3 NextJS projects"
            desc="LNext.js (react js framework) Projects. Build 3 NextJS hands
            on projects. IMDB, Instagram and Google clones using Next js."
            course="128"
            hours="50"
            href="#"
          />
          <ItemCourse
            bgImg="/img/landing-page/academy/academyudemy1.png"
            logoImg="/img/landing-page/academy/udemylogo.png"
            title="Next.js Projects - 3 NextJS projects"
            desc="LNext.js (react js framework) Projects. Build 3 NextJS hands
            on projects. IMDB, Instagram and Google clones using Next js."
            course="128"
            hours="50"
            href="#"
          />
        </div>
      </div>
    </section>
  );
}
