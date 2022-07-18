import Link from "next/link";

export default function Brand() {
  return (
    <div className="px-4">
      <Link href="/">
        <a className="font-bold text-2xl text-primary block py-6 dark:text-customyel">
          MYPORTFOLIO
        </a>
      </Link>
    </div>
  );
}
