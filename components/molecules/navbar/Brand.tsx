import Link from "next/link";

export default function Brand() {
  return (
    <div className="px-4">
      <Link href="/">
        <a className="font-bold text-lg text-primary block py-6">
          MY PORTFOLIO
        </a>
      </Link>
    </div>
  );
}
