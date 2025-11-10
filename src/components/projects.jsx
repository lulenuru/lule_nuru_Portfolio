import { Github, ArrowRight } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Budget Miles",
      description:
        "A fuel and expense tracking app that helps users manage vehicle costs efficiently and transforms fuel spending into auditable, cost-optimized data and smart cost prediction for drivers. The companion B2B web portal gives corporate clients three-tiered hierarchical control over their network for real-time sales audit and dynamic price management. Backend built in Django and frontend with React Native.",
      tech: ["React Native", "React", "Django", "SQLite", "Axios"],
      link: "https://github.com/lulenuru/budget-miles",
    },
    {
      title: "Abii Clinic Data Analysis & Performance Reporting",
      description:
        "Monthly data analysis work conducted at Abii Clinic using the Clinic Masters system. I export patient and service data to Excel, clean and transform datasets, and analyze clinic performance metrics such as patient flow, service utilization, and revenue trends. The insights are summarized into performance reports shared with management for decision-making.",
      tech: ["Excel", "Clinic Masters", "Data Analysis", "Reporting"],
      link: "https://github.com/lulenuru",
    },
    {
      title: "Maven Cloud Limited – Customer Experience Data Analysis",
      description:
        "Maven Cloud Limited, a call service provider, aimed to leverage its existing records to uncover insights that could improve customer experience and operational performance. Using two weeks of call data, I performed exploratory data analysis with Python to identify key factors affecting client satisfaction and predict future trends. The findings provided actionable insights to guide service improvements and increase profitability.",
      tech: ["Python", "Excel", "Pandas", "Data Visualization", "EDA"],
      link: "https://github.com/lulenuru/lule_nuru_Portfolio/raw/main/lule%20nuru.pptx.pdf", // changed to raw link
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center py-20 
                 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 
                 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-100">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md border border-white/20 
                         p-6 rounded-xl shadow-lg hover:shadow-blue-500/40 
                         transition-all duration-500 group"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 
                               text-blue-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* If this is the Maven Cloud project, show embedded PDF */}
              {project.title.includes("Maven Cloud") ? (
                <div className="w-full h-[400px] rounded-lg overflow-hidden border border-blue-500/20 mb-4">
                  <iframe
                    src={project.link}
                    title="Maven Cloud Report"
                    className="w-full h-full border-none rounded-lg"
                  />
                </div>
              ) : null}

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 
                           font-medium transition-all duration-300 group-hover:translate-x-1"
              >
                {project.title.includes("Maven Cloud") ? "Open Full Report" : "View Project"}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/lulenuru"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 
                       text-white font-semibold rounded-xl hover:bg-blue-700 
                       transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Github className="h-5 w-5" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
