import Link from "next/link";

interface ItemLinkProps {
  href: string;
  title: string;
}
export default function ItemLink(props: ItemLinkProps) {
  const { href = "/", title } = props;
  return (
    <Link href={href}>
      <a className="text-secondary hover:brightness-125 dark:text-neutral-100 dark:hover:text-neutral-400">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <p>{title}</p>
        </div>
      </a>
    </Link>
  );
}
