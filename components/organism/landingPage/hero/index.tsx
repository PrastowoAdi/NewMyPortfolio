/* eslint-disable react/jsx-one-expression-per-line */
import { motion } from "framer-motion";
import Button from "../../../molecules/landingPage/Button";
import DescribeMe from "./DescribeMe";
import MyProfile from "./MyProfile";
import ProfileImg from "./ProfileImg";
import SocialItem from "./SocialItem";

export default function Hero() {
  return (
    <section
      id="Hero"
      className="pt-36 pb-5 bg-neutral-100 dark:bg-neutral-800"
    >
      <div className="container">
        <div className="flex flex-wrap">
          <ProfileImg lgHidden />
          <motion.div
            className="w-full self-center px-4 pt-7 lg:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <MyProfile />
            <DescribeMe />
            <div className="flex items-center gap-4 mb-16 ">
              <SocialItem
                href="https://www.linkedin.com/in/prastowo-adi-nugroho-0657b31b0/"
                img="linkedin"
              />
              <SocialItem href="https://github.com/PrastowoAdi" img="github" />
              <SocialItem
                href="https://www.instagram.com/_prastowoadi/?hl=id"
                img="instagram"
              />
            </div>
            <Button
              href="https://drive.google.com/file/d/19ua9Mcj2eKmx24EsQR6B_Oufqw4U-DKd/view?usp=sharing"
              target="_blank"
              title="Download CV"
            />
          </motion.div>
          <ProfileImg hidden block />
        </div>
      </div>
    </section>
  );
}
