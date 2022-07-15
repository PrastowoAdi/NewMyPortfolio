import TitleCenter from "../../../molecules/landingPage/TitleCenter";
import Item from "./item";

export default function Skill() {
  return (
    <>
      <img src="/img/landing-page/skill/waves-1.svg" alt="waves" />
      <section id="LastLesson" className="pt-10 pb-32">
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
    </>
  );
}
