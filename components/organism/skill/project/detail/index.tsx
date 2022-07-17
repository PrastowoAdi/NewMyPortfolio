import React from "react";
import TitleLeft from "../../../../molecules/landingPage/TitleLeft";
import ItemNav from "../../../../molecules/skill/ItemNav";
import ImgBg from "./ImgBg";
import ItemDetail from "./ItemDetail";
import LogoItem from "./LogoItem";

export default function Detail() {
  return (
    <section id="mylastproject" className="pt-36 pb-36">
      <div className="container">
        <div className="flex flex-wrap">
          <ImgBg />
          <div className="w-full px-4 lg:w-1/2 py-4">
            <div className="max-w-xl mx-auto">
              <div className="text-secondary pb-16 w-full gap-2 flex justify-end lg:pb-20">
                <ItemNav href="/skill" title="Skill" />
                {" / "}
                <ItemNav href="/skill/project" title="Project" />
                {" / "}
                <ItemNav href="/skill/project/detail" title="Detail" active />
              </div>
              <TitleLeft title="Detail Project" shortDesc="Twitter Clone" />
              <p className="font-medium text-md text-secondary mt-1">
                This my programming project was i learned and build recently.
                <span>
                  This project I studied at UDEMY and developed using
                  Javascript.
                </span>
              </p>
              <div className="flex flex-wrap items-center gap-5 mt-5">
                <ItemDetail
                  href="#"
                  img="/img/skill/project/detail/website.png"
                  title="Website"
                />
                <ItemDetail
                  href="#"
                  img="/img/skill/project/detail/github.svg"
                  title="Github"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/4 mx-auto p-2 mt-5">
          <div className="flex overflow-x-auto items-center scrollbar-none">
            <LogoItem href="#" img="/img/skill/project/detail/nextjs.png" />
            <LogoItem href="#" img="/img/skill/project/detail/mongo.png" />
            <LogoItem href="#" img="/img/skill/project/detail/nodejs.png" />
            <LogoItem href="#" img="/img/skill/project/detail/tailwind.png" />
            <LogoItem href="#" img="/img/skill/project/detail/figma.png" />
          </div>
        </div>
      </div>
    </section>
  );
}
