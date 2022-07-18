interface ProgrammingItemProps {
  href: string;
  img: string;
  title: string;
}

export default function ProgrammingItem(props: ProgrammingItemProps) {
  const { href = "/", img, title } = props;
  return (
    <a
      href={href}
      className="text-secondary hover:brightness-125 w-13 dark:text-neutral-100"
    >
      <img src={img} alt="icon-project" className="h-7 w-7 mx-auto" />
      <p className="text-sm">{title}</p>
    </a>
  );
}
