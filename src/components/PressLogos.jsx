import sothebysLogo from "../images/press/sothebys.png";
import graziaLogo from "../images/press/grazia.jpg";
import cbs8Logo from "../images/press/cbs8.png";
import manilatimesLogo from "../images/press/manilatimes.png";
import businessmirrorLogo from "../images/press/businessmirror.jpg";
import citizeninkLogo from "../images/press/citizenink.png";
import businessworldLogo from "../images/press/businessworld.png";
import negrosLogo from "../images/press/negros.jpg";
import diaristLogo from "../images/press/diarist.png";

const PressLogos = () => {
  const pressItems = [
    {
      name: "Sotheby's",
      logo: sothebysLogo,
      url: "https://www.sothebys.com/en/articles/contemporary-realism-14th-international-virtual-arc-salon-exhibition",
    },
    {
      name: "CBS8",
      logo: cbs8Logo,
      url: "https://www.cbs8.com/video/entertainment/events/fashion-week-san-diego-2021/509-92b34b8d-eaa2-4d9b-bc9c-d4bf453bf29a",
    },
    {
      name: "Grazia",
      logo: graziaLogo,
      url: "https://grazia.ph/2024/09/14/bing-jie-showcases-bea-cruz-designs-at-fashion-week-san-diego/",
    },
    {
      name: "The Manila Times",
      logo: manilatimesLogo,
      url: "https://www.manilatimes.net/2020/12/26/weekly/the-lookbook/young-filipina-designer-bea-cruz-wins-top-awards-in-us-fashion-shows/817465",
    },
    {
      name: "BusinessMirror",
      logo: businessmirrorLogo,
      url: "https://businessmirror.com.ph/2020/10/27/young-filipina-named-top-designer-bags-back-to-back-awards-in-the-us/",
    },
    {
      name: "The Citizens' Ink",
      logo: citizeninkLogo,
      url: "https://thecitizensink.weebly.com/feature/turning-heads-weaving-pride",
    },
    {
      name: "BusinessWorld",
      logo: businessworldLogo,
      url: "https://www.bworldonline.com/arts-and-leisure/2021/05/03/365316/young-pinay-designer-teases-new-collection-in-fashion-week-san-diego-spring-showcase/",
    },
    {
      name: "Negros Season of Culture",
      logo: negrosLogo,
      url: "https://www.negrosseasonofculture.com/2022/09/bea-cruz.html",
    },
    {
      name: "The Diarist",
      logo: diaristLogo,
      url: "https://www.thediarist.ph/bea-cruz-so-young-so-lured-into-the-1920s/",
    },
  ];

  return (
    <section id="press" className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <div className="flex justify-between items-center">
          <h2 className="text-sm tracking-widest text-gray-900">PRESS</h2>
          <span className="text-sm text-gray-500">2020-2024</span>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling Track */}
        <div className="flex animate-scroll hover:[animation-play-state:paused]">
          {/* First set of logos */}
          {pressItems.map((item, index) => (
            <a
              key={`first-${index}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 px-8 md:px-12 transition-opacity duration-300
                         opacity-60 hover:opacity-100"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="h-10 md:h-14 w-auto object-contain"
              />
            </a>
          ))}
          {/* Duplicate set for seamless loop */}
          {pressItems.map((item, index) => (
            <a
              key={`second-${index}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 px-8 md:px-12 transition-opacity duration-300
                         opacity-60 hover:opacity-100"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="h-10 md:h-14 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressLogos;
