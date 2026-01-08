'use client';

import { useEffect, useRef } from 'react';

export default function Contact() {
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

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'mahamfatima96@icloud.com',
      href: 'mailto:mahamfatima96@icloud.com',
      color: 'blue',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Phone',
      value: '(437)-223-3301',
      href: 'tel:+14372233301',
      color: 'indigo',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      label: 'LinkedIn',
      value: '/in/maham-f-7078a6a1',
      href: 'https://www.linkedin.com/in/maham-f-7078a6a1/',
      color: 'purple',
    },
  ];

  const colorClasses = {
    blue: {
      icon: 'text-white/70',
      tag: 'bg-white/5 text-white/70 border-white/10',
    },
    indigo: {
      icon: 'text-white/70',
      tag: 'bg-white/5 text-white/70 border-white/10',
    },
    purple: {
      icon: 'text-white/70',
      tag: 'bg-white/5 text-white/70 border-white/10',
    },
  };

  return (
    <section ref={sectionRef} id="contact" className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1a24 0%, #1e1e2e 50%, #1a1a24 100%)' }}>
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(74, 158, 255, 0.1) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(124, 124, 255, 0.1) 0%, transparent 70%)' }}
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
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="font-mono text-sm mb-3 tracking-wider" style={{ color: '#b8d4ff' }}>{'// LET\'S CONNECT'}</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#f0f0f5' }}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: '#c0c0c8' }}>
            I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology and innovation.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 stagger-children">
          {contactMethods.map((method, index) => {
            const colors = colorClasses[method.color as keyof typeof colorClasses];
            return (
              <a
                key={index}
                href={method.href}
                target={method.label === 'LinkedIn' ? '_blank' : undefined}
                rel={method.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                className="group"
              >
                <div className="glass-card p-6 text-center h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <div className={colors.icon}>
                      {method.icon}
                    </div>
                  </div>

                  {/* Label */}
                  <h3 className="text-lg font-semibold mb-2 transition-colors" style={{ color: '#f0f0f5' }}>
                    {method.label}
                  </h3>

                  {/* Value */}
                  <p className="text-sm break-all transition-colors" style={{ color: '#c0c0c8' }}>
                    {method.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Location */}
        <div className="text-center animate-on-scroll">
          <div className="inline-flex items-center gap-3 px-6 py-3 glass-card">
            <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span style={{ color: '#d0d0d8' }}>
              3525 Kariya Dr. (L5B 0C2), Mississauga, ON, Canada
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center animate-on-scroll">
          <p className="mb-6" style={{ color: '#a8a8b0' }}>Ready to build something amazing together?</p>
          <a href="mailto:mahamfatima96@icloud.com" className="btn-primary inline-block">
            <span>Start a Conversation</span>
          </a>
        </div>
      </div>
    </section>
  );
}
