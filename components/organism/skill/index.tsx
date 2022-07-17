import TitleLeft from "../../molecules/landingPage/TitleLeft";
import ItemSkill from "./ItemSkill";

export default function SkillPage() {
  return (
    <section id="home" className="pt-28 pb-28 bg-neutral-50">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="hidden w-full self-center px-4 lg:w-1/2 lg:block">
            <div className="relative mt-8">
              <img
                src="/img/skill/bg-skill.svg"
                alt="bg-img"
                className="w-[70%] mx-auto"
              />
            </div>
          </div>
          <div className="w-full self-center px-4 pt-7 lg:w-1/2">
            <TitleLeft
              title="My Skill"
              shortDesc="My Programming Skill"
              desc="Below are some programming language or tools programming that
            I`m learning and use to developed my project."
            />
          </div>
        </div>

        <div className="flex flex-wrap pt-20 mb-10">
          <ItemSkill
            href="#"
            img="/img/skill/reactbg.png"
            desc="This is a description of my skills when I use React JS, below
                you can see my level of experience when I use React JS and
                some projects I have successfully completed using React JS."
            level="Intermediate"
            project="2"
          />
          <ItemSkill
            href="#"
            img="/img/skill/reactbg.png"
            desc="This is a description of my skills when I use React JS, below
                you can see my level of experience when I use React JS and
                some projects I have successfully completed using React JS."
            level="Intermediate"
            project="2"
          />
          <ItemSkill
            href="#"
            img="/img/skill/reactbg.png"
            desc="This is a description of my skills when I use React JS, below
                you can see my level of experience when I use React JS and
                some projects I have successfully completed using React JS."
            level="Intermediate"
            project="2"
          />
        </div>
      </div>
      <div className="w-10 mx-auto">
        <a
          href="#"
          className=" text-secondary hover:text-primary transition duration-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
