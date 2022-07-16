import Link from "next/link";

interface ItemLinkProps {
  img: string;
  href: string;
  title: string;
}
export default function ItemLink(props: ItemLinkProps) {
  const { img, href = "/", title } = props;
  return (
    <Link href={href}>
      <a className="text-secondary hover:brightness-125">
        <div className="flex items-center">
          <img src={img} className="h-5 w-5" alt="icon-link" />
          <p>{title}</p>
        </div>
      </a>
    </Link>
  );
}
