'use client';

import { useEffect, useRef } from 'react';

export default function Education() {
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

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="education" className="relative py-24 section-dark overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-8"
          style={{ background: 'radial-gradient(circle, rgba(124, 124, 255, 0.1) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <p className="font-mono text-sm mb-3 tracking-wider" style={{ color: '#b8d4ff' }}>{'// EDUCATION'}</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#f0f0f5' }}>
            Academic <span className="gradient-text">Background</span>
          </h2>
        </div>

        {/* Education Card */}
        <div className="flex justify-center animate-on-scroll">
          <div className="glass-card p-8 text-center max-w-lg w-full">
            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-4xl">
              🎓
            </div>

            {/* Degree */}
              <h3 className="text-2xl font-semibold mb-2" style={{ color: '#f0f0f5' }}>
                BS (Hons) Computer Systems Engineering
              </h3>
              
              {/* Institution */}
              <p className="text-lg font-medium mb-4" style={{ color: '#b8d4ff' }}>
                Lancaster University
              </p>

              {/* Details */}
              <div className="flex items-center justify-center gap-4 text-sm" style={{ color: '#c0c0c8' }}>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                United Kingdom
              </span>
                <span style={{ color: '#888890' }}>•</span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                2013 – 2017
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
