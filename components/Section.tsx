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
    className={`min-h-screen w-full py-24 px-4 relative ${className}`}
  >
    {showLine && (
      <div className="absolute -top-px left-[10%] right-[10%] h-[2px] overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-shimmer" />
      </div>
    )}
    <div className="max-w-6xl mx-auto">
      {title && (
        <h2 className="font-serif text-4xl mb-12 text-center bg-gradient-to-r from-white to-purple-500 text-transparent bg-clip-text">
          {title}
        </h2>
      )}
      {children}
    </div>
  </section>
);

export default Section;
