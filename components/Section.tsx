interface SectionProps {
    id: string;
    className?: string;
    children: React.ReactNode;
    title?: string;
  }
  
  const Section: React.FC<SectionProps> = ({ id, className = "", children, title }) => (
    <section 
      id={id} 
      className={`min-h-screen w-full py-24 px-4 ${className}`}
    >
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