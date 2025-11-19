import React, { useState } from "react";
import { Github, ExternalLink, Calendar, Code2, ArrowRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import budgetMilesDemo from "../assets/files/Budget_Miles_demo.mp4";
import mavenCloudReport from "../assets/files/MavenCloudReport.pdf";

export const Projects = () => {
  const [selectedReport, setSelectedReport] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const projects = [
    {
      title: "Budget Miles",
      description:
        "A comprehensive fuel and expense tracking platform that helps users manage vehicle costs efficiently and transforms fuel spending into auditable, cost-optimized data with smart cost prediction for drivers. The companion B2B web portal gives corporate clients three-tiered hierarchical control over their network for real-time sales audit and dynamic price management.",
      tech: ["JavaScript", "Python", "Django Restframework", "SQLite", "Figma", "Git", "Render"],
      link: "https://github.com/lulenuru/budget-miles",
      github: "https://github.com/lulenuru/budget-miles",
      type: "Full Stack",
      highlights: [
        "Mobile-first design with React Native",
        "Three-tiered hierarchical access control system",
        "Real-time cost analytics dashboard",
        "Smart predictive cost modeling for drivers"
      ],
      year: "2025",
      hasDemo: true,
      demoVideo: budgetMilesDemo
    },
    {
      title: "Abii Clinic Data Analysis & Performance Reporting",
      description:
        "Monthly data analysis and performance reporting work conducted at Abii Clinic using the Clinic Masters system. Involves exporting patient and service data to Excel, cleaning and transforming datasets, and analyzing clinic performance metrics such as patient flow, service utilization, and revenue trends. The insights are summarized into comprehensive performance reports shared with management for strategic decision-making.",
      tech: ["MS Excel", "Power BI", "Clinic Masters", "Data Analysis", "Reporting", "ETL"],
      link: "https://github.com/lulenuru",
      github: "https://github.com/lulenuru",
      type: "Data Analytics",
      highlights: [
        "Automated data cleaning workflows",
        "Patient flow and service utilization metrics",
        "Revenue trend analysis and visualization",
        "Executive reporting dashboards for management"
      ],
      year: "2020-Present"
    },
    {
      title: "Maven Cloud Limited – Customer Experience Intelligence",
      description:
        "Maven Cloud Limited, a call service provider, aimed to leverage its existing records to uncover insights that could improve customer experience and operational performance. Using two weeks of call center data, performed comprehensive exploratory data analysis with Python to identify key factors affecting client satisfaction and predict future trends. The findings provided actionable insights to guide service improvements and increase profitability.",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "EDA"],
      link: mavenCloudReport,
      github: null,
      type: "Data Science",
      highlights: [
        "Statistical analysis of customer behavior patterns",
        "Predictive trend modeling for service optimization",
        "Data-driven recommendations for client satisfaction",
        "Visual storytelling with comprehensive charts"
      ],
      year: "2024",
      isReport: true
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center py-20 
                 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 
                 overflow-hidden"
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-2/3 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-100">
            Featured Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group relative bg-white/10 backdrop-blur-md border border-white/20 
                          rounded-xl overflow-hidden
                          hover:border-blue-500/50 transition-all duration-500
                          hover:shadow-blue-500/40 shadow-lg
                          flex flex-col"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 
                               group-hover:from-blue-500/10 group-hover:to-purple-500/10 
                               transition-all duration-500"></div>
              
              {/* Content */}
              <div className="relative p-6 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 
                                       text-blue-300 rounded text-xs font-medium">
                        {project.type}
                      </span>
                      <div className="flex items-center gap-1 text-gray-500 text-xs">
                        <Calendar className="h-3 w-3" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="mb-4">
                  <ul className="space-y-1.5">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                        <span className="text-blue-400 mt-0.5">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-slate-800/80 border border-slate-700/50
                                 text-gray-300 rounded text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 flex-wrap">
                  {project.isReport ? (
                    <button
                      onClick={() => setSelectedReport(project.link)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5
                                 bg-blue-600 hover:bg-blue-700 text-white rounded-lg
                                 font-medium text-sm transition-all duration-300
                                 hover:shadow-lg hover:shadow-blue-500/50 group/btn"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Report
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <>
                      {project.hasDemo && (
                        <button
                          onClick={() => setSelectedVideo(project.demoVideo)}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5
                                       bg-blue-600 hover:bg-blue-700
                                       text-white rounded-lg font-medium text-sm 
                                       transition-all duration-300
                                       hover:shadow-lg hover:shadow-blue-500/50 group/btn"
                        >
                          <Play className="h-4 w-4" />
                          Watch Demo
                        </button>
                      )}
                      {!project.hasDemo && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5
                                       bg-blue-600 hover:bg-blue-700 text-white rounded-lg
                                       font-medium text-sm transition-all duration-300
                                       hover:shadow-lg hover:shadow-blue-500/50 group/btn"
                        >
                          <ExternalLink className="h-4 w-4" />
                          View Project
                          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center px-4 py-2.5
                                       bg-slate-800 hover:bg-slate-700 border border-slate-700
                                       text-gray-300 rounded-lg transition-all duration-300
                                       hover:border-blue-500/50"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <a
              href="https://github.com/lulenuru"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 
                         bg-gradient-to-r from-blue-600 to-cyan-600
                         hover:from-blue-500 hover:to-cyan-500
                         text-white font-semibold rounded-xl 
                         transition-all duration-300 hover:scale-105 
                         shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
            >
              <Github className="h-5 w-5" />
              View All Projects
              <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <span className="text-gray-500 text-sm">
              More projects on GitHub
            </span>
          </div>
        </motion.div>
      </div>

      {/* PDF Modal with Viewer */}
      <AnimatePresence>
        {selectedReport && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedReport(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden 
                         w-full max-w-5xl h-[90vh] shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 border-b border-slate-700 bg-slate-800/50">
                <div>
                  <h3 className="font-bold text-xl text-white">Project Report</h3>
                  <p className="text-sm text-gray-400 mt-1">Customer Experience Intelligence Analysis</p>
                </div>
                <div className="flex gap-3">
                  <a
                    href={selectedReport}
                    download="MavenCloudReport.pdf"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white 
                              rounded-lg font-medium transition-colors duration-200
                              flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Download
                  </a>
                  <button
                    onClick={() => setSelectedReport(null)}
                    className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white 
                              rounded-lg font-medium transition-colors duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
              
              {/* Modal Content - CORRECTED IFRAME SRC */}
              <div className="flex-1 overflow-hidden bg-gray-100">
                <iframe
                  src={selectedReport} // <--- CORRECTED: Use the local asset path directly
                  className="w-full h-full"
                  frameBorder="0"
                  title="Report Viewer"
                  allow="fullscreen"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Demo Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden 
                         w-full max-w-5xl shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 border-b border-slate-700 bg-slate-800/50">
                <div>
                  <h3 className="font-bold text-xl text-white">Budget Miles Demo</h3>
                  <p className="text-sm text-gray-400 mt-1">Live application walkthrough</p>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white 
                            rounded-lg font-medium transition-colors duration-200"
                >
                  Close
                </button>
              </div>
              
              {/* Video Content */}
              <div className="bg-black p-4">
                <video
                  src={selectedVideo}
                  controls
                  autoPlay
                  className="w-full h-auto max-h-[70vh] rounded-lg"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;