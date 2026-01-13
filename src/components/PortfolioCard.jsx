import useScrollReveal from "../hooks/useScrollReveal";

const PortfolioCard = ({ title, linkText, href, bgImage, zIndex = 1, isLast = false }) => {
  const { sectionRef, backgroundRef } = useScrollReveal({
    parallaxSpeed: 0.4,
    isLast,
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
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col md:flex-row items-end md:items-center justify-between p-6 md:px-12 lg:px-20 pb-20 md:pb-6">
        {/* Title */}
        <h2 className="text-white text-base md:text-lg lg:text-xl font-light max-w-lg whitespace-pre-line leading-relaxed">
          {title}
        </h2>

        {/* Link */}
        <a
          href={href}
          className="text-white text-sm flex items-center gap-2
                     hover:gap-3 transition-all duration-300 group mt-4 md:mt-0"
        >
          <span className="group-hover:opacity-100 opacity-70 transition-opacity">
            →
          </span>
          <span>{linkText}</span>
        </a>
      </div>

    </section>
  );
};

export default PortfolioCard;
