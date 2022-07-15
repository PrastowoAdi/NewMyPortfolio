/* eslint-disable no-undef */
import cx from "classnames";

interface SocialItemProps {
  href: string;
  img: "linkedin" | "github" | "instagram";
}
export default function SocialItem(props: SocialItemProps) {
  const { href, img } = props;
  const classnames = cx({
    "hover:border-l-primary w-10 h-10 border-l-2 border-l-slate-500 shadow-md p-2 hover:shadow-lg rounded-md":
      true,
  });
  return (
    <a href={href} target="_blank" className={classnames} rel="noreferrer">
      <img
        src={`/img/landing-page/hero/${img}.svg`}
        alt="socialItem-img"
        className="mx-auto"
      />
    </a>
  );
}
