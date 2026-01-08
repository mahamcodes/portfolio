'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden pt-32 pb-24"
      style={{ background: 'linear-gradient(135deg, #1a1a24 0%, #1e1e2e 50%, #1a1a24 100%)' }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient orbs - futuristic cyan */}
        <div 
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full animate-pulse-glow"
          style={{ background: 'radial-gradient(circle, rgba(0, 212, 255, 0.12) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute top-1/2 -left-40 w-80 h-80 rounded-full animate-pulse-glow"
          style={{ background: 'radial-gradient(circle, rgba(91, 141, 239, 0.1) 0%, transparent 70%)', animationDelay: '1s' }}
        />
        <div 
          className="absolute -bottom-20 right-1/4 w-72 h-72 rounded-full animate-pulse-glow"
          style={{ background: 'radial-gradient(circle, rgba(139, 127, 255, 0.08) 0%, transparent 70%)', animationDelay: '2s' }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Floating shapes - futuristic cyan glow */}
        <div className="absolute top-20 left-[15%] w-3 h-3 bg-cyan-400/30 rounded-full animate-float shadow-[0_0_10px_rgba(0,212,255,0.5)]" />
        <div className="absolute top-40 right-[20%] w-2 h-2 bg-blue-400/35 rounded-full animate-float-reverse shadow-[0_0_8px_rgba(91,141,239,0.4)]" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-[25%] w-4 h-4 bg-indigo-400/25 rounded-full animate-float shadow-[0_0_12px_rgba(139,127,255,0.4)]" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-[10%] w-2 h-2 bg-cyan-400/30 rounded-full animate-float-reverse shadow-[0_0_8px_rgba(0,212,255,0.5)]" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              <div className="relative w-48 h-64 sm:w-56 sm:h-72 lg:w-64 lg:h-80 rounded-xl overflow-hidden border-2 border-white/10">
                <Image
                  src="/profile.jpg"
                  alt="Maham Fatima"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-4">
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <p className="font-mono text-sm mb-2 tracking-wider" style={{ color: '#b8d4ff' }}>
                {'<'}Hello World{'/>'}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 leading-tight" style={{ color: '#f0f0f5' }}>
                I'm <span className="gradient-text">Maham Fatima</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium mb-4" style={{ color: '#d0d0d8' }}>
                Senior Software Engineer & Technical Lead
              </h2>
            </div>

            <p className="text-base lg:text-lg leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: '0.6s', color: '#c0c0c8' }}>
              With 7+ years of experience, I build scalable, high-performance web applications that deliver seamless user experiences. I specialize in React, modern JavaScript (ES6+), CSS/SASS, and design systems, while also bringing solid backend expertise in Java, Node.js, and .NET.
            </p>

            {/* Tech stack preview */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              {['React', 'TypeScript', 'Node.js', 'Java', '.NET'].map((tech) => (
                <span key={tech} className="skill-tag">
                  {tech}
                </span>
              ))}
            </div>

            {/* Contact info */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 text-sm animate-fade-in" style={{ animationDelay: '0.8s', color: '#a8a8b0' }}>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#b8d4ff' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Mississauga, ON, Canada
              </span>
              <span className="hidden sm:inline" style={{ color: '#888890' }}>•</span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#b8d4ff' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                mahamfatima96@icloud.com
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <a
                href="https://www.linkedin.com/in/maham-f-7078a6a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>Connect on LinkedIn</span>
              </a>
              <a href="#contact" className="btn-secondary">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
