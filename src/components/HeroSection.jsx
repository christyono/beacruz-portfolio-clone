import section1 from "../images/section_1.jpg";
import useScrollReveal from "../hooks/useScrollReveal";

const HeroSection = ({ zIndex = 10 }) => {
  const { sectionRef, backgroundRef } = useScrollReveal({
    parallaxSpeed: 0.3,
    isLast: false,
  });

  return (
    <section
      ref={sectionRef}
      className="curtain-section relative h-screen w-full overflow-hidden"
      style={{ zIndex }}
    >
      {/* Background Image with Curtain Reveal */}
      <div
        ref={backgroundRef}
        className="curtain-bg absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ backgroundImage: `url(${section1})` }}
      >
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2
                   w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm
                   flex items-center justify-center hover:bg-white/30 transition-all"
        aria-label="Scroll down"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </section>
  );
};

export default HeroSection;
