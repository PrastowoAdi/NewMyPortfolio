import Content from "./Content";

export default function NewAchive() {
  return (
    <section id="newAchive" className="">
      <div className="w-full px-4 py-4 bg-neutral-200 dark:bg-neutral-900">
        <div className="flex items-center justify-center mb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 bg-white rounded-full p-1 mr-1 text-secondary dark:bg-neutral-50 dark:text-neutral-900"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
              clipRule="evenodd"
            />
          </svg>
          <h3 className="text-sm xs:text-base md:text-lg text-secondary font-semibold mr-1 dark:text-neutral-50">
            New Achievements
          </h3>
        </div>
        <Content />
      </div>
    </section>
  );
}
