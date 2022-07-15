import cx from "classnames";
import Link from "next/link";

interface ButtonProps {
  href: string;
  target?: string;
  title: string;
}
export default function Button(props: Partial<ButtonProps>) {
  const { href = "/", target, title } = props;
  const classname = cx({
    "text-base font-semibold text-white bg-primary py-3 px-8 rounded-md hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out":
      true,
  });
  return (
    <Link href={href}>
      <a className={classname} target={target}>
        {title}
      </a>
    </Link>
  );
}
