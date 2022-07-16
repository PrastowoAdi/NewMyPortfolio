/* eslint-disable react/jsx-one-expression-per-line */
import Information from "./information";
import Tautan from "./tautan";

export default function Footer() {
  return (
    <>
      <img src="/img/footer/waves-1.svg" alt="waves" />
      <section id="footer-1" className="bg-neutral-50">
        <div className="footerContainer">
          <div className="flex flex-wrap">
            <Information />
            <Tautan />
          </div>
        </div>
      </section>
      <footer className="bg-neutral-50 p-5 border-t-2 border-t-neutral-200">
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
