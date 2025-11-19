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
              I am a versatile professional with a dual focus on Frontend Development and Data Analysis, driven by the goal of creating efficient and data-informed digital solutions.
            </p>
            <p className="text-lg leading-relaxed">
              I'm a Frontend Developer skilled in React and React Native for creating responsive UIs. My experience extends to utilizing Python/Django Restframework to integrate and support robust backends.
            </p>
            <p className="text-lg leading-relaxed">
              I leverage Python, Excel and Power BI to analyze complex data, translating findings into actionable insights that directly inform smarter application design and functionality.
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
