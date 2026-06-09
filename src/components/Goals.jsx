import React from 'react';

const GoalSection = ({ title, items, color, delay }) => (
  <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col h-full" data-aos="fade-up" data-aos-delay={delay}>
    <h3 className={`text-2xl font-black uppercase tracking-tighter mb-8 pb-4 border-b-2 ${color}`}>
      {title}
    </h3>
    <div className="flex flex-wrap gap-3 mt-auto">
      {items.map((item, i) => (
        <span key={i} className="px-4 py-2 bg-gray-50 text-gray-700 text-xs font-bold uppercase tracking-wider rounded-lg border border-gray-200 hover:bg-black hover:text-white transition-all duration-300 cursor-default">
          {item}
        </span>
      ))}
    </div>
  </div>
);

const Goals = () => {
  const certifications = [
    "Artificial Intelligence", "Prompt Engineering", "Google Cloud",
    "Software Development", "Cybersecurity", "Quantitative Finance",
    "Automation Systems", "[Future Certification Placeholder]"
  ];

  const learning = [
    "Quantitative Research", "Market Microstructure", "Statistical Arbitrage",
    "Trading Systems", "Agentic AI", "Advanced n8n Automation",
    "Distributed Systems", "Financial Engineering"
  ];

  const futureGoals = [
    "Secure Software Engineering Internship", "Build Production-Grade AI Systems",
    "Publish Impactful Research", "Develop Advanced Trading Systems",
    "Contribute to FinTech Innovation", "Join Elite Quantitative Firm",
    "Solve Real-World Problems via Startups"
  ];

  return (
    <section id="goals" className="py-24 px-6 md:px-12 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <GoalSection 
            title="Certifications" 
            items={certifications} 
            color="border-[#ff2a2a] text-[#ff2a2a]" 
            delay={100} 
          />
          
          <GoalSection 
            title="Currently Learning" 
            items={learning} 
            color="border-black text-black" 
            delay={200} 
          />
          
          <GoalSection 
            title="Future Goals" 
            items={futureGoals} 
            color="border-gray-300 text-gray-500" 
            delay={300} 
          />

        </div>

        {/* GitHub Section Placeholder */}
        <div className="mt-20 bg-white rounded-[3rem] p-12 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100 text-center" data-aos="zoom-in">
          <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </div>
          <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tighter">Open Source Contribution</h3>
          <p className="text-gray-500 font-medium max-w-lg mx-auto mb-8">
            Actively contributing to various open-source projects and building tools for the community. Check out my latest activities on GitHub.
          </p>
          <a 
            href="https://github.com/aayushmishra52" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-bold uppercase tracking-widest hover:bg-[#ff2a2a] transition-all duration-300 shadow-xl shadow-black/10"
          >
            Visit GitHub Profile
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Goals;
