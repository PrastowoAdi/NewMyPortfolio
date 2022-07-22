import Footer from "../../../components/molecules/footer";
import Navbar from "../../../components/molecules/navbar";
import ToTopBtn from "../../../components/molecules/ToTopBtn";
import ProjectPage from "../../../components/organism/skill/project";

export default function Project() {
  return (
    <>
      <Navbar activeNav="Skill" />
      <ProjectPage />
      <Footer bgColor="bg-neutral-100" />
      <ToTopBtn />
    </>
  );
}
