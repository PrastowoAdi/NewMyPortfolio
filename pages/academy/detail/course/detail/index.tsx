import Footer from "../../../../../components/molecules/footer";
import Navbar from "../../../../../components/molecules/navbar";
import ToTopBtn from "../../../../../components/molecules/ToTopBtn";
import CourseDetail from "../../../../../components/organism/academy/detail/course";

export default function DetailCourse() {
  return (
    <>
      <Navbar activeNav="Academy" />
      <CourseDetail />
      <Footer bgColor="bg-neutral-50" />
      <ToTopBtn />
    </>
  );
}
