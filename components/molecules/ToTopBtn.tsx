export default function ToTopBtn() {
  return (
    <a
      href="#Hero"
      className="justify-center item-center h-14 w-14 bg-primary rounded-full fixed z-[9999] bottom-4 right-4 p-4 hover:animate-pulse hidden dark:bg-customyel"
      id="to-top"
    >
      <span className="block h-5 w-5 border-t-2 border-l-2 rotate-45 mt-1 border-t-neutral-100 border-l-neutral-100 dark:border-t-neutral-900 dark:border-l-neutral-900" />
    </a>
  );
}
