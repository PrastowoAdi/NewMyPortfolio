import Button from "../../../molecules/landingPage/Button";
import TitleLeft from "../../../molecules/landingPage/TitleLeft";

export default function NewCertificate() {
  return (
    <section id="NewCertificate" className="pb-20 dark:bg-neutral-700">
      <svg
        className="dark:text-neutral-800"
        viewBox="0 0 1440 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 256L40 229.3C80 203 160 149 240 112C320 75 400 53 480 69.3C560 85 640 139 720 138.7C800 139 880 85 960 101.3C1040 117 1120 203 1200 208C1280 213 1360 139 1400 101.3L1440 64V0H1400C1360 0 1280 0 1200 0C1120 0 1040 0 960 0C880 0 800 0 720 0C640 0 560 0 480 0C400 0 320 0 240 0C160 0 80 0 40 0H0V256Z"
          fill="currentColor"
        />
      </svg>

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
  );
}
