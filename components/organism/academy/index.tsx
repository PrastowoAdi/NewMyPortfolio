import TitleLeft from "../../molecules/landingPage/TitleLeft";
import BgImg from "./BgImg";
import ItemAcademy from "./ItemAcademy";

export default function AcademyPage() {
  return (
    <section id="Academy" className="pt-28 pb-28 dark:bg-neutral-800">
      <div className="container">
        <div className="flex flex-wrap">
          <BgImg display="hidden" />
          <div className="w-full px-4 self-center pt-7 lg:w-1/2">
            <TitleLeft
              title="Academy"
              shortDesc="Course Training"
              desc="Below are some of the courses training I have joined and I learn a lot from this course. You can see below what i lear from this course."
            />
            <div className="w-4/5 mt-10 lg:mt-2">
              <div className="flex gap-6 overflow-x-auto items-center scrollbar-none ">
                <ItemAcademy
                  href="/academy/detail"
                  img="/img/academy/udemy.png"
                />
                <ItemAcademy href="#" img="/img/academy/bwa.png" />
                <ItemAcademy href="#" img="/img/academy/sanber.png" />
              </div>
            </div>
          </div>
          <BgImg visible="hidden" display="block" />
        </div>
      </div>
    </section>
  );
}
