import Hero from "../components/organism/landingPage/hero";
import NewAchive from "../components/organism/landingPage/newAchive";
import Skill from "../components/organism/landingPage/skill";

export default function Home() {
  return (
    <>
      <NewAchive />
      <Hero />
      <Skill />
    </>
  );
}
