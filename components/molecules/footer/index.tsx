/* eslint-disable react/jsx-one-expression-per-line */
import Information from "./information";
import Tautan from "./tautan";

interface FooterProps {
  bgColor: string;
}
export default function Footer(props: FooterProps) {
  const { bgColor } = props;
  return (
    <>
      <section id="footer-1" className={`${bgColor} dark:bg-neutral-900`}>
        <div className="footerContainer">
          <div className="flex flex-wrap">
            <Information />
            <Tautan />
          </div>
        </div>
      </section>
      <footer
        className={`p-5 border-t-2 border-t-neutral-200 ${bgColor} dark:bg-neutral-900 dark:border-t-customyel`}
      >
        <div className="container">
          <div className="w-full">
            <p className="font-medium text-sm text-secondary text-center dark:text-neutral-100">
              <span className="font-bold">
                &copy; {new Date().getFullYear()}
              </span>{" "}
              | My Portfolio Website Created by{" "}
              <span className="font-bold">Prastowo Adi Nugroho</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
