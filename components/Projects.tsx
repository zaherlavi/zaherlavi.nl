import projects from "@/lib/projectsData";

interface Project {
  title: string;
  period: string;
  description: string;
}

const Projects: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className={"group p-8 rounded-lg border transition-all duration-300 bg-gradient-to-br from-purple-900/50 border-purple-500/50 hover:border-purple-400 hover:from-purple-900 to-purple-900/70 hover:shadow-lg"}
        >
          <h3
            className={"text-2xl font-semibold mb-3 transition-colors text-white group-hover:text-purple-300"}
          >
            {project.title}
          </h3>
          <p
            className={"text-base mb-3 text-purple-300/80"}
          >
            {project.period}
          </p>
          <p
            className={"text-lg transition-colors text-gray-400 group-hover:text-gray-300 leading-relaxed"}
          >
            {project.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
