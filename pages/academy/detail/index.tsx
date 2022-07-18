import Footer from "../../../components/molecules/footer";
import Navbar from "../../../components/molecules/navbar";
import ToTopBtn from "../../../components/molecules/ToTopBtn";
import DetailPage from "../../../components/organism/academy/detail";

export default function DetailAcademy() {
  return (
    <>
      <Navbar activeNav="Academy" />
      <DetailPage />
      <Footer bgColor="bg-neutral-50" />
      <ToTopBtn />
    </>
  );
}
