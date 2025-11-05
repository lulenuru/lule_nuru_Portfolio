import { Mail, Github, Linkedin } from "lucide-react";

export const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center py-20 
                 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 
                 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Optional: same animated glowing orbs as Home for consistency */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-100">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side text */}
          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              I'm a Frontend Developer and Data Analyst passionate about creating engaging, efficient, and data-informed digital experiences. I specialize in building mobile applications with React Native and web applications with React, focusing on clean design, smooth performance, and intuitive user interfaces.
            </p>
            <p className="text-lg leading-relaxed">
              While frontend is my core strength, I also work with Python and Django REST Framework to build and integrate supportive backends that power dynamic and scalable applications. My experience in data analysis — using tools like Python, SQL, and Excel — allows me to bring an analytical perspective to development, turning data into insights that drive smarter design and functionality.
            </p>
            <p className="text-lg leading-relaxed">
              I’m constantly exploring new technologies, UI/UX trends, and project management principles to strengthen my ability to lead and deliver successful projects from concept to deployment. When I’m not coding or analyzing data, I enjoy contributing to open-source projects and sharing knowledge with the developer community.
            </p>
          </div>

          {/* Right side facts */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-white">Quick Facts</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">▹</span>
                <span>Location: Kampala, Uganda</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">▹</span>
                <span>Experience: 1 year in web development and 5 years in data analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">▹</span>
                <span>Education: Advanced certificate in software engineering; Certificate in data science using Python; Bachelor of Science in Business Statistics</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">▹</span>
                <span>Interests: Data analysis, UI/UX Design, Project Management</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
