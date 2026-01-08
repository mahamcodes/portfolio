'use client';

import { useEffect, useRef } from 'react';

export default function Experience() {
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

  const experiences = [
    {
      title: 'Lead Software Engineer',
      company: 'Motive',
      location: 'Remote',
      period: 'Jan 2023 – Aug 2024',
      description: [
        'Architected the redesign of the company\'s public-facing website in React, defining component hierarchy, state-management strategy, and CI/CD pipelines; increased user engagement 40%',
        'Drove frontend technical direction, establishing coding standards, performance budgets, and accessibility guidelines adopted by the wider engineering org',
        'Led and mentored a cross-functional team of 10+ designers and engineers, conducting code reviews and pairing sessions to raise the bar on UX and maintainability',
        'Partnered with product and design to deliver major features on schedule, introducing reusable design-system components that cut future build time by 30%',
      ],
      tech: ['React', 'State Management', 'TypeScript', 'HTML/CSS', 'CI/CD', 'Design Systems', 'Accessibility', 'Performance Optimization'],
      color: 'blue',
    },
    {
      title: 'Senior Software Engineer',
      company: 'i2c',
      location: 'Hybrid',
      period: 'April 2019 – Oct 2023',
      description: [
        'Designed and implemented scalable frontend architecture for 40+ payment modules, improving performance and responsiveness across high-traffic applications',
        'Built a dispute-management dashboard with advanced state management and real-time updates, enabling finance teams to resolve thousands of cases efficiently',
        'Collaborated with backend teams on 20+ API integrations, defining clear contracts and optimizing data flows to ensure seamless UX',
        'Acted as tech mentor, guiding junior developers in modern JavaScript patterns, performance tuning, and secure coding practices',
      ],
      tech: ['JavaScript', 'Java', 'Spring Boot', 'REST APIs'],
      color: 'indigo',
    },
    {
      title: 'Senior Software Engineer',
      company: 'CureMD',
      location: 'On-Site',
      period: 'Oct 2017 – April 2019',
      description: [
        'Engineered multiple robust C# .NET Core APIs to power seamless cross-platform functionality and high-volume transactions',
        'Integrated these APIs with both a payment kiosk and a mobile app, enabling real-time data flow and a smoother customer experience',
        'Designed and implemented interactive Gantt charts using JavaScript and ASP .NET, transforming large raw datasets into clear, visual data',
      ],
      tech: ['C#', '.NET Core', 'ASP.NET', 'JavaScript', 'SQL Server'],
      color: 'purple',
    },
    {
      title: 'Software Engineer',
      company: 'NTG',
      location: 'On-Site',
      period: 'Aug 2017 – Oct 2017',
      description: [
        'Developed a full insurance module and contributed to multiple healthcare application features, leveraging MVC, .NET, and SQL Server to deliver robust, scalable, and secure solutions',
      ],
      tech: ['MVC', '.NET', 'SQL Server', 'Healthcare'],
      color: 'blue',
    },
  ];

  const colorClasses = {
    blue: {
      dot: 'bg-white/40',
      glow: 'shadow-[0_0_15px_rgba(255,255,255,0.1)]',
      line: 'from-white/30',
      tag: 'bg-white/5 text-white/70 border-white/10',
    },
    indigo: {
      dot: 'bg-white/40',
      glow: 'shadow-[0_0_15px_rgba(255,255,255,0.1)]',
      line: 'from-white/30',
      tag: 'bg-white/5 text-white/70 border-white/10',
    },
    purple: {
      dot: 'bg-white/40',
      glow: 'shadow-[0_0_15px_rgba(255,255,255,0.1)]',
      line: 'from-white/30',
      tag: 'bg-white/5 text-white/70 border-white/10',
    },
  };

  return (
    <section ref={sectionRef} id="experience" className="relative py-24 section-dark overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 right-20 w-80 h-80 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(167, 139, 250, 0.08) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="font-mono text-sm mb-3 tracking-wider" style={{ color: '#b8d4ff' }}>{'// CAREER PATH'}</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#f0f0f5' }}>
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: '#c0c0c8' }}>
            A journey of growth, leadership, and impactful contributions
          </p>
        </div>

        {/* Timeline */}
        <div className="relative stagger-children">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/20 to-white/20 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => {
            const colors = colorClasses[exp.color as keyof typeof colorClasses];
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2 -translate-x-1/2">
                  <div className={`w-4 h-4 rounded-full ${colors.dot} ${colors.glow}`} />
                </div>

                {/* Content */}
                <div className={`flex-1 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-8 md:pl-0`}>
                  <div className="glass-card p-6 hover:bg-white/[0.03] transition-all group">
                    {/* Header */}
                    <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'} mb-4`}>
                      <span className={`text-sm font-mono ${colors.tag.split(' ')[1]} mb-2`}>
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-bold transition-colors" style={{ color: '#f0f0f5' }}>
                        {exp.title}
                      </h3>
                      <p style={{ color: '#d0d0d8' }}>
                        {exp.company} <span style={{ color: '#a8a8b0' }}>• {exp.location}</span>
                      </p>
                    </div>

                    {/* Description */}
                    <ul className={`space-y-2 mb-4 ${isEven ? 'md:text-right' : ''}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm leading-relaxed" style={{ color: '#c0c0c8' }}>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : ''}`}>
                      {exp.tech.map((tech, i) => (
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

                {/* Empty space for the other side */}
                <div className="hidden md:block flex-1" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
