interface HeadItemProps {
  img: string;
  title: string;
}
export default function HeadItem(props: HeadItemProps) {
  const { img, title } = props;
  return (
    <div className="flex items-center justify-center">
      <img
        src={img}
        alt="skillItem-img"
        className="w-7 h-7 rounded-full shadow-md mr-2"
      />
      <h3 className="font-semibold text-sm text-slate-700 dark:text-neutral-900">
        {title}
      </h3>
    </div>
  );
}
