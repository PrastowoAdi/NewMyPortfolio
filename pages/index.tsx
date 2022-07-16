import Hero from "../components/organism/landingPage/hero";
import History from "../components/organism/landingPage/history";
import NewAchive from "../components/organism/landingPage/newAchive";
import ProgrammingProject from "../components/organism/landingPage/programmingProject";
import Skill from "../components/organism/landingPage/skill";

export default function Home() {
  return (
    <>
      <NewAchive />
      <Hero />
      <Skill />
      <History />
      <ProgrammingProject />
    </>
  );
}
