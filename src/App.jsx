import React from 'react';

export default function App() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* 1. Header / Navbar */}
      <header className="flex justify-between items-center px-8 py-6 max-w-6xl mx-auto border-b border-slate-800">
        <h1 className="text-xl font-bold tracking-wider text-indigo-400">PORTFOLIO</h1>
        <nav className="space-x-6 text-sm font-medium hidden md:block">
          <a href="#about" className="hover:text-indigo-400 transition">About</a>
          <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
          <a href="#skills" className="hover:text-indigo-400 transition">Skills</a>
          <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
        </nav>
      </header>

      {/* 2. Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-4 max-w-4xl mx-auto">
        <span className="bg-indigo-500/10 text-indigo-400 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-indigo-500/20">
          Software Engineering Undergraduate @ CINEC Campus
        </span>
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Hi, I'm <span className="text-indigo-500">Manuja Rasangi Kulasekara</span>
        </h2>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          I build scalable web applications, write clean code, and turn complex problems into simple, beautiful digital solutions.
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-medium shadow-lg shadow-indigo-600/20 transition">
            View My Work
          </a>
          <a href="#contact" className="border border-slate-700 hover:border-slate-500 px-6 py-3 rounded-lg font-medium transition">
            Get in Touch
          </a>
        </div>
      </section>

      {/* 3. Projects Section */}
      <section id="projects" className="py-20 px-8 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-10 border-l-4 border-indigo-500 pl-4">Featured Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Project Card 1 */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-indigo-500/50 transition">
            <h4 className="text-xl font-semibold mb-2">E-Commerce Web Application</h4>
            <p className="text-slate-400 text-sm mb-4">
              A full-stack e-commerce platform built with React, Node.js, and MongoDB featuring user authentication and cart management.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-slate-800 text-indigo-300 text-xs px-2.5 py-1 rounded">React</span>
              <span className="bg-slate-800 text-indigo-300 text-xs px-2.5 py-1 rounded">Node.js</span>
              <span className="bg-slate-800 text-indigo-300 text-xs px-2.5 py-1 rounded">MongoDB</span>
            </div>
            <div className="flex gap-4 text-sm font-medium">
              <a href="https://github.com/manujakulasekara" className="text-indigo-400 hover:underline">GitHub Code &rarr;</a>
              <a href="#" className="text-indigo-400 hover:underline">Live Demo &rarr;</a>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-indigo-500/50 transition">
            <h4 className="text-xl font-semibold mb-2">Campus Management System</h4>
            <p className="text-slate-400 text-sm mb-4">
              A desktop/web application to manage student records, courses, and timetables efficiently using Java and MySQL.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-slate-800 text-indigo-300 text-xs px-2.5 py-1 rounded">Java</span>
              <span className="bg-slate-800 text-indigo-300 text-xs px-2.5 py-1 rounded">Spring Boot</span>
              <span className="bg-slate-800 text-indigo-300 text-xs px-2.5 py-1 rounded">MySQL</span>
            </div>
            <div className="flex gap-4 text-sm font-medium">
              <a href="#" className="text-indigo-400 hover:underline">GitHub Code &rarr;</a>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Skills Section */}
      <section id="skills" className="py-20 px-8 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-10 border-l-4 border-indigo-500 pl-4">Skills & Technologies</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg font-medium">Java / Python</div>
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg font-medium">React.js</div>
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg font-medium">Node.js / Express</div>
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg font-medium">MySQL / MongoDB</div>
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg font-medium">Git & GitHub</div>
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg font-medium">Tailwind CSS</div>
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg font-medium">REST APIs</div>
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg font-medium">Postman</div>
        </div>
      </section>

      {/* 5. Contact Section */}
      <section id="contact" className="py-20 px-8 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
        <p className="text-slate-400 mb-8">I'm currently looking for internship opportunities and exciting projects. Feel free to reach out!</p>
        <a href="mailto:your.email@example.com" className="inline-block bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-lg font-medium transition shadow-lg shadow-indigo-600/20">
          Say Hello / Email Me
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-xs text-slate-500 border-t border-slate-900">
        © {new Date().getFullYear()} Your Name. Built with React & Tailwind CSS.
      </footer>

    </div>
  );
}
