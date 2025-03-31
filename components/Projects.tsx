import { useTheme } from "@/components/ThemeProvider";
import projects from "@/lib/projectsData";

interface Project {
  title: string;
  period: string;
  description: string;
}

const Projects: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`group p-6 rounded-lg border transition-all duration-300 ${
            theme === "dark"
              ? "bg-gradient-to-br from-purple-900/50 to-black border-purple-500/50 hover:border-purple-400 hover:from-purple-900"
              : "bg-white/90 border-purple-200 hover:border-purple-300 hover:bg-white"
          }`}
        >
          <h3
            className={`text-xl font-semibold mb-2 transition-colors ${
              theme === "dark"
                ? "text-white group-hover:text-purple-300"
                : "text-gray-800 group-hover:text-purple-600"
            }`}
          >
            {project.title}
          </h3>
          <p
            className={`text-sm mb-2 ${
              theme === "dark" ? "text-purple-300/80" : "text-purple-600"
            }`}
          >
            {project.period}
          </p>
          <p
            className={`transition-colors ${
              theme === "dark"
                ? "text-gray-400 group-hover:text-gray-300"
                : "text-gray-600 group-hover:text-gray-700"
            }`}
          >
            {project.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
