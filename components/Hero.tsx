import ProfileImage from "./ProfileImage";
import ScrollIndicator from "./ScrollIndicator";

const Hero = () => {
  return (
    <section className="relative min-h-screen">
      {/* Main Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden pb-24 sm:pb-0">
        <div className="container mx-auto px-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 order-2 lg:order-1">
              <div>
                <h2 className="text-primary-dark dark:text-purple-400 text-lg font-medium mb-2">
                  Welcome to my portfolio
                </h2>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-primary-dark dark:from-white to-primary-light dark:to-purple-500 text-transparent bg-clip-text animate-text-shimmer bg-[length:200%_100%]">
                    I'm Zaher Lavi
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
                  Crafting digital experiences through code
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl">
                A software engineer passionate about creating innovative
                solutions and exploring new technologies. Based in The
                Netherlands, I'm always eager to take on new challenges and
                learn from every experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-primary-light dark:bg-purple-600 hover:bg-primary-dark dark:hover:bg-purple-700 transition-colors rounded-lg text-white font-medium text-center"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-primary-light dark:border-purple-500 hover:border-primary-dark dark:hover:border-purple-400 rounded-lg text-text-light dark:text-white font-medium text-center"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="order-1 lg:order-2">
              <ProfileImage />
            </div>
          </div>
        </div>

        {/* Adjusted position of ScrollIndicator */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
          <ScrollIndicator />
        </div>

        {/* Decorative background elements */}
        <div className="absolute -z-10 top-1/4 right-0 w-96 h-96 bg-primary-light/10 dark:bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute -z-10 bottom-1/4 left-0 w-96 h-96 bg-primary-light/10 dark:bg-purple-500/10 rounded-full blur-3xl" />
      </section>

      {/* Social Links Section */}
      <section className="w-full backdrop-blur-sm relative">
        {/* Add animated line */}
        <div className="absolute -top-px left-[10%] right-[10%] h-[2px] overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-primary-light dark:via-purple-500/50 to-transparent animate-shimmer" />
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-primary-dark dark:text-purple-400 font-medium text-lg">
              Connect With Me on Social Media
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                {
                  href: "https://github.com/zaherlavi",
                  icon: "/githubIcon.svg",
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/zaher-lavi-a85a70172/",
                  icon: "/linkedinIcon.svg",
                  label: "LinkedIn",
                },
                {
                  href: "https://twitter.com/NULL____pointer",
                  icon: "/xIcon.svg",
                  label: "X",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-light/20 dark:bg-purple-600/30 group-hover:bg-primary-dark/30 dark:group-hover:bg-purple-900/50 transition-colors">
                    <img
                      src={social.icon}
                      alt={social.label}
                      className="w-6 h-6"
                    />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-primary-dark dark:group-hover:text-purple-400 transition-colors">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
