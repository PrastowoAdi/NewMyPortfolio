import classNames from "classnames";
import ContentItem from "./ContentItem";
import HeadItem from "./HeadItem";

export default function SkeletonItem() {
  const classnames = classNames({
    "shadow-md lg:hover:shadow-lg p-5 rounded-md cursor-pointer border-l-2 border-l-primary dark:border-l-customyel dark:bg-neutral-200":
      true,
  });
  return (
    <div className="w-full px-4 lg:w-1/2 py-4">
      <div className={classnames}>
        <HeadItem />
        <div className="mt-4">
          <div className="flex items-center justify-center">
            <ContentItem />
            <ContentItem />
          </div>
        </div>
      </div>
    </div>
  );
}
