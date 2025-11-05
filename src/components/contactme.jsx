import React, { useState } from 'react';
import { Mail, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! In production, integrate with EmailJS or Formspree.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center py-20 
                 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 
                 overflow-hidden"
    >
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        {/* Glowing light orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-100">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div
            className="bg-white/10 backdrop-blur-md border border-white/20 
                       p-6 rounded-lg shadow-lg hover:shadow-blue-500/30 
                       transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Let's Connect</h3>
            <p className="text-lg text-gray-200 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:lulenuru21@gmail.com"
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="h-6 w-6 mr-3" />
                lulenuru21@gmail.com
              </a>
              <a
                href="https://github.com/lulenuru"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Github className="h-6 w-6 mr-3" />
                github.com/lulenuru
              </a>
              <a
                href="https://linkedin.com/in/lule-nuru-956b77303"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-6 w-6 mr-3" />
                linkedin.com/in/lulenuru
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div
            className="bg-white/10 backdrop-blur-md border border-white/20 
                       p-6 rounded-lg shadow-lg hover:shadow-blue-500/30 
                       transition-all duration-300"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/5 border border-white/20 
                             rounded-lg text-gray-100 placeholder-gray-400 
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/5 border border-white/20 
                             rounded-lg text-gray-100 placeholder-gray-400 
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 bg-white/5 border border-white/20 
                             rounded-lg text-gray-100 placeholder-gray-400 
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                             outline-none resize-none"
                  placeholder="Write your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg 
                           hover:bg-blue-700 transition-all duration-300 
                           font-semibold shadow-md hover:shadow-blue-500/30"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
