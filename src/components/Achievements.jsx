import React, { useEffect, useState, useRef } from 'react';

const Counter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(end * percentage));
      if (percentage < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

const Achievements = () => {
  const stats = [
    { label: "Software Projects", value: 10, suffix: "+" },
    { label: "AI Applications", value: 5, suffix: "+" },
    { label: "n8n Automations", value: 15, suffix: "+" },
    { label: "Research Papers", value: 1, suffix: "" }
  ];

  const highlights = [
    "Built multiple real-world software projects with full-stack capabilities.",
    "Developed advanced quantitative research models for market analysis.",
    "Created production-grade AI-powered applications using LLMs.",
    "Designed complex workflow automation systems using n8n and AI agents.",
    "Conducted impactful railway safety research for Indian Railways.",
    "Strong foundation in algorithms, data structures, and computer science.",
    "Proven leadership experience in academic and social organizations."
  ];

  return (
    <section id="achievements" className="py-24 px-6 md:px-12 bg-[#0a0a0a] w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div data-aos="fade-right">
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
              Proven <br /><span className="text-[#ff2a2a]">Excellence</span>
            </h2>
            <div className="space-y-6">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="mt-1.5 w-5 h-5 rounded-full border border-[#ff2a2a] flex items-center justify-center shrink-0 group-hover:bg-[#ff2a2a] transition-all duration-300">
                    <svg className="w-3 h-3 text-[#ff2a2a] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-400 font-bold text-sm md:text-base leading-relaxed group-hover:text-white transition-colors">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-8" data-aos="fade-left">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 flex flex-col items-center justify-center text-center group hover:bg-[#ff2a2a] hover:border-[#ff2a2a] transition-all duration-500">
                <div className="text-4xl md:text-6xl font-black text-white mb-2 group-hover:scale-110 transition-transform">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-gray-500 group-hover:text-white/80 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
            
            {/* Professional Highlight Card */}
            <div className="col-span-2 bg-gradient-to-br from-[#ff2a2a] to-red-800 rounded-[2rem] p-8 md:p-10 text-white shadow-2xl shadow-red-500/20">
              <h4 className="text-xl font-black uppercase tracking-widest mb-4">Recruiter Highlight</h4>
              <p className="text-sm md:text-base font-bold leading-relaxed opacity-90">
                Highly motivated IT student with a specialized focus on AI Systems and Quantitative Research. Seeking to leverage strong technical foundations and leadership skills in an elite engineering environment.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;
