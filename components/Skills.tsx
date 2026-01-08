'use client';

import { useEffect, useRef } from 'react';

export default function Skills() {
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

  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      color: 'slate',
      skills: ['React', 'TypeScript', 'JavaScript ES6+', 'HTML/CSS', 'Next.js'],
    },
    {
      title: 'Backend',
      icon: '⚙️',
      color: 'gray',
      skills: ['Java', '.NET/C#', 'Node.js', 'REST APIs', 'Spring Boot'],
    },
    {
      title: 'Database',
      icon: '💾',
      color: 'zinc',
      skills: ['MySQL', 'MS SQL Server'],
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      color: 'neutral',
      skills: ['AWS', 'CI/CD'],
    },
    {
      title: 'AI & Automation',
      icon: '🤖',
      color: 'stone',
      skills: ['OpenAI API', 'Image Processing', 'Data Extraction'],
    },
    {
      title: 'Leadership',
      icon: '👥',
      color: 'slate',
      skills: ['Agile/Scrum', 'Team Mentorship', 'Code Reviews'],
    },
  ];

  return (
    <section ref={sectionRef} id="skills" className="relative py-24 section-darker overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 left-10 w-72 h-72 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(124, 124, 255, 0.06) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(74, 158, 255, 0.06) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="font-mono text-sm mb-3 tracking-wider" style={{ color: '#b8d4ff' }}>{'// TECH STACK'}</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#f0f0f5' }}>
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: '#c0c0c8' }}>
            A comprehensive toolkit built over 7+ years of professional development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card p-6 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold" style={{ color: '#f0f0f5' }}>{category.title}</h3>
              </div>

              {/* Skills as tags - subtle */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-sm font-medium rounded-md bg-white/5 border border-white/10 hover:bg-white/8 hover:border-white/15 transition-all cursor-default"
                    style={{ color: '#d0d0d8' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools marquee */}
        <div className="mt-16 animate-on-scroll">
          <p className="text-center text-sm mb-6 font-mono" style={{ color: '#a8a8b0' }}>{'// TOOLS I USE DAILY'}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['VS Code', 'Git', 'Figma', 'Jira', 'Postman', 'Chrome DevTools', 'Terminal', 'Slack'].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 cursor-default"
                style={{ color: '#c0c0c8' }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
