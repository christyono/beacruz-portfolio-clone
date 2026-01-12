import section1 from "../images/section_1.png";
import useParallax from "../hooks/useParallax";

const HeroSection = () => {
  const { ref, style } = useParallax(0.3);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage: `url(${section1})`,
          ...style,
        }}
      >
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Mobile Logo */}
      <div className="md:hidden absolute bottom-20 left-0 right-0 text-center">
        <span className="text-white text-4xl font-serif tracking-tight">
          <span className="text-mint">/</span>beacruz
        </span>
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
