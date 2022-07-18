interface ItemCourseProps {
  title: string;
  desc: string;
}

export default function ItemCourse(props: ItemCourseProps) {
  const { title, desc } = props;
  return (
    <li>
      <p>{title}</p>
      <p className="px-3">{desc}</p>
    </li>
  );
}
