import ItemLink from "./ItemLink";

export default function Tautan() {
  return (
    <div className="w-full px-4 lg:w-[65%] py-4">
      <div className="max-w-xl mb-16 lg:mt-16">
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2 mt-5">
            <h4 className="font-semibold text-lg xs:text-2xl text-secondary uppercase dark:text-neutral-100">
              Keep Learning
            </h4>
            <ItemLink href="#" title="My Programming Project" />
            <ItemLink href="/#NewCertificate" title="New Certificate" />
            <ItemLink href="#" title="Academy" />
          </div>
          <div className="w-full lg:w-1/2 mt-5">
            <div className="flex flex-wrap">
              <div className="w-1/2 px-4">
                <ul>
                  <li>
                    <ItemLink href="/skill" title="Skill" />
                  </li>
                  <li>
                    <ItemLink href="/#MyHistory" title="History" />
                  </li>
                  <li>
                    <ItemLink href="#" title="Certificate" />
                  </li>
                </ul>
              </div>
              {/* <div className="w-1/2 px-4">
                <ul>
                  <li />
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
