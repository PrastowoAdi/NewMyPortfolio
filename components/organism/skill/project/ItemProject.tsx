import Link from "next/link";
import React from "react";

interface ItemProjectProps {
  href: string;
  title: string;
}
export default function ItemProject(props: ItemProjectProps) {
  const { href = "/", title } = props;
  return (
    <Link href={href}>
      <a className="text-secondary hover:text-primary transition duration-200">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          {title}
        </div>
      </a>
    </Link>
  );
}
