import React from 'react';

const Research = () => {
  const interests = [
    "Quantitative Finance", "Algorithmic Trading", "Artificial Intelligence",
    "Financial Data Science", "Market Microstructure", "Software Systems",
    "Cybersecurity", "Intelligent Decision Making"
  ];

  return (
    <section id="research" className="py-24 px-6 md:px-12 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Research Interests */}
          <div className="lg:w-1/3" data-aos="fade-right">
            <h2 className="text-5xl font-black text-gray-900 uppercase tracking-tighter mb-8">
              Research <br /><span className="text-[#ff2a2a]">Focus</span>
            </h2>
            <p className="text-gray-500 font-medium mb-10 leading-relaxed">
              My research lies at the intersection of Software Engineering, Artificial Intelligence, and Quantitative Finance, focusing on building intelligent systems for real-world safety and financial efficiency.
            </p>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, i) => (
                <span key={i} className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-xs font-bold text-gray-700 uppercase tracking-wider">
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side: Publication Card */}
          <div className="lg:w-2/3" data-aos="fade-left">
            <div className="bg-[#0a0a0a] rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden group">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff2a2a] rounded-full blur-[120px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <span className="px-4 py-1 bg-[#ff2a2a] text-[10px] font-black uppercase tracking-widest rounded-full">
                    Featured Publication
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Research Paper
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black mb-8 leading-tight group-hover:text-[#ff2a2a] transition-colors">
                  Transforming Railway Safety Through Crowdsourced Intelligence: The RailSafe Framework for Indian Railways
                </h3>

                <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-2xl font-medium">
                  A research-oriented framework designed to enhance passenger safety across the Indian Railways network by leveraging crowdsourced intelligence and AI-driven analysis.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="border-l-2 border-[#ff2a2a] pl-6">
                    <h4 className="text-sm font-black uppercase tracking-widest mb-2 text-white">Objective</h4>
                    <p className="text-xs text-gray-500 font-bold uppercase leading-relaxed">
                      Improve real-time incident reporting and emergency response through distributed user intelligence.
                    </p>
                  </div>
                  <div className="border-l-2 border-white/20 pl-6">
                    <h4 className="text-sm font-black uppercase tracking-widest mb-2 text-white">Technology</h4>
                    <p className="text-xs text-gray-500 font-bold uppercase leading-relaxed">
                      AI Analysis, Crowdsourcing Models, Intelligent Software Architecture.
                    </p>
                  </div>
                </div>

                <button className="flex items-center gap-4 text-sm font-black uppercase tracking-[0.2em] group/btn">
                  View Full Paper 
                  <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Research;
