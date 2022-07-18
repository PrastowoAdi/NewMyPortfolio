import TitleLeft from "../../../../molecules/landingPage/TitleLeft";
import ItemNav from "../../../../molecules/skill/ItemNav";
import BgImg from "./BgImg";
import ItemCourse from "./ItemCourse";

export default function CourseDetail() {
  return (
    <section id="CourseDetail" className="pt-36 pb-20">
      <div className="container">
        <div className="text-secondary px-6 w-full gap-2 flex pb-12 justify-end lg:justify-start lg:pb-15">
          <ItemNav href="/academy" title="Academy" />
          {" / "}
          <ItemNav href="/academy/detail" title="Detail" />
          {" / "}
          <ItemNav
            href="/academy/detail/course/detail"
            title="Course Detail"
            active
          />
        </div>
        <div className="flex flex-wrap">
          <BgImg display="hidden" />
          <div className="w-full px-4 self-center lg:w-1/2 py-4">
            <div className="max-w-xl mx-auto mb-16">
              <TitleLeft
                title="Udemy"
                shortDesc="Next.js Projects - 3 NextJS projects"
                desc="We are going to use the best practices of Nextjs to design and build fully functional websites. So far, three projects have been created for this course, including IMDB, Instagram, Twitter Clones, and Google clones, and finally, you are going to learn how to deploy your apps using vercel."
              />
              <ul className="mt-2 text-secondary px-5">
                <ol className="list-decimal">
                  <ItemCourse
                    title="IMDB Clone"
                    desc="Use TMBD database, style with Tailwind CSS."
                  />
                  <ItemCourse
                    title="Instagram Clone & Twitter Clone"
                    desc="Use Firebase for database and storage, style with Tailwind CSS, authenticate using next-auth, apply like and comment functionality, add upload functionality and use Image tag of nextjs."
                  />
                  <ItemCourse
                    title="Instagram Clone & Twitter Clone"
                    desc=" Style with Tailwind CSS, authenticate using next-auth, use
                    google search api, include web and image search."
                  />
                </ol>
              </ul>
            </div>
          </div>
          <BgImg display="block" visible="hidden" />
        </div>
      </div>
    </section>
  );
}