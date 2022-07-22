import Footer from "../../components/molecules/footer";
import Navbar from "../../components/molecules/navbar";
import ToTopBtn from "../../components/molecules/ToTopBtn";
import AcademyPage from "../../components/organism/academy";

export default function Academy() {
  return (
    <>
      <Navbar activeNav="Academy" />
      <AcademyPage />
      <Footer bgColor="bg-neutral-100" />
      <ToTopBtn />
    </>
  );
}
