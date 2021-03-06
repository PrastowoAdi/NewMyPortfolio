import React, { useState } from "react";
import ItemNav from "../../../../molecules/ItemNav";
import TitleLeft from "../../../../molecules/landingPage/TitleLeft";
import ImgBg from "./ImgBg";
import ItemDetail from "./ItemDetail";
import LogoItem from "./LogoItem";
import ContentDetailSkeleton from "./skeleton/ContentDetailSkeleton";
import LogoItemSkeleton from "./skeleton/LogoSkeleton";

export default function Detail() {
  const [loading, setLoading] = useState(false);
  setTimeout(() => {
    setLoading(true);
  }, 5000);
  return (
    <section id="mylastproject" className="pt-36 pb-36 dark:bg-neutral-800">
      <div className="container">
        <div className="text-secondary px-6 w-full gap-2 flex pb-16 justify-end lg:pb-15 dark:text-neutral-100">
          <ItemNav href="/skill" title="Skill" />
          {" / "}
          <ItemNav href="/skill/project" title="Project" />
          {" / "}
          <ItemNav href="/skill/project/detail" title="Detail" active />
        </div>
        <div className="flex flex-wrap">
          <ImgBg />
          <div className="w-full px-4 lg:w-1/2 self-center py-4">
            {loading ? (
              <div className="max-w-xl mx-auto">
                <TitleLeft title="Detail Project" shortDesc="Twitter Clone" />
                <p className="font-medium text-md text-secondary mt-1 dark:text-neutral-100">
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
            ) : (
              <ContentDetailSkeleton />
            )}
          </div>
        </div>
        <div className="w-full lg:w-3/4 mx-auto p-2 mt-5">
          <div className="flex overflow-x-auto items-center scrollbar-none dark:bg-neutral-50">
            {loading ? (
              <>
                <LogoItem href="#" img="/img/skill/project/detail/nextjs.png" />
                <LogoItem href="#" img="/img/skill/project/detail/mongo.png" />
                <LogoItem href="#" img="/img/skill/project/detail/nodejs.png" />
                <LogoItem
                  href="#"
                  img="/img/skill/project/detail/tailwind.png"
                />
                <LogoItem href="#" img="/img/skill/project/detail/figma.png" />
              </>
            ) : (
              <>
                <LogoItemSkeleton />
                <LogoItemSkeleton />
                <LogoItemSkeleton />
                <LogoItemSkeleton />
                <LogoItemSkeleton />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
