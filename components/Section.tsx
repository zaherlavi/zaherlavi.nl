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
    className={`min-h-screen w-full py-24 px-4 relative bg-background-light dark:bg-background-dark ${className}`}
  >
    <div className="absolute inset-0 bg-background-light dark:bg-background-dark" />
    <div className="relative z-10">
      {showLine && (
        <div className="absolute -top-px left-[10%] right-[10%] h-[2px] overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-primary-dark/50 dark:via-purple-500/50 to-transparent animate-shimmer" />
        </div>
      )}
      <div className="max-w-6xl mx-auto pt-8">
        {title && (
          <h2 className="font-serif text-4xl mb-12 text-center bg-gradient-to-r from-primary-dark dark:from-white to-primary-light dark:to-purple-500 text-transparent bg-clip-text">
            {title}
          </h2>
        )}
        {children}
      </div>
    </div>
  </section>
);

export default Section;
