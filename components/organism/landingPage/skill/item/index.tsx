import classNames from "classnames";
import ContentItem from "./ContentItem";
import HeadItem from "./HeadItem";

interface ItemProps {
  img: string;
  title: string;
  data: any;
}
export default function Item(props: ItemProps) {
  const { img, title, data } = props;
  const classnames = classNames({
    "shadow-md lg:hover:shadow-lg p-5 rounded-md cursor-pointer border-l-2 border-l-primary dark:border-l-customyel dark:bg-neutral-200":
      true,
  });
  return (
    <div className={classnames}>
      <HeadItem img={img} title={title} />
      <div className="mt-4">
        <div className="flex items-center justify-center">
          {/* <ContentItem href="asda" img="asda" /> */}
          {data.map((item: any) => (
            <ContentItem key={item._id} href={item.link} img={item.gambar} />
          ))}
        </div>
      </div>
    </div>
  );
}
