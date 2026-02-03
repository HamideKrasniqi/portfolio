import React, { useState, useEffect } from 'react';
import {
  Github, Linkedin, Mail, User, Code, Send,
  ExternalLink, Terminal, Sparkles, Cpu, Menu,
  X, GraduationCap, Award, BookOpen, FileText, Download
} from 'lucide-react';
import cv from './assets/CV-HamideKrasniqi.pdf'
const App = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-300 selection:bg-emerald-500/30 overflow-x-hidden">

      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-emerald-800 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 brightness-100"></div>
      </div>

      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 hidden lg:block"
        style={{
          background: `radial-gradient(800px at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.05), transparent 80%)`
        }}
      />

      <div className="lg:hidden fixed top-0 left-0 w-full p-6 bg-[#020617]/90 backdrop-blur-md z-[60] flex justify-between items-center border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="bg-emerald-500 p-1.5 rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.4)]">
            <Cpu className="text-white" size={18} />
          </div>
          <span className="font-black text-white uppercase tracking-widest text-sm">Hamide.K</span>
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2 hover:bg-white/5 rounded-lg transition-colors">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <aside className={`
        fixed z-[55] transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1)
        lg:left-8 lg:top-8 lg:bottom-8 lg:w-72 lg:bg-white/[0.01] lg:border lg:border-white/10 lg:backdrop-blur-3xl lg:rounded-[3rem] lg:flex lg:shadow-2xl
        ${isMenuOpen ? 'left-0 top-0 w-full h-full bg-[#020617] p-12 flex translate-x-0' : 'left-[-100%] lg:translate-x-0'}
        flex-col justify-between p-10
      `}>
        <div className="mt-20 lg:mt-0">
          <div className="hidden lg:flex items-center gap-3 mb-16 group cursor-pointer">
            <div className="relative">
              <div className="absolute -inset-2 bg-emerald-500/20 rounded-full blur-xl group-hover:bg-emerald-500/40 transition duration-700"></div>
              <div className="relative bg-slate-950 p-3 rounded-2xl border border-white/10 shadow-inner">
                <Terminal className="text-emerald-400" size={26} />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-black text-white tracking-tighter uppercase leading-none">Hamide</h1>
              <span className="text-[10px] text-emerald-500 font-bold tracking-[0.3em]">KRASNIQI</span>
            </div>
          </div>

          <nav className="space-y-6">
            {[
              { name: 'Identity', id: 'about', icon: <User size={18} /> },
              { name: 'Showcase', id: 'projects', icon: <Code size={18} /> },
              { name: 'certificates', id: 'projects', icon: <Code size={18} /> },
              { name: 'Get in Touch', id: 'contact', icon: <Send size={18} /> }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-slate-500 hover:text-white transition-all w-full text-left"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-slate-800 group-hover:bg-emerald-400 group-hover:shadow-[0_0_10px_rgba(16,185,129,0.8)] transition-all"></div>
                {item.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="space-y-8">
          <div className="p-6 bg-emerald-500/5 rounded-3xl border border-emerald-500/10">
            <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-2">Current Status</p>
            <p className="text-xs text-slate-400 leading-relaxed">Available for innovative web projects.</p>
          </div>
          <div className="flex justify-around text-slate-500 pb-2">
            <a href="#" className="hover:text-emerald-400 hover:-translate-y-1 transition-all"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/hamide-krasniqi-648063361/" className="hover:text-emerald-400 hover:-translate-y-1 transition-all"><Linkedin size={20} /></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hkrasniqi2003@email.com&su=Job+Inquiry" className="hover:text-emerald-400 hover:-translate-y-1 transition-all"><Mail size={20} /></a>
          </div>
        </div>
      </aside>

      <main className="lg:ml-[22rem] px-6 md:px-16 lg:pr-32 pt-40 lg:pt-32 space-y-40 lg:space-y-64 relative z-10">

        <section id="about" className="scroll-mt-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-10 shadow-sm">
            <Sparkles size={12} className="animate-pulse" /> Verified Web Developer
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-7 space-y-10">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9]">
                I'm <span className="text-emerald-400">Hamide Krasniqi</span>.
              </h2>

              <div className="space-y-6 max-w-2xl">
                <p className="text-xl lg:text-2xl text-slate-200 leading-relaxed font-light">
                  A <span className="text-white font-semibold">Web Developer</span> with an unwavering enthusiasm for transforming complex problems into elegant digital interfaces.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed italic">
                  With a solid foundation in <span className="text-emerald-400">Information & Communication Technology (ICT)</span> from my Computer Science studies, I bridge the gap between technical telecommunications and modern web engineering. I don't just write code; I build digital experiences that are fast, intuitive, and visually compelling.
                </p>
                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="flex items-center gap-3 px-5 py-3 bg-white/[0.03] border border-white/5 rounded-2xl">
                    <GraduationCap className="text-emerald-400" size={24} />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase text-slate-500">Degree</span>
                      <span className="text-sm font-bold text-white">BSc Computer Science</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 px-5 py-3 bg-white/[0.03] border border-white/5 rounded-2xl">
                    <BookOpen className="text-emerald-400" size={24} />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase text-slate-500">Focus</span>
                      <span className="text-sm font-bold text-white">ICT Specialist</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 lg:mt-24">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-[2.5rem] blur opacity-10 group-hover:opacity-25 transition duration-1000"></div>

                <div className="relative bg-slate-900/40 border border-white/10 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl transition-all hover:translate-y-[-8px]">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-400">
                      <FileText size={24} />
                    </div>
                    <h3 className="text-xl font-black text-white uppercase tracking-tighter">Curriculum Vitae</h3>
                  </div>

                  <p className="text-slate-400 leading-relaxed mb-10">
                    Get a detailed look at my professional journey, technical expertise, and academic background in **ICT**.
                  </p>

                  <div className="pt-2">
                    <a
                      href={cv}
                      download="Hamide_Krasniqi_CV.pdf"
                      className="w-full flex items-center justify-center gap-3 px-6 py-5 bg-emerald-500 text-[#020617] font-black rounded-2xl hover:bg-white transition-all duration-300 uppercase text-xs tracking-widest group/cv shadow-[0_10px_30px_rgba(16,185,129,0.2)]"
                    >
                      <Download size={18} className="group-hover/cv:bounce" />
                      Download My CV
                    </a>
                    <p className="text-[10px] text-slate-600 text-center mt-4 uppercase tracking-[0.2em] font-bold">
                      Available in PDF format
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="scroll-mt-32">
          <div className="flex items-center justify-between mb-16">
            <div className="space-y-2">
              <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase">Selected Works</h2>
              <div className="h-1.5 w-20 bg-emerald-500 rounded-full"></div>
            </div>
            <span className="text-slate-600 font-mono text-xs font-bold tracking-[0.3em] hidden md:block">TECH STACK: REACT / PYTHON / LARAVEL</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.01] p-1 transition-all duration-500 hover:border-emerald-500/30 hover:-translate-y-2">
              <div className="bg-slate-950/50 backdrop-blur-sm rounded-[2.3rem] p-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-400">
                      <Code size={24} />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-3 py-1 rounded-full uppercase">React UI</span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 group-hover:text-emerald-400 transition-colors">Cinema Hub</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                    A modern movie discovery platform built with <span className="text-white">React Router</span> and <span className="text-white">Tailwind CSS</span> for seamless navigation.
                  </p>
                </div>
                <a href="/project-1" className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group/link">
                  View Project <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.01] p-1 transition-all duration-500 hover:border-emerald-500/30 hover:-translate-y-2">
              <div className="bg-slate-950/50 backdrop-blur-sm rounded-[2.3rem] p-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-400">
                      <Terminal size={24} />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-3 py-1 rounded-full uppercase">Python</span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 group-hover:text-emerald-400 transition-colors">Data Insight AI</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                    Automated data processing and visualization scripts designed for <span className="text-white">high-efficiency</span> analysis and reporting.
                  </p>
                </div>
                <a href="/project-2" className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group/link">
                  View Project <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.01] p-1 transition-all duration-500 hover:border-emerald-500/30 hover:-translate-y-2">
              <div className="bg-slate-950/50 backdrop-blur-sm rounded-[2.3rem] p-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-400">
                      <Cpu size={24} />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-3 py-1 rounded-full uppercase">Laravel</span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 group-hover:text-emerald-400 transition-colors">Inventory Pro</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                    A full-stack enterprise management system focusing on <span className="text-white">secure databases</span> and real-time inventory tracking.
                  </p>
                </div>
                <a href="/project-3" className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group/link">
                  View Project <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 group relative overflow-hidden rounded-[3rem] bg-gradient-to-r from-emerald-600 to-teal-800 p-[1px]">
            <div className="bg-[#020617]/90 rounded-[2.9rem] p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden relative">
              <div className="absolute -right-10 top-0 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
                <Sparkles size={250} className="text-white" />
              </div>

              <div className="relative z-10 flex items-center gap-6">
                <div className="h-20 w-20 bg-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                  <Award className="text-[#020617]" size={40} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tighter">Open for Collaboration</h4>
                  <p className="text-emerald-400/80 font-mono text-xs uppercase tracking-[0.2em]">Currently exploring new technologies & creative projects</p>
                </div>
              </div>

              <div className="relative z-10 flex gap-4">
                <div className="px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-center">
                  <span className="block text-xl font-black text-white">100%</span>
                  <span className="text-[10px] text-slate-500 uppercase font-bold">Commitment</span>
                </div>
                <div className="px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-center">
                  <span className="block text-xl font-black text-white">ICT</span>
                  <span className="text-[10px] text-slate-500 uppercase font-bold">Specialized</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="certificates" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-16">
            <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-400">
              <Award size={24} />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase">Professional Certifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Frontend Development", issuer: "Innovation Academy", date: "2025" },
              { title: "Python Data Science", issuer: "Tech Institute", date: "2024" },
              { title: "Full-Stack Laravel", issuer: "Web Solutions", date: "2025" }
            ].map((cert, index) => (
              <div key={index} className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.01] p-1 transition-all duration-500 hover:border-emerald-500/30">
                <div className="bg-slate-950/40 backdrop-blur-sm rounded-[2.3rem] p-8 flex flex-col justify-between h-full border border-white/5">
                  <div className="space-y-4">
                    <span className="text-[10px] font-black text-emerald-500 font-mono tracking-widest">{cert.date}</span>
                    <h3 className="text-xl font-bold text-white leading-tight">{cert.title}</h3>
                    <p className="text-slate-500 text-sm italic">{cert.issuer}</p>
                  </div>

                  <div className="mt-8">
                    <button
                      onClick={() => alert("Këtu do të hapet imazhi i çertifikatës suaj. (Modal Integration)")}
                      className="w-full py-4 rounded-2xl border border-white/10 flex items-center justify-center gap-3 text-white text-xs font-black uppercase tracking-widest hover:bg-emerald-500 hover:text-black transition-all group/cert"
                    >
                      <User size={16} />
                      View Credential
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-600 text-[10px] mt-8 uppercase tracking-[0.2em]">
            Certificates are protected. View-only mode enabled.
          </p>
        </section>
        <section id="contact" className="scroll-mt-32 flex flex-col items-center text-center">
          <div className="mb-12 relative">
            <div className="absolute -inset-10 bg-emerald-500 rounded-full blur-[100px] opacity-10"></div>
            <h2 className="text-6xl lg:text-8xl font-black text-white mb-6 tracking-tighter uppercase">Get In Touch.</h2>
          </div>

          <div className="max-w-2xl space-y-8 mb-16">
            <p className="text-slate-400 text-xl lg:text-2xl leading-relaxed font-light italic">
              "Whether you have a question, a project idea, or just want to say hi—my inbox is always open."
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-20 p-4 bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-[2.5rem] px-10 shadow-2xl">
            {[
              { icon: <Mail size={28} />, link: "https://mail.google.com/mail/?view=cm&fs=1&to=hkrasniqi2003@email.com&su=Job+Inquiry", label: "Email" },
              { icon: <Linkedin size={28} />, link: "https://www.linkedin.com/in/hamide-krasniqi-648063361/", label: "LinkedIn" },
              { icon: <Github size={28} />, link: "https://github.com", label: "GitHub" }
            ].map((social) => (
              <a
                key={social.label}
                href={social.link}
                className="p-5 text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-3xl transition-all duration-300 group relative"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </section>

       <footer className="w-full pt-20 pb-12 mt-20 border-t border-white/3 flex justify-end items-center">
            <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <p className="text-[15px] text-slate-500 font-bold uppercase tracking-[0.3em]">
                    Hamide Krasniqi © 2026
                </p>
            </div>
        </footer>

      </main> 
    </div>
  );
};

export default App;