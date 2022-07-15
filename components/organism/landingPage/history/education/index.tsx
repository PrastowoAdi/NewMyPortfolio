import HistoryItem from "../../../../molecules/landingPage/HistoryItem";

export default function Education() {
  return (
    <div className="pt-1">
      <div className="w-full px-3 lg:mt-14 pt-5 lg:hidden">
        <div className="bg-white rounded-md shadow-lg overflow-hidden mb-8">
          <img
            src="/img/landing-page/history/education/educationimg.png"
            alt="education-img"
            className="w-full"
          />
        </div>
      </div>
      <HistoryItem
        img="/img/landing-page/history/sma.png"
        place="SMA N 1 Wonogiri"
        name="High School Majoring in Science"
        years="2013-2016"
      />
      <HistoryItem
        img="/img/landing-page/history/uksw.png"
        place="Universitas Kristen Satya Wacana"
        name="Bachelor of Computer Science"
        years="2016-2020"
      />
    </div>
  );
}
