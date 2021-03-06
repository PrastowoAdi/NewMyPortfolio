interface TitleCenterProps {
  title: string;
  shortDesc: string;
  desc: string;
}
export default function TitleCenter(props: TitleCenterProps) {
  const { title, shortDesc, desc } = props;
  return (
    <div className="max-w-xl mx-auto text-center mb-16">
      <h4 className="font-semibold text-md xs:text-lg text-primary uppercase dark:text-customyel">
        {title}
      </h4>
      <h2 className="font-bold text-dark text-xl xs:text-3xl mt-[-5px] uppercase dark:text-neutral-200">
        {shortDesc}
      </h2>
      <p className="font-medium text-md text-secondary mt-1 dark:text-neutral-100">
        {desc}
      </p>
    </div>
  );
}
