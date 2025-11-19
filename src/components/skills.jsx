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
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
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
        // { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
        { name: 'NPM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
        // { name: 'Yarn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg' },
      ]
    },
    {
      title: 'Design & Prototyping',
      emoji: '🎨',
      skills: [
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'Adobe Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
        // { name: 'Adobe Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
        // { name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
        { name: 'Miro', icon: 'https://img.icons8.com/color/96/miro.png' },
      ]
    },
    {
      title: 'Data & Analysis',
      emoji: '📊',
      skills: [
        { name: 'Excel', icon: 'https://img.icons8.com/color/96/microsoft-excel-2019--v1.png' },
        { name: 'Power BI', icon: 'https://img.icons8.com/color/96/power-bi.png' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        // { name: 'Power Query', icon: 'https://img.icons8.com/color/96/microsoft-excel-2019--v1.png' },
      ]
    },
    {
      title: 'Documentation & Reporting',
      emoji: '📝',
      skills: [
        { name: 'MS Word', icon: 'https://img.icons8.com/color/96/ms-word.png' },
        { name: 'PowerPoint', icon: 'https://img.icons8.com/color/96/ms-powerpoint.png' },
        // { name: 'Notion', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg' },
        // { name: 'Markdown', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg' },
        { name: 'Google Docs', icon: 'https://img.icons8.com/color/96/google-docs.png' },
      ]
    },
    {
      title: 'Project & Workflow Tools',
      emoji: '📋',
      skills: [
        { name: 'Trello', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg' },
        { name: 'Jira', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
        { name: 'Slack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg' },
        { name: 'Zoom', icon: 'https://img.icons8.com/color/96/zoom.png' },
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
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-cyan-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Modern header with gradient text */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-100">
            Skills & Technologies
          </h2>
         
        </div>
        
        {/* Skills grid with modern cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 
                         backdrop-blur-xl border border-white/10 
                         p-6 rounded-2xl shadow-2xl
                         hover:shadow-blue-500/20 hover:border-blue-500/30
                         transition-all duration-500 hover:scale-[1.02]
                         overflow-hidden"
            >
              {/* Card gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 
                            group-hover:from-blue-600/5 group-hover:to-purple-600/5 
                            transition-all duration-500 rounded-2xl"></div>
              
              {/* Content */}
              <div className="relative">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                    {category.emoji}
                  </div>
                  <h3 className="text-lg font-bold text-transparent bg-clip-text 
                               bg-gradient-to-r from-blue-400 to-cyan-400">
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills grid */}
                <div className="grid grid-cols-4 gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <div 
                      key={skillIdx} 
                      className="flex flex-col items-center gap-2 p-2.5 
                                 hover:bg-white/10 rounded-xl transition-all 
                                 duration-300 group/skill cursor-pointer
                                 transform hover:-translate-y-1"
                    >
                      {/* Icon container with glow effect */}
                      <div className="relative w-11 h-11 flex items-center justify-center 
                                    bg-gradient-to-br from-white/10 to-white/5 
                                    rounded-xl group-hover/skill:from-blue-500/20 
                                    group-hover/skill:to-purple-500/20
                                    transition-all duration-300 group-hover/skill:scale-110
                                    shadow-lg group-hover/skill:shadow-blue-500/50">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-blue-500/0 group-hover/skill:bg-blue-500/20 
                                      rounded-xl blur-md transition-all duration-300"></div>
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="relative w-7 h-7 object-contain z-10"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                      {/* Skill name */}
                      <span className="text-[9px] text-gray-300 text-center font-medium 
                                     leading-tight group-hover/skill:text-blue-300 
                                     transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }
      `}</style>
    </section>
  );
};