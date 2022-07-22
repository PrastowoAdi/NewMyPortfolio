import cx from "classnames";
import Link from "next/link";

interface ItemAcademyProps {
  href: string;
  img: string;
}
export default function ItemAcademy(props: ItemAcademyProps) {
  const { href = "/", img } = props;
  const classnames = cx({
    "flex-shrink-0 w-[100px] py-4 hover:brightness-125": true,
  });
  return (
    <Link href={href}>
      <a className={classnames}>
        <img src={img} alt="academy-logo" />
      </a>
    </Link>
  );
}
