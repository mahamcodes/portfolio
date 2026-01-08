'use client';

import { useEffect, useRef } from 'react';

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll, .stagger-children');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    
    
    {
      title: 'Integrated Payment API with Kiosks',
      company: 'CureMD',
      description: 'Developed and integrated a robust payment API with kiosks to handle millions of transactions securely. Ensured seamless communication between frontend and backend systems.',
      tech: ['.Net core', 'c#', 'javascript', 'Sql server'],
      impact: 'Enabled secure, high-volume transaction processing with reliability and efficiency.',
    },
    
    {
      title: 'Built End-to-End Dispute Management Module',
      company: 'i2c',
      description: 'Designed and developed a full-stack dispute management system to process hundreds of disputes daily. Delivered a clean frontend interface integrated with backend operations, allowing users to review, add, and delete disputes efficiently.',
      tech: ['Java', 'JS/CSS', 'Spring Boot'],
      impact: 'Streamlined dispute resolution workflow, improving operational efficiency and user experience.',
    },
    {
      title: 'Implemented Swiper Carousel Across Motive Website',
      company: 'Motive',
      description: 'Replaced the legacy carousel with Swiper to create a modern, responsive UI. Built a modular, reusable component to improve developer usability and maintainability.',
      tech: ['React', 'HTML/CSS', 'WordPress', 'TypeScript'],
      impact: 'Enhanced site performance and delivered a smooth, responsive user experience.',
    },
    
    {
      title: 'Redesigned and Rebranded Motive Homepage',
      company: 'Motive',
      description: 'Led the homepage redesign to create a modern, visually engaging layout. Integrated Lottie animations for interactive micro-interactions and optimized SEO and page speed for better discoverability.',
      tech: ['React', 'HTML/CSS', 'WordPress', 'Lottie'],
      impact: 'Improved page speed, SEO, and overall user engagement.',
    },
  ];

  return (
    <section ref={sectionRef} id="projects" className="relative py-24 section-darker overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div 
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(74, 158, 255, 0.08) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute top-40 right-10 w-72 h-72 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(124, 124, 255, 0.08) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="font-mono text-sm mb-3 tracking-wider" style={{ color: '#b8d4ff' }}>{'// PORTFOLIO'}</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#f0f0f5' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: '#c0c0c8' }}>
            A showcase of impactful solutions that drove real business value
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 stagger-children">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="glass-card p-6 h-full flex flex-col hover:bg-white/[0.03] transition-all">
                {/* Company Badge */}
                <div className="mb-4">
                  <span className="text-xs font-mono text-white/70 mb-2 inline-block">
                    {project.company}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 transition-colors" style={{ color: '#f0f0f5' }}>
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed flex-grow mb-5" style={{ color: '#c0c0c8' }}>
                  {project.description}
                </p>

                {/* Impact */}
                <div className="mb-5">
                  <p className="text-xs font-medium mb-2" style={{ color: '#a8a8b0' }}>Impact:</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#d0d0d8' }}>
                    {project.impact}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="skill-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
