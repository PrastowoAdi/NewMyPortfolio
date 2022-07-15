/* eslint-disable object-curly-newline */
import cx from "classnames";

interface JobItemProps {
  img: string;
  place: string;
  name: string;
  years: string;
}
export default function HistoryItem(props: JobItemProps) {
  const { img, place, name, years } = props;
  const classnames = cx({
    "flex items-center border-t-2 border-t-primary lg:transition lg:duration-500 lg:hover:shadow-lg p-2 lg:border-t-0 rounded-md cursor-pointer":
      true,
  });
  return (
    <div className={classnames}>
      <img
        src={img}
        alt="history-img"
        className="hidden xs:block p-2 w-[20%] mr-5 rounded-full shadow-md"
      />
      <div className="mt-3">
        <h3 className="text-xl lg:text-2xl text-slate-800 font-bold leading-none">
          {place}
        </h3>
        <p className="text-sm font-semibold text-secondary mt-[-3px]]">
          {name}
        </p>
        <p className="text-secondary mt-[-4px]">{years}</p>
      </div>
    </div>
  );
}
