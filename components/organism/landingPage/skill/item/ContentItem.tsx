interface ContentItemProps {
  href: string;
  img: string;
}
export default function ContentItem(props: ContentItemProps) {
  const { href = "/", img } = props;
  return (
    <a
      href={href}
      target="_blank"
      className="max-w-[120px] mx-4 py-4 lg:mx-6 xl:mx-8 "
      rel="noreferrer"
    >
      <img src={img} alt="item-img" />
    </a>
  );
}
