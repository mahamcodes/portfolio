'use client';

import { useEffect, useRef } from 'react';

export default function About() {
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

  const stats = [
    { value: '7+', label: 'Years Experience' },
    { value: '50+', label: 'Modules Built' },
    { value: '15+', label: 'Projects Led' },
    { value: '100%', label: 'On-time Delivery' },
  ];

  const highlights = [
    { icon: '🎯', text: '15+ projects, delivering high-quality, user-centered results' },
    { icon: '📈', text: 'Improved engineering team velocity by 20% through standardized processes' },
    { icon: '⚡', text: 'Developed and optimized 40+ payment application modules' },
    { icon: '🔄', text: 'Managed project lifecycle with JIRA, ensuring 100% timely delivery' },
  ];

  return (
    <section ref={sectionRef} id="about" className="relative py-24 section-dark overflow-hidden">
        {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-20">
        <div 
          className="absolute top-20 right-20 w-64 h-64 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(74, 158, 255, 0.06) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="font-mono text-sm mb-3 tracking-wider" style={{ color: '#b8d4ff' }}>{'// ABOUT ME'}</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#f0f0f5' }}>
            Crafting <span className="gradient-text">Digital Experiences</span>
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: '#c0c0c8' }}>
            Passionate about building scalable applications that make a difference
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 stagger-children">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center group cursor-default"
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm" style={{ color: '#c0c0c8' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Professional Summary */}
          <div className="animate-on-scroll">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/15 to-indigo-500/15 flex items-center justify-center">
                  <span className="text-xl">💻</span>
                </div>
                <h3 className="text-xl font-semibold" style={{ color: '#f0f0f5' }}>Professional Summary</h3>
              </div>
              <div className="space-y-4 leading-relaxed" style={{ color: '#d0d0d8' }}>
                <p>
                  Senior Full-Stack Engineer with 7+ years of experience building scalable fintech and SaaS applications used by thousands of users. I specialize in Java and .NET backend systems and take full-stack ownership across React-based frontends.
                </p>
                <p>
                  I've built secure, high-performance APIs (Java, Spring Boot, .NET Core) for payment and transaction-heavy platforms, integrating them with mobile apps, kiosks, and web clients.
                </p>
                <p>
                  On the frontend, I create clean, responsive, and accessible UIs using React, modern JavaScript, and CSS, with experience in design systems, performance optimization, and WCAG compliance.
                </p>
              </div>
              {/* Code snippet decoration */}
              <div className="mt-6 code-block">
                <code>
                  <span className="text-pink-400">const</span> <span className="text-cyan-300">developer</span> = {'{'}
                  <br />
                  &nbsp;&nbsp;<span className="text-violet-400">passion</span>: <span className="text-emerald-400">"Engineering / Impact"</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-violet-400">focus</span>: <span className="text-emerald-400">"Performance / Architecture"</span>
                  <br />
                  {'}'};
                </code>
              </div>
            </div>
          </div>

          {/* Right - Key Highlights */}
          <div className="animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/15 to-purple-500/15 flex items-center justify-center">
                  <span className="text-xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold" style={{ color: '#f0f0f5' }}>Key Highlights</h3>
              </div>
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="glass-card p-5 flex items-start gap-4 group"
                >
                  <span className="text-2xl">{highlight.icon}</span>
                  <p className="transition-colors" style={{ color: '#d0d0d8' }}>
                    {highlight.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
