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
      <section id="footer-1" className={bgColor}>
        <div className="footerContainer">
          <div className="flex flex-wrap">
            <Information />
            <Tautan />
          </div>
        </div>
      </section>
      <footer className={`p-5 border-t-2 border-t-neutral-200 ${bgColor}`}>
        <div className="container">
          <div className="w-full">
            <p className="font-medium text-sm text-secondary text-center">
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
