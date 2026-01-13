import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PortfolioCard from "./components/PortfolioCard";
import AboutSection from "./components/AboutSection";
import PressLogos from "./components/PressLogos";
import Footer from "./components/Footer";

import section1 from "./images/section_1.jpg";
import section2 from "./images/section-2.jpg";
import section3 from "./images/section-3.jpg";
import section4 from "./images/section-4.jpg";
import section5 from "./images/section-5.jpg";
import section6 from "./images/section-6.jpg";
import section7 from "./images/section-7.jpg";

const portfolioItems = [
  {
    id: 1,
    title:
      "FWSD: Art and Beauty Behind Fashion exhibition,\\nSotheby's New York + Art Renewal Center (2020-2021)",
    linkText: "see exhibition",
    href: "#exhibition",
    bgImage: section2,
  },
  {
    id: 2,
    title: "Client and Special Projects #wearBCPH",
    linkText: "see works",
    href: "#projects",
    bgImage: section3,
  },
  {
    id: 3,
    title: "3D Fashion and Jewelry",
    linkText: "see works",
    href: "#3d",
    bgImage: section4,
  },
  {
    id: 4,
    title: "Artworks & Fashion Illustrations",
    linkText: "see works",
    href: "#artworks",
    bgImage: section5,
  },
  {
    id: 5,
    title: "Special Collection",
    linkText: "see works",
    href: "#special",
    bgImage: section6,
  },
  {
    id: 6,
    title: "Latest Works",
    linkText: "see works",
    href: "#latest",
    bgImage: section7,
  },
];

function App() {
  // Calculate z-index values for curtain stacking effect
  // Higher z-index = on top, gets revealed first
  const curtainSections = portfolioItems.length + 1; // hero + portfolio cards (not about - it's relative)
  // Total scroll height needed: each curtain section needs 100vh of scroll
  const scrollHeight = curtainSections * 100; // in vh units

  return (
    <div className="relative">
      <Header />

      {/* Scroll spacer - creates scrollable area for fixed sections */}
      <div style={{ height: `${scrollHeight}vh` }} aria-hidden="true" />

      {/* Hero gets highest z-index - revealed first */}
      <HeroSection zIndex={curtainSections} />

      {/* Portfolio cards get descending z-index */}
      {portfolioItems.map((item, index) => (
        <PortfolioCard
          key={item.id}
          {...item}
          zIndex={curtainSections - 1 - index}
          isLast={false}
        />
      ))}

      {/* About, Press, Footer - normal scrolling sections after curtain effect */}
      <div className="relative" style={{ zIndex: curtainSections + 10 }}>
        <AboutSection zIndex={1} />
        <PressLogos />
        <Footer />
      </div>
    </div>
  );
}

export default App;
