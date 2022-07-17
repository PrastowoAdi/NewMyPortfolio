import Footer from "../../components/molecules/footer";
import Navbar from "../../components/molecules/navbar";
import ToTopBtn from "../../components/molecules/ToTopBtn";
import SkillPage from "../../components/organism/skill";

export default function Skill() {
  return (
    <>
      <Navbar activeNav="Skill" />
      <SkillPage />
      <Footer bgColor="bg-white" />
      <ToTopBtn />
    </>
  );
}
