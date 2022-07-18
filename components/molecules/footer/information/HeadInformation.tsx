interface HeadInformationProps {
  title: string;
  job: string;
  domiciled: string;
}
export default function HeadInformation(props: HeadInformationProps) {
  const { title, job, domiciled } = props;
  return (
    <>
      <h4 className="font-semibold text-xl xs:text-2xl text-primary uppercase dark:text-customyel">
        {title}
      </h4>
      <p className="mt-5 text-secondary dark:text-neutral-100">
        {job}
        <span className="block">{domiciled}</span>
      </p>
    </>
  );
}
