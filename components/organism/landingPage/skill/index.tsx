import TitleCenter from "../../../molecules/landingPage/TitleCenter";
import Item from "./item";

export default function Skill() {
  return (
    <section id="LastLesson" className="dark:bg-neutral-700">
      <svg
        viewBox="0 0 1440 199"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="dark:text-neutral-800 pb-10"
      >
        <path
          d="M0 160L34.3 144C68.6 128 137 96 206 90.7C274.3 85 343 107 411 133.3C480 160 549 192 617 197.3C685.7 203 754 181 823 149.3C891.4 117 960 75 1029 90.7C1097.1 107 1166 181 1234 192C1302.9 203 1371 149 1406 122.7L1440 96V0H1405.7C1371.4 0 1303 0 1234 0C1165.7 0 1097 0 1029 0C960 0 891 0 823 0C754.3 0 686 0 617 0C548.6 0 480 0 411 0C342.9 0 274 0 206 0C137.1 0 69 0 34 0H0V160Z"
          fill="currentColor"
        />
      </svg>
      <div className="container">
        <div className="w-full px-4">
          <TitleCenter
            title="Skill"
            shortDesc="Programming Skill"
            desc="Below are some programming language or tools programming that
                I`m recently learning and use to developed my project."
          />
        </div>
        <div className="w-full px-4">
          <div className="flex flex-wrap">
            <Item img="/img/landing-page/skill/js.png" title="Javascript" />
            <Item img="/img/landing-page/skill/db.png" title="Database" />
            <Item img="/img/landing-page/skill/css.png" title="CSS" />
            <Item
              img="/img/landing-page/skill/toolsprograming.png"
              title="Tools"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
