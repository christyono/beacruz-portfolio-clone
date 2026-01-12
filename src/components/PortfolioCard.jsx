import useParallax from "../hooks/useParallax";

const PortfolioCard = ({ title, linkText, href, bgImage }) => {
  const { ref, style } = useParallax(0.4);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 transition-all duration-700"
        style={{
          backgroundImage: `url('${bgImage}')`,
          ...style,
        }}
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

      {/* Fixed Logo (Desktop) */}
      <div className="hidden md:block absolute top-6 right-6 lg:right-12 lg:top-8">
        <span className="text-white text-5xl lg:text-7xl xl:text-8xl font-serif tracking-tight">
          <span className="text-mint">/</span>beacruz
        </span>
      </div>
    </section>
  );
};

export default PortfolioCard;
