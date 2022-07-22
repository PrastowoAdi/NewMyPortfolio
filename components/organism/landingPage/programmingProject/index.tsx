import Button from "../../../molecules/landingPage/Button";
import TitleLeft from "../../../molecules/landingPage/TitleLeft";
import ProgrammingItem from "./ProgrammingItem";

export default function ProgrammingProject() {
  return (
    <section id="LastProject" className="dark:bg-neutral-700">
      <svg
        viewBox="0 0 1440 193"
        className="text-neutral-100 dark:text-neutral-800 pb-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 160L48 170.7C96 181 192 203 288 186.7C384 171 480 117 576 90.7C672 64 768 64 864 74.7C960 85 1056 107 1152 128C1248 149 1344 171 1392 181.3L1440 192V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V160Z"
          fill="currentColor"
        />
      </svg>

      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2 py-4 hidden lg:block">
            <img
              src="/img/landing-page/programming-project/programming-bg.png"
              alt="project"
              className="w-[65%] mx-auto"
            />
          </div>
          <div className="w-full px-4 lg:w-1/2 py-4">
            <div className="max-w-xl mx-auto mb-16 lg:mt-16">
              <TitleLeft
                title="My Programming Project"
                shortDesc="Twitter Clone"
                desc="This my programming project was i learned and build recently. This project I studied at UDEMY and developed using Javascript."
              />
              <div className="flex flex-wrap items-center gap-5 mt-5 mb-10">
                <ProgrammingItem
                  href="#"
                  img="/img/landing-page/programming-project/website.png"
                  title="Website"
                />
                <ProgrammingItem
                  href="#"
                  img="/img/landing-page/programming-project/github.svg"
                  title="Github"
                />
                <ProgrammingItem
                  href="#"
                  img="/img/landing-page/programming-project/nextjs.svg"
                  title="NextJS"
                />
                <ProgrammingItem
                  href="#"
                  img="/img/landing-page/programming-project/nodejs.svg"
                  title="Nodejs"
                />
                <ProgrammingItem
                  href="#"
                  img="/img/landing-page/programming-project/firebase.svg"
                  title="Firebase"
                />
              </div>
              <Button href="#" title="See More" />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 lg:hidden">
            <img
              src="/img/landing-page/programming-project/programming-bg.png"
              alt="project"
              className="w-[80%] mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
