import HeadInformation from "./HeadInformation";
import MediaSocialIcon from "./MediaSocialIcon";

export default function Information() {
  return (
    <div className="w-full px-4 lg:w-[35%] py-4">
      <div className="max-w-xl mx-auto mb-5 lg:mt-16 px-4">
        <HeadInformation
          title="MyPortfolio"
          job="On Job in PT. Mitra Integrasi Informatika"
          domiciled="Domiciled in Tomang, Kec. Grogol petamburan, Kota Jakarta Barat,
            Daerah Khusus Ibukota Jakarta 11440"
        />
        <div className="flex items-center gap-4 mt-7">
          <MediaSocialIcon
            href="https://www.linkedin.com/in/prastowo-adi-nugroho-0657b31b0/"
            img="/img/footer/linkedin.svg"
          />
          <MediaSocialIcon
            href="https://github.com/PrastowoAdi"
            img="/img/footer/githubsocial.svg"
          />
          <MediaSocialIcon
            href="https://www.instagram.com/_prastowoadi/?hl=id"
            img="/img/footer/instagram.svg"
          />
        </div>
      </div>
    </div>
  );
}
