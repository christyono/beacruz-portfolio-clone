import selfPortrait from "../images/self_portrait.jpg";
import useScrollReveal from "../hooks/useScrollReveal";

const AboutSection = ({ zIndex = 1 }) => {
  const { sectionRef, backgroundRef } = useScrollReveal({
    parallaxSpeed: 0.2,
    isLast: true,
  });

  const socialLinks = [
    { label: "cv", href: "#cv" },
    { label: "linkedin", href: "https://www.linkedin.com/feed/" },
    { label: "instagram", href: "https://www.instagram.com/beacruzph/" },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen bg-neutral-800 overflow-hidden"
      style={{ zIndex }}
    >
      {/* Background with subtle texture */}
      <div
        ref={backgroundRef}
        className="curtain-bg absolute inset-0 bg-cover bg-center opacity-20 scale-110"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1920&q=80')`,
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-16 md:py-24 lg:py-32 text-white">
        <h2 className="text-xs tracking-[0.2em] mb-12 md:mb-16 text-white/70">
          ABOUT
        </h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-5 text-sm md:text-base leading-relaxed text-white/90">
            <p>
              <span className="font-medium text-white">Beatriz Cruz</span> is a
              Filipino artist, womenswear fashion designer and the creative
              force of self-owned fashion brand{" "}
              <span className="font-medium text-white">BÉACRUZ</span>.
            </p>
            <p>
              She started her brand from a thesis project which then gave her a
              step forward to the fashion scene, making her dreams into reality
              and achieved the{" "}
              <span className="font-medium text-white">Top Designer Award</span>{" "}
              at Fashion Week San Diego, and the{" "}
              <span className="font-medium text-white">
                Top Team Designer Award
              </span>{" "}
              for Fashion Week San Diego: Art & Beauty Behind Fashion exhibition
              in partnership with{" "}
              <em className="text-white/80">Sotheby's New York</em> hosted by{" "}
              <em className="text-white/80">The Art Renewal Center</em> in 2020,
              and was given the very first{" "}
              <span className="font-medium text-white">
                Fashion Week San Diego: Ashley Nell Tipton Special Award
              </span>{" "}
              the following year.
            </p>
            <p>
              Bea specializes in bridal design, made-to-measure evening wear and
              luxury ready-to-wear pieces with subtle sophistication, elegantly
              intricate detailing and hand-sewn embroideries.
            </p>
            <p>
              From conceptualization to design execution to garment
              construction, she pours passion into every stitch of every garment
              piece she creates, same goes to her artworks and in life, as both
              art and fashion are her prime storytelling medium, a realm where
              you get to hear her thoughts and where she gets to share her
              emotions to the world.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 pt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 text-sm border border-white/40 rounded-full
                           hover:bg-white hover:text-neutral-900 transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Portrait Image */}
          <div className="relative aspect-[3/4] max-w-sm mx-auto md:max-w-md lg:max-w-lg">
            <img
              src={selfPortrait}
              alt="Beatriz Cruz"
              className="w-full h-full object-cover"
            />
            <p className="absolute bottom-4 right-4 text-xs text-white/50">
              Photography by CJ Ecot
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutSection;
