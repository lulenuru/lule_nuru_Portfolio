import { Mail, Github, Linkedin } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      emoji: '🧩',
      skills: [
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
      ]
    },
    {
      title: 'Dev Tools & Version Control',
      emoji: '🛠',
      skills: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
        { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
        { name: 'NPM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' }
      ]
    },
    {
      title: 'Design & Prototyping',
      emoji: '🎨',
      skills: [
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'Adobe Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
        { name: 'Miro', icon: 'https://img.icons8.com/color/96/miro.png' }
      ]
    },
    {
      title: 'Data & Analysis',
      emoji: '📊',
      skills: [
        { name: 'Excel', icon: 'https://img.icons8.com/color/96/microsoft-excel-2019--v1.png' },
        { name: 'Power BI', icon: 'https://img.icons8.com/color/96/power-bi.png' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }
      ]
    },
    {
      title: 'Documentation & Reporting',
      emoji: '📝',
      skills: [
        { name: 'MS Word', icon: 'https://img.icons8.com/color/96/ms-word.png' },
        { name: 'PowerPoint', icon: 'https://img.icons8.com/color/96/ms-powerpoint.png' },
        { name: 'Google Docs', icon: 'https://img.icons8.com/color/96/google-docs.png' }
      ]
    },
    {
      title: 'Project & Workflow Tools',
      emoji: '📋',
      skills: [
        { name: 'Trello', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg' },
        { name: 'Jira', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
        { name: 'Slack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg' },
        { name: 'Zoom', icon: 'https://img.icons8.com/color/96/zoom.png' }
      ]
    },
    {
      title: 'UML & System Design',
      emoji: '📐',
      skills: [
        { name: 'UML Diagrams', icon: 'https://img.icons8.com/ios-filled/100/flow-chart.png' },
        { name: 'ERD Diagrams', icon: 'https://img.icons8.com/ios-filled/100/data-configuration.png' },
        { name: 'System Design Basics', icon: 'https://img.icons8.com/ios-filled/100/services.png' }
      ]
    },
    {
      title: 'Testing & Debugging',
      emoji: '🔍',
      skills: [
        { name: 'Unit Testing', icon: 'https://img.icons8.com/ios-filled/100/test-passed.png' },
        { name: 'Debugging', icon: 'https://img.icons8.com/ios-filled/100/bug.png' }
      ]
    }
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center py-20 
                 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 
                 overflow-hidden"
    >
      {/* Animated glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100">
            Skills & Technologies
          </h2>
        </div>

        {/* Grid: 4 category cards per row */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 
                         backdrop-blur-xl border border-white/10 
                         p-6 rounded-2xl shadow-2xl
                         hover:shadow-blue-500/20 hover:border-blue-500/30
                         transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">{category.emoji}</div>
                <h3 className="text-lg font-bold text-transparent bg-clip-text 
                               bg-gradient-to-r from-blue-400 to-cyan-400">
                  {category.title}
                </h3>
              </div>

              {/* Skill items */}
              <div className="grid grid-cols-4 gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <div 
                    key={skillIdx} 
                    className="flex flex-col items-center gap-2 p-2.5
                               hover:bg-white/10 rounded-xl transition-all 
                               cursor-pointer transform hover:-translate-y-1"
                  >
                    {/* Uniform rounded square container */}
                    <div className="relative w-11 h-11 flex items-center justify-center 
                                    bg-white/10 rounded-lg shadow-sm overflow-hidden">
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        className="w-6 h-6 object-contain"
                      />
                    </div>

                    <span className="text-[9px] text-gray-300 text-center font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
