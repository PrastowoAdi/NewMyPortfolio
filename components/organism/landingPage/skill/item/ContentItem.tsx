interface ContentItemProps {
  href: string;
  img: "nextjs" | "nodejs" | "figma" | "tailwind" | "vscode" | "mongo";
}
export default function ContentItem(props: ContentItemProps) {
  const { href = "/", img } = props;
  return (
    <a href={href} className="max-w-[120px] mx-4 py-4 lg:mx-6 xl:mx-8 ">
      <img src={`/img/landing-page/skill/${img}.png`} alt="item-img" />
    </a>
  );
}
