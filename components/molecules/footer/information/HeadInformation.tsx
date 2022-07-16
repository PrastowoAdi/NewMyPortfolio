interface HeadInformationProps {
  title: string;
  job: string;
  domiciled: string;
}
export default function HeadInformation(props: HeadInformationProps) {
  const { title, job, domiciled } = props;
  return (
    <>
      <h4 className="font-semibold text-xl xs:text-2xl text-primary uppercase">
        {title}
      </h4>
      <p className="mt-5 text-secondary">
        {job}
        <span className="block">{domiciled}</span>
      </p>
    </>
  );
}
