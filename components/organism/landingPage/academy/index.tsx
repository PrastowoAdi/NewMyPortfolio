import TitleCenter from "../../../molecules/landingPage/TitleCenter";
import ItemCourse from "./ItemCourse";

export default function CourseAcademy() {
  return (
    <section id="academy" className="pb-32 bg-neutral-100 dark:bg-neutral-800">
      <svg
        className="text-white dark:text-neutral-700"
        viewBox="0 0 1440 224"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 224L48 208C96 192 192 160 288 133.3C384 107 480 85 576 101.3C672 117 768 171 864 160C960 149 1056 75 1152 58.7C1248 43 1344 85 1392 106.7L1440 128V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V224Z"
          fill="currentColor"
        />
      </svg>

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
