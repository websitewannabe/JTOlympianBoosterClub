import { useEffect } from "react";
import { Helmet } from "react-helmet";
import heroImage from "../assets/home_hero.webp";

const SiteCredits = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: "fas fa-code",
      title: "Web Design & Development",
      description:
        "Custom-built responsive website with modern design, optimized performance, and seamless user experience.",
    },
    {
      icon: "fas fa-search",
      title: "SEO & Analytics",
      description:
        "Search engine optimization, structured data, and analytics integration to boost online visibility.",
    },
    {
      icon: "fas fa-robot",
      title: "AI Integration",
      description:
        "Intelligent chatbot assistant powered by AI to help visitors find information quickly.",
    },
    {
      icon: "fas fa-universal-access",
      title: "Accessibility",
      description:
        "WCAG 2.1 AA compliance with EqualWeb integration ensuring the site is usable by everyone.",
    },
  ];

  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href="https://olympianboosterclub.com/site-credits"
        />
        <title>Site Credits | Olympian Booster Club</title>
        <meta
          name="description"
          content="Website credits for the Olympian Booster Club site. Built by Website Wannabe with web design, SEO, AI, and accessibility services."
        />
        <meta
          name="keywords"
          content="site credits, website credits, web design, Website Wannabe, Olympian Booster Club"
        />

        <meta property="og:title" content="Site Credits | Olympian Booster Club" />
        <meta
          property="og:description"
          content="Website credits for the Olympian Booster Club site."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://olympianboosterclub.com/site-credits"
        />
        <meta
          property="og:image"
          content="https://olympianboosterclub.com/og-home.png"
        />
        <meta property="og:site_name" content="Olympian Booster Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Site Credits | Olympian Booster Club"
        />
        <meta
          name="twitter:description"
          content="Website credits for the Olympian Booster Club site."
        />
        <meta
          name="twitter:image"
          content="https://olympianboosterclub.com/og-home.png"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Site Credits",
            description:
              "Website credits for the Olympian Booster Club site.",
            url: "https://olympianboosterclub.com/site-credits",
            isPartOf: {
              "@type": "WebSite",
              name: "Olympian Booster Club",
              url: "https://olympianboosterclub.com",
            },
          })}
        </script>
      </Helmet>

      {/* Hero Banner */}
      <section className="relative h-[280px] md:h-[340px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0039A6]/80 to-[#002A78]/90" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-3">
            Site Credits
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            The team behind this website
          </p>
        </div>
      </section>

      {/* Built By Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-screen-lg text-center">
          <h2 className="font-montserrat font-bold text-3xl text-[#0039A6] mb-6">
            Built By
          </h2>
          <div className="bg-gray-50 rounded-xl p-8 md:p-12 shadow-md max-w-2xl mx-auto">
            <a
              href="https://websitewannabe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <span className="font-montserrat font-bold text-2xl md:text-3xl text-[#0039A6] hover:text-[#FF4444] transition-colors">
                Website Wannabe
              </span>
            </a>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
              Website Wannabe is a full-service web design and digital solutions
              agency specializing in creating modern, accessible, and
              high-performing websites for businesses and organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <h2 className="font-montserrat font-bold text-3xl text-[#0039A6] mb-10 text-center">
            Services Provided
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-[#0039A6]/10 rounded-lg flex items-center justify-center mb-4">
                  <i
                    className={`${service.icon} text-[#0039A6] text-xl`}
                  />
                </div>
                <h3 className="font-montserrat font-bold text-lg text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0039A6]">
        <div className="container mx-auto px-4 max-w-screen-lg text-center text-white">
          <h2 className="font-montserrat font-bold text-3xl mb-4">
            Want a Website Like This?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Website Wannabe builds custom websites for businesses, nonprofits,
            and organizations. Get a modern, fast, and accessible website for
            your team.
          </p>
          <a
            href="https://websitewannabe.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FFD700] text-[#0039A6] font-montserrat font-bold px-8 py-3 rounded-md hover:bg-[#FFC000] transition-colors text-lg"
          >
            Visit Website Wannabe
          </a>
        </div>
      </section>
    </>
  );
};

export default SiteCredits;
