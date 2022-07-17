import classNames from "classnames";

interface LogoItemProps {
  href: string;
  img: string;
}
export default function LogoItem(props: LogoItemProps) {
  const { href, img } = props;
  const classnames = classNames({
    "flex-shrink-0 w-[120px] mx-4 py-4 lg:mx-6 xl:mx-8 lg:grayscale lg:opacity-60 lg:transition lg:duration-500 lg:hover:grayscale-0 lg:hover:opacity-100":
      true,
  });
  return (
    <a href={href} className={classnames} target="_blank" rel="noreferrer">
      <img src={img} alt="logo-img" />
    </a>
  );
}
