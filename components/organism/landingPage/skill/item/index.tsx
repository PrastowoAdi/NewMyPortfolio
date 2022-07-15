import classNames from "classnames";
import React from "react";
import ContentItem from "./ContentItem";
import HeadItem from "./HeadItem";

interface ItemProps {
  img: string;
  title: string;
}
export default function Item(props: ItemProps) {
  const { img, title } = props;
  const classnames = classNames({
    "shadow-md lg:grayscale lg:opacity-90 lg:transition lg:duration-500 lg:hover:grayscale-0 lg:hover:opacity-100 lg:hover:shadow-lg p-5 rounded-md cursor-pointer border-l-2 border-l-primary":
      true,
  });
  return (
    <div className="w-full px-4 lg:w-1/2 py-4">
      <div className={classnames}>
        <HeadItem img={img} title={title} />
        <div className="mt-4">
          <div className="flex items-center justify-center">
            <ContentItem href="#" img="nextjs" />
            <ContentItem href="#" img="nodejs" />
          </div>
        </div>
      </div>
    </div>
  );
}
