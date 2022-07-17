import Footer from "../../../components/molecules/footer";
import Navbar from "../../../components/molecules/navbar";
import ToTopBtn from "../../../components/molecules/ToTopBtn";
import Detail from "../../../components/organism/skill/project/detail";

export default function ProjectDetail() {
  return (
    <>
      <Navbar activeNav="Skill" />
      <Detail />
      <Footer bgColor="bg-neutral-50" />
      <ToTopBtn />
    </>
  );
}
