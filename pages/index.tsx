import Footer from "../components/molecules/footer";
import Navbar from "../components/molecules/navbar";
import CourseAcademy from "../components/organism/landingPage/academy";
import NewCertificate from "../components/organism/landingPage/certificate";
import Hero from "../components/organism/landingPage/hero";
import History from "../components/organism/landingPage/history";
import NewAchive from "../components/organism/landingPage/newAchive";
import ProgrammingProject from "../components/organism/landingPage/programmingProject";
import Skill from "../components/organism/landingPage/skill";

export default function Home() {
  return (
    <>
      <NewAchive />
      <Navbar activeNav="Beranda" />
      <Hero />
      <Skill />
      <History />
      <ProgrammingProject />
      <CourseAcademy />
      <NewCertificate />
      <Footer />
      <a
        href="#Hero"
        className="justify-center item-center h-14 w-14 bg-primary rounded-full fixed z-[9999] bottom-4 right-4 p-4 hover:animate-pulse hidden"
        id="to-top"
      >
        <span className="block h-5 w-5 border-t-2 border-l-2 rotate-45 mt-1" />
      </a>
    </>
  );
}
