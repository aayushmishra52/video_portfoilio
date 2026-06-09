import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import resumeQuants from '../assets/Aayush_mishraCV.pdf';
import resumeAI from '../assets/Aayush_mishra.pdf';

const Contact = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax translation for the big text
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  const handleDownload = (role) => {
    const link = document.createElement('a');
    link.href = role === 'quants' ? resumeQuants : resumeAI;
    link.download = role === 'quants' ? 'Aayush_Mishra_Quants_Resume.pdf' : 'Aayush_Mishra_AI_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowResumeModal(false);
  };

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 md:pb-0 border-t border-gray-900">
      {/* Huge Background Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Form Card Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div 
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-between"
        >
          <div className="text-xs font-bold tracking-[0.2em] mb-12 md:mb-20 uppercase opacity-90">
            Let's Build Something Together
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <form className="flex flex-col gap-10 w-full">
              <div className="flex flex-col gap-10">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/60 font-medium rounded-none"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/60 font-medium rounded-none"
                />
                <textarea 
                  placeholder="Tell me about your project or role" 
                  className="w-full min-h-[120px] bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/60 font-medium resize-none rounded-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="group flex items-center gap-4 text-sm font-black uppercase tracking-[0.2em] self-start"
              >
                Send Message
                <span className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#ff2a2a] transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </form>

            {/* Contact Info */}
            <div className="flex flex-col justify-between py-2">
              <div className="space-y-12">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-4">Email</h4>
                  <a href="mailto:aayushmishra062005@gmail.com" className="text-2xl md:text-3xl font-black hover:text-black transition-colors">
                    aayushmishra062005@gmail.com
                  </a>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-4">Location</h4>
                  <p className="text-2xl md:text-3xl font-black">
                    Mumbai, Maharashtra, India
                  </p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-4">Social</h4>
                  <div className="flex gap-8">
                    <a href="https://linkedin.com/in/aayush-mishra52/" target="_blank" className="text-lg font-black hover:text-black transition-colors border-b-2 border-white/20">LinkedIn</a>
                    <a href="https://github.com/aayushmishra52" target="_blank" className="text-lg font-black hover:text-black transition-colors border-b-2 border-white/20">GitHub</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-12 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-6">
                <button 
                  onClick={() => setShowResumeModal(true)}
                  className="flex items-center gap-3 text-xs font-black uppercase tracking-widest bg-black text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M16 7l-4-4m0 0L8 3m4 0v12" />
                  </svg>
                  Download Resume
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Resume Selection Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-[2rem] p-8 md:p-12 max-w-lg w-full relative overflow-hidden"
            >
              {/* Close Button */}
              <button 
                onClick={() => setShowResumeModal(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h3 className="text-3xl font-black text-gray-900 mb-2 uppercase tracking-tighter">Select Role</h3>
              <p className="text-gray-500 font-medium mb-8">Please choose the resume version you'd like to download.</p>
              
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => handleDownload('aiml')}
                  className="group flex items-center justify-between p-6 bg-gray-50 hover:bg-[#ff2a2a] rounded-2xl border border-gray-100 transition-all duration-300"
                >
                  <div className="text-left">
                    <h4 className="text-xl font-black text-gray-900 group-hover:text-white transition-colors uppercase tracking-tight">AI Engineer</h4>
                    <p className="text-xs font-bold text-gray-400 group-hover:text-white/70 transition-colors uppercase tracking-widest">AI & Machine Learning Focus</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M16 7l-4-4m0 0L8 3m4 0v12" />
                    </svg>
                  </div>
                </button>

                <button 
                  onClick={() => handleDownload('quants')}
                  className="group flex items-center justify-between p-6 bg-gray-50 hover:bg-[#ff2a2a] rounded-2xl border border-gray-100 transition-all duration-300"
                >
                  <div className="text-left">
                    <h4 className="text-xl font-black text-gray-900 group-hover:text-white transition-colors uppercase tracking-tight">Quantitative Research</h4>
                    <p className="text-xs font-bold text-gray-400 group-hover:text-white/70 transition-colors uppercase tracking-widest">Trading & Math Focus</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M16 7l-4-4m0 0L8 3m4 0v12" />
                    </svg>
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
