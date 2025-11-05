import { Mail, Github, Linkedin } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'Next.js']
    },
    {
      title: 'Tools & Others',
      skills: ['Git & GitHub', 'Vite', 'npm/yarn', 'Responsive Design', 'REST APIs', 'Figma', 'VS Code']
    },
    {
      title: 'Currently Learning',
      skills: ['TypeScript', 'Three.js', 'GraphQL', 'Testing (Jest/Vitest)']
    }
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center py-20 
                 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 
                 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern (optional, for subtle texture) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        {/* Glowing orbs for ambiance */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-100">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md border border-white/20 
                         p-6 rounded-lg shadow-lg hover:shadow-blue-500/30 
                         transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 
                               text-blue-200 rounded-full text-sm hover:bg-blue-500/20 
                               transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
