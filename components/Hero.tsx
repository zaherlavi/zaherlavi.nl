import ProfileImage from "./ProfileImage";

const Hero = () => {
  return (
    <div>
      {/* Main Hero Section */}
      <section className="h-screen flex items-center relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-purple-400 text-lg font-medium mb-2">
                  Welcome to my portfolio
                </h2>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-white to-purple-500 text-transparent bg-clip-text">
                    Hi, I'm Zaher Lavi
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300">
                  Crafting digital experiences through code
                </p>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                A Computer Science student passionate about creating innovative
                solutions and exploring new technologies. Based in The
                Netherlands, I'm always eager to take on new challenges and
                learn from every experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 transition-colors rounded-lg text-white font-medium text-center"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-purple-500 hover:border-purple-400 rounded-lg text-white font-medium text-center"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <ProfileImage />
          </div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute -z-10 top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute -z-10 bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </section>

      {/* Social Links Section with animated line */}
      <section className="w-full backdrop-blur-sm bg-black/50 relative">
        {/* Add animated line */}
        <div className="absolute -top-px left-[10%] right-[10%] h-[2px] overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-shimmer" />
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-purple-400 font-medium text-lg">
              Connect With Me
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
                  href: "https://www.instagram.com/zaher.lavi/",
                  icon: "/instagramIcon.svg",
                  label: "Instagram",
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
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-900/30 group-hover:bg-purple-900/50 transition-colors">
                    <img
                      src={social.icon}
                      alt={social.label}
                      className="w-6 h-6"
                    />
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-purple-400 transition-colors">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
