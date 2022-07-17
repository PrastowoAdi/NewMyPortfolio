export default function ImgBg() {
  return (
    <>
      <div className="w-full px-4 mb-16 lg:w-1/2 lg:hidden">
        <img
          src="/img/skill/project/project-bg.svg"
          alt="project"
          className="w-[80%] mx-auto"
        />
      </div>
      <div className="w-full px-4 lg:w-1/2 py-4 hidden lg:block">
        <img
          src="/img/skill/project/project-bg.svg"
          alt="project"
          className="w-[65%] mx-auto"
        />
      </div>
    </>
  );
}
