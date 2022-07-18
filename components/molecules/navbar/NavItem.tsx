import cx from "classnames";
import Link from "next/link";

interface NavItemProps {
  href: string;
  title: string;
  active?: boolean;
}
export default function NavItem(props: Partial<NavItemProps>) {
  const { href = "/", title, active } = props;
  const classname = cx({
    "text-base text-slate-700 py-2 mx-6 group-hover:text-primary flex dark:group-hover:text-customyel dark:text-neutral-100":
      true,
    "text-primary dark:text-yellow-200": active,
  });
  return (
    <li className="group">
      <Link href={href}>
        <a className={classname}>{title}</a>
      </Link>
    </li>
  );
}
