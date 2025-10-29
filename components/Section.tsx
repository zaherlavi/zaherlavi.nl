interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  showLine?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  className = "",
  children,
  title,
  showLine = true,
}) => (
  <section
    id={id}
    className={`min-h-screen w-full py-20 px-4 relative ${className}`}
  >
    <div className="relative z-10">
      {showLine && (
        <div className="absolute top-0 left-[10%] right-[10%] h-[2px] overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-primary-dark/50 dark:via-purple-500/50 to-transparent animate-shimmer" />
        </div>
      )}
      <div className="max-w-6xl mx-auto pt-20">
        {title && (
          <h2 className="font-serif text-5xl md:text-6xl mb-16 text-center bg-gradient-to-r from-primary-dark dark:from-white to-primary-light dark:to-purple-500 text-transparent bg-clip-text">
            {title}
          </h2>
        )}
        {children}
      </div>
    </div>
  </section>
);

export default Section;
