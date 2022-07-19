import classNames from "classnames";
import Link from "next/link";

interface ItemNavProps {
  href: string;
  title: string;
  active?: boolean;
}
export default function ItemNav(props: Partial<ItemNavProps>) {
  const { href = "/", title, active } = props;
  const classname = classNames({
    "hover:text-customyel transition duration-200": true,
    "dark:text-yellow-200": active,
  });
  return (
    <Link href={href}>
      <a className={classname}>{title}</a>
    </Link>
  );
}
