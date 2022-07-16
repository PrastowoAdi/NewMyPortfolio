import Button from "../../../molecules/landingPage/Button";
import TitleLeft from "../../../molecules/landingPage/TitleLeft";

export default function NewCertificate() {
  return (
    <>
      <img src="/img/landing-page/certificate/waves-1.svg" alt="waves" />
      <section id="NewCertificate" className="">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2 lg:hidden">
              <img
                src="/img/landing-page/certificate/achivement.png"
                alt="certificate-img"
                className="w-[80%] mx-auto"
              />
            </div>
            <div className="w-full px-4 lg:w-1/2 py-4">
              <div className="max-w-xl mx-auto mb-16 lg:mt-16">
                <TitleLeft
                  title="My New Certificate"
                  shortDesc="What is Docker"
                  desc=" I got this certificate by taking an online webinar at PT Mitra
                Integrasi Informatika on 19 May 2022. My goal in joining this
                is to find out what Docker is and how it works."
                />
              </div>
              <Button href="#" title="Certificate" />
            </div>
            <div className="w-full px-4 lg:w-1/2 py-4 hidden lg:block">
              <img
                src="/img/landing-page/certificate/achivement.png"
                alt="certificate-img"
                className="w-[65%] mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
