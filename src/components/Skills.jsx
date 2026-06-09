import React from 'react';
import { motion } from 'framer-motion';

const SkillCategory = ({ title, skills }) => (
  <div className="mb-12" data-aos="fade-up">
    <h3 className="text-xl font-bold mb-6 text-gray-900 border-l-4 border-[#ff2a2a] pl-4 uppercase tracking-wider">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill, index) => (
        <div key={index} className="group">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-bold text-gray-700 group-hover:text-[#ff2a2a] transition-colors">{skill.name}</span>
            <span className="text-xs font-mono text-gray-400">{skill.level}%</span>
          </div>
          <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-[#ff2a2a] rounded-full group-hover:bg-black transition-colors"
            ></motion.div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillData = [
    {
      title: "Quantitative & Analytical",
      skills: [
        { name: "Quantitative Research", level: 85 },
        { name: "Statistics", level: 90 },
        { name: "Data Analysis", level: 88 },
        { name: "Financial Markets", level: 82 },
        { name: "Trading Concepts", level: 80 },
        { name: "Market Microstructure", level: 75 },
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "SQL", level: 88 },
        { name: "C++", level: 80 },
        { name: "C", level: 75 },
      ]
    },
    {
      title: "Software Engineering",
      skills: [
        { name: "Data Structures & Algorithms", level: 92 },
        { name: "Object Oriented Programming", level: 90 },
        { name: "System Design", level: 80 },
        { name: "REST APIs", level: 88 },
        { name: "Backend Development", level: 85 },
        { name: "Software Architecture", level: 78 },
      ]
    },
    {
      title: "Artificial Intelligence",
      skills: [
        { name: "Prompt Engineering", level: 95 },
        { name: "Agentic AI", level: 85 },
        { name: "LLM Applications", level: 90 },
        { name: "Machine Learning", level: 82 },
        { name: "NLP", level: 80 },
        { name: "AI Automation", level: 88 },
      ]
    },
    {
      title: "Workflow Automation",
      skills: [
        { name: "n8n", level: 92 },
        { name: "API Integrations", level: 90 },
        { name: "Business Process Automation", level: 85 },
        { name: "Workflow Design", level: 88 },
        { name: "Automation Architecture", level: 82 },
        { name: "AI Workflow Systems", level: 85 },
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "React", level: 88 },
        { name: "Node.js", level: 85 },
        { name: "JSP", level: 70 },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 82 },
      ]
    },
    {
      title: "Cybersecurity",
      skills: [
        { name: "Network Security", level: 75 },
        { name: "Linux Security", level: 80 },
        { name: "Parrot Security OS", level: 78 },
        { name: "Security Fundamentals", level: 82 },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git/GitHub", level: 92 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 90 },
        { name: "Figma", level: 75 },
        { name: "Google Cloud", level: 80 },
        { name: "Vertex AI", level: 78 },
        { name: "Linux", level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-white w-full">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter mb-4">
            Technical <span className="text-[#ff2a2a]">Arsenal</span>
          </h2>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities across various domains of software engineering, AI, and quantitative research.
          </p>
        </div>

        <div className="space-y-4">
          {skillData.map((category, index) => (
            <SkillCategory key={index} title={category.title} skills={category.skills} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
