interface TitleLeftProps {
  title: string;
  shortDesc: string;
  desc?: string;
}
export default function TitleLeft(props: Partial<TitleLeftProps>) {
  const { title, shortDesc, desc } = props;
  return (
    <>
      <h4 className="font-semibold text-md xs:text-lg text-primary uppercase">
        {title}
      </h4>
      <h2 className="font-bold text-dark text-xl xs:text-3xl mt-[-5px] uppercase">
        {shortDesc}
      </h2>
      <p className="font-medium text-md text-secondary mt-1">{desc}</p>
    </>
  );
}
