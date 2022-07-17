export default function ImgBg() {
  return (
    <>
      <div className="w-full px-4 lg:w-1/2 lg:hidden">
        <img
          src="/img/skill/project/detail/detailbg.svg"
          alt="project"
          className="w-[85%] mx-auto"
        />
      </div>
      <div className="w-full px-4 lg:w-1/2 py-4 hidden lg:block">
        <img
          src="/img/skill/project/detail/detailbg.svg"
          alt="project"
          className="w-[55%] mx-auto"
        />
      </div>
    </>
  );
}
