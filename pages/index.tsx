/* eslint-disable comma-dangle */
import Footer from "../components/molecules/footer";
import Navbar from "../components/molecules/navbar";
import ToTopBtn from "../components/molecules/ToTopBtn";
import CourseAcademy from "../components/organism/landingPage/academy";
import NewCertificate from "../components/organism/landingPage/certificate";
import Hero from "../components/organism/landingPage/hero";
import History from "../components/organism/landingPage/history";
import NewAchive from "../components/organism/landingPage/newAchive";
import ProgrammingProject from "../components/organism/landingPage/programmingProject";
import Skill from "../components/organism/landingPage/skill";

export default function Home({ skill }: any) {
  return (
    <>
      <NewAchive />
      <Navbar activeNav="Beranda" />
      <Hero />
      <Skill data={skill} />
      <History />
      <ProgrammingProject />
      <CourseAcademy />
      <NewCertificate />
      <Footer bgColor="bg-neutral-100" />
      <ToTopBtn />
    </>
  );
}

export async function getServerSideProps() {
  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = "api/v1";

  const skillSection = await fetch(
    `${ROOT_API}/${API_VERSION}/halaman-utama/skill`
  ).then((res) => res.json());

  return {
    props: {
      skill: skillSection.data,
    },
  };
}
