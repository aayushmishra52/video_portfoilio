import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'sde', label: 'Software Engineering' },
  { id: 'quants', label: 'Quantitative Research' },
  { id: 'automation', label: 'Workflow Automation' },
  { id: 'ai', label: 'AI & ML' }
];

const projects = [
  // Quants
  {
    id: 1,
    category: 'quants',
    title: 'Market Microstructure & Order Book Simulator',
    description: 'Quantitative research system for studying market microstructure, order flow, liquidity behavior, and execution quality.',
    features: ['Order Book Simulation', 'Trade Matching Engine', 'Liquidity Analysis', 'Market Impact Modeling'],
    tech: ['Python', 'Statistics', 'Data Analysis']
  },
  {
    id: 2,
    category: 'quants',
    title: 'Quantitative Trading Strategy Backtester',
    description: 'Backtesting framework for evaluating trading strategies using historical market data with risk analysis.',
    features: ['Strategy Testing', 'Sharpe Ratio Analysis', 'Drawdown Tracking', 'Performance Reporting'],
    tech: ['Python', 'Pandas', 'NumPy']
  },
  {
    id: 3,
    category: 'quants',
    title: 'AI-Powered Market Sentiment Research Platform',
    description: 'Research platform that analyzes financial news and market sentiment using AI and NLP techniques.',
    features: ['News Analysis', 'Sentiment Detection', 'Trend Monitoring', 'Financial Intelligence'],
    tech: ['Python', 'NLP', 'AI']
  },
  // SDE
  {
    id: 4,
    category: 'sde',
    title: 'RailSafe – Railway Safety Framework',
    description: 'Research-oriented railway safety framework designed to improve passenger safety through crowdsourced reporting.',
    features: ['Incident Reporting', 'Crowdsourced Intelligence', 'AI Analysis', 'Public Safety Focus'],
    tech: ['Python', 'AI', 'React']
  },
  {
    id: 5,
    category: 'sde',
    title: 'MajdooriHub',
    description: 'AI-powered labor marketplace connecting workers and contractors through intelligent matching.',
    features: ['AI Job Matching', 'Location-Based Hiring', 'Real-Time Notifications', 'Reviews & Ratings'],
    tech: ['React', 'Node.js', 'AI']
  },
  {
    id: 6,
    category: 'sde',
    title: 'Assistive Navigation System',
    description: 'Technology solution designed to improve mobility and navigation for visually impaired users.',
    features: ['Obstacle Detection', 'Voice Guidance', 'Smart Navigation', 'Accessibility First'],
    tech: ['IoT', 'AI', 'Python']
  },
  {
    id: 7,
    category: 'sde',
    title: 'AutoCA Platform',
    description: 'Automation-driven Chartered Accountant service platform simplifying client interactions.',
    features: ['Client Management', 'Service Tracking', 'Document Handling', 'Workflow Optimization'],
    tech: ['React', 'Node.js', 'PostgreSQL']
  },
  {
    id: 8,
    category: 'sde',
    title: 'Feedback Management System',
    description: 'Enterprise feedback collection and management platform developed using JSP technology.',
    features: ['Feedback Submission', 'Admin Dashboard', 'Data Management', 'Reporting System'],
    tech: ['JSP', 'Java', 'MySQL']
  },
  // AI
  {
    id: 9,
    category: 'ai',
    title: 'AI Career Assistant',
    description: 'Personalized career guidance system with resume analysis and interview preparation.',
    features: ['Resume Analysis', 'Interview Prep', 'Career Guidance', 'Recommendations'],
    tech: ['LLMs', 'Python', 'OpenAI']
  },
  {
    id: 10,
    category: 'ai',
    title: 'AI Research Assistant',
    description: 'Tool for summarizing research papers and extracting knowledge using advanced AI models.',
    features: ['Paper Summarization', 'Knowledge Extraction', 'Literature Review', 'AI Insights'],
    tech: ['LLMs', 'NLP', 'Python']
  },
  {
    id: 11,
    category: 'ai',
    title: 'Multi-Agent Business Intelligence System',
    description: 'Automated research and data collection system using multiple AI agents for business insights.',
    features: ['Automated Research', 'Data Collection', 'Business Analytics', 'Decision Support'],
    tech: ['Agentic AI', 'Python', 'LangChain']
  },
  // Automation
  {
    id: 12,
    category: 'automation',
    title: 'AI Recruitment Automation System',
    description: 'End-to-end recruitment workflow from submission to automated communication.',
    features: ['AI Screening', 'Candidate Evaluation', 'Automated Communication', 'DB Update'],
    tech: ['n8n', 'OpenAI', 'Gmail', 'Google Sheets']
  },
  {
    id: 13,
    category: 'automation',
    title: 'Lead Generation & Outreach Automation',
    description: 'Automated pipeline for collecting leads and sending personalized AI-driven outreach.',
    features: ['Lead Collection', 'Data Enrichment', 'AI Personalization', 'Email Automation'],
    tech: ['n8n', 'APIs', 'CRM']
  },
  {
    id: 14,
    category: 'automation',
    title: 'Content Creation Automation System',
    description: 'Workflow for research, content generation, and publishing across platforms.',
    features: ['Research', 'AI Content Gen', 'Publishing', 'Analytics Tracking'],
    tech: ['n8n', 'AI Models', 'Social APIs']
  },
  {
    id: 15,
    category: 'automation',
    title: 'Business Operations Automation Suite',
    description: 'Comprehensive suite for processing forms, approval flows, and reporting.',
    features: ['Form Processing', 'Approval Flow', 'Notifications', 'Reporting Dashboard'],
    tech: ['n8n', 'Google Workspace', 'APIs']
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-gray-50 w-full min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter mb-8">
            Selected <span className="text-[#ff2a2a]">Works</span>
          </h2>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-12">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  filter === cat.id 
                    ? 'bg-[#ff2a2a] text-white shadow-lg' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col group"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ff2a2a] bg-red-50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-[10px] font-bold text-gray-400 uppercase">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight group-hover:text-[#ff2a2a] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm font-medium mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-8">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-bold text-gray-700">
                        <div className="w-1 h-1 bg-[#ff2a2a] rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button className="w-full py-4 rounded-2xl bg-gray-900 text-white font-bold text-sm uppercase tracking-widest hover:bg-[#ff2a2a] transition-all duration-300 group-hover:shadow-lg">
                    Explore Project
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
