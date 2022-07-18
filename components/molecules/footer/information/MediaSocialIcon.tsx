import classNames from "classnames";

interface MediaSocialIconProps {
  href: string;
  img: string;
}
export default function MediaSocialIcon(props: MediaSocialIconProps) {
  const { href, img } = props;
  const classname = classNames({
    "w-10 h-10 shadow-md p-2 hover:shadow-lg rounded-full lg:grayscale lg:transition lg:duration-75 lg:hover:grayscale-0 dark:bg-neutral-100":
      true,
  });
  return (
    <a href={href} className={classname} target="_blank" rel="noreferrer">
      <img src={img} alt="mediaSocial-icon" className="mx-auto" />
    </a>
  );
}
