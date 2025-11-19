import { useState } from 'react';
import { Mail, Github, Linkedin, ArrowRight, Download, MapPin } from "lucide-react";
import nuruprofpic from '../assets/images/nuru1.jpg';
import myResume from '../assets/files/LuleNuruResume.pdf';

export const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 max-w-2xl">

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Open to opportunities
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-gray-400">Hi, I'm</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                  Lule Nuru
                </span>
              </h1>

              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded"></div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-400">
                  Frontend Developer / Data Analyst
                </h2>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-xl text-gray-400">
              React Enthusiast | UI/UX Passionate | Data-Driven | Project Management
            </p>

            {/* Description */}
            <p className="text-lg text-gray-400 leading-relaxed">
              I build beautiful, responsive, and user-friendly mobile and web applications using modern technologies. Transforming ideas and data into elegant digital experiences.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3">
              <span className="text-gray-400 text-sm">Tech Stack:</span>
              {['Python', 'JavaScript', 'CSS', 'RDBM', 'EDA'].map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-sm hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">

              {/* Resume button */}
              <a
                href={myResume}
                download="LuleNuruResume.pdf"
                className="group relative px-10 py-5 bg-blue-600 text-white font-semibold text-lg rounded-xl overflow-hidden 
                           transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 flex 
                           items-center justify-center gap-3"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Resume
                  <Download className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                </span>

                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 
                                group-hover:opacity-100 transition-opacity"></div>
              </a>

              {/* View My Work */}
              <a
                href="#projects"
                className="group px-8 py-4 border-2 border-blue-500/50 text-blue-400 font-semibold rounded-xl hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View My Work
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Let's Talk */}
              <a
                href="#contact"
                className="group px-8 py-4 border-2 border-blue-500/50 text-blue-400 font-semibold rounded-xl hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Let's Talk
                <Mail className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              </a>

            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start items-center gap-4 pt-2">
              <span className="text-gray-400 text-sm">Connect:</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/lulenuru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-white/5 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg transition-all duration-300 hover:scale-110 border border-white/10 hover:border-blue-500"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/lulenuru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-white/5 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg transition-all duration-300 hover:scale-110 border border-white/10 hover:border-blue-500"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 lg:flex-1 flex justify-center lg:justify-end">
            <div className="relative group">

              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full opacity-75 blur-2xl group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>

              <div className="relative">
                
                {/* Profile Picture Container */}
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm">
                  <img
                    src={nuruprofpic}
                    alt="Lule Nuru - Frontend Developer / Data Analyst"
                    className={`w-full h-full object-cover object-[center_20%] transition-all duration-700 ${
                      imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                  />

                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600/30 rounded-full blur-xl animate-ping"></div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-indigo-600/30 rounded-full blur-xl animate-pulse"></div>

                {/* Location Badge */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-xl">
                  <div className="flex items-center gap-2 text-white">
                    <MapPin className="h-4 w-4 text-blue-400" />
                    <span className="text-sm font-medium">Kampala, Uganda</span>
                  </div>
                </div>
              </div>

              {/* Orbiting dots */}
              <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-500 rounded-full animate-ping opacity-75"></div>
                <div className="absolute bottom-0 right-1/4 w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                <div className="absolute top-1/4 right-0 w-2 h-2 bg-purple-500 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
              <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse"></div>
            </div>
            <p className="text-white/50 text-xs mt-2 text-center">Scroll</p>
          </div>
        </div>

      </div>
    </section>
  );
};
