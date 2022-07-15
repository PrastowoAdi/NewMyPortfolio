import HistoryItem from "../../../../molecules/landingPage/HistoryItem";

export default function Job() {
  return (
    <div className="pt-1">
      <div className="w-full px-3 lg:mt-14 pt-5 lg:hidden">
        <div className="bg-white rounded-md shadow-lg overflow-hidden mb-8">
          <img
            src="/img/landing-page/history/job/jobimg.png"
            alt="job-img"
            className="w-full"
          />
        </div>
      </div>
      <HistoryItem
        img="/img/landing-page/history/visionet.png"
        place="PT. Visionet Data Internasional"
        name="Internship as Middleware Programmer"
        years="2019-2020"
      />
      <HistoryItem
        img="/img/landing-page/history/mii.png"
        place="PT. Mitra Integrasi Informatika"
        name="Junior Application Developer"
        years="2020-2022"
      />
      <HistoryItem
        img="/img/landing-page/history/bni.png"
        place="Bank Negara Indonesia"
        name="Base24 Developer"
        years="2021-2022"
      />
    </div>
  );
}
