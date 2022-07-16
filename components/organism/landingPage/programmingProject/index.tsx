import Button from "../../../molecules/landingPage/Button";
import TitleLeft from "../../../molecules/landingPage/TitleLeft";
import ProgrammingItem from "./ProgrammingItem";

export default function ProgrammingProject() {
  return (
    <>
      <img
        src="/img/landing-page/programming-project/waves-1.svg"
        alt="waves"
      />
      <section id="LastProject" className="">
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
    </>
  );
}
