import React from 'react';

const TimelineItem = ({ title, organization, period, responsibilities, type, delay }) => (
  <div className="relative pl-12 pb-16 last:pb-0" data-aos="fade-up" data-aos-delay={delay}>
    {/* Timeline Line */}
    <div className="absolute left-0 top-0 h-full w-[2px] bg-gray-100"></div>
    
    {/* Timeline Dot */}
    <div className={`absolute left-[-6px] top-0 w-3 h-3 rounded-full border-2 border-white shadow-sm z-10 ${
      type === 'work' ? 'bg-[#ff2a2a]' : 'bg-black'
    }`}></div>

    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
      <div>
        <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-2 inline-block ${
          type === 'work' ? 'bg-red-50 text-[#ff2a2a]' : 'bg-gray-100 text-black'
        }`}>
          {type === 'work' ? 'Professional' : 'Leadership'}
        </span>
        <h3 className="text-2xl font-black text-gray-900 leading-tight">{title}</h3>
        <p className="text-lg font-bold text-gray-600">{organization}</p>
      </div>
      <div className="text-sm font-mono font-bold text-gray-400 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100 self-start">
        {period}
      </div>
    </div>

    <ul className="space-y-3">
      {responsibilities.map((resp, i) => (
        <li key={i} className="flex items-start gap-3 text-sm font-medium text-gray-500 leading-relaxed">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0"></span>
          {resp}
        </li>
      ))}
    </ul>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: "Business Development Executive Intern",
      organization: "KP Webbate Technologies LLP",
      period: "Internship",
      responsibilities: [
        "Handled client communication and lead generation initiatives.",
        "Gained deep exposure to startup operations and business development.",
        "Managed stakeholder engagement and project coordination.",
        "Assisted in developing business strategies and market research."
      ],
      delay: 100
    },
    {
      type: 'leadership',
      title: "Secretary – Placement Cell",
      organization: "St. John College of Engineering and Management",
      period: "Final Year",
      responsibilities: [
        "Coordinate placement-related activities and campus recruitment drives.",
        "Support recruiter engagement initiatives and build industry relationships.",
        "Assist students with internship opportunities and career guidance.",
        "Collaborate with college administration to streamline the placement process."
      ],
      delay: 200
    },
    {
      type: 'leadership',
      title: "Entrepreneurship Director",
      organization: "Rotary Club of Virar",
      period: "Leadership Role",
      responsibilities: [
        "Lead entrepreneurship initiatives and startup-focused events.",
        "Organize innovation workshops and networking opportunities for students.",
        "Promote leadership and problem-solving thinking among the youth.",
        "Collaborate with industry experts to mentor aspiring entrepreneurs."
      ],
      delay: 300
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-white w-full">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter mb-4">
            Journey & <span className="text-[#ff2a2a]">Impact</span>
          </h2>
          <p className="text-gray-500 font-medium max-w-xl">
            A timeline of my professional experience and leadership roles, demonstrating my commitment to growth and community impact.
          </p>
        </div>

        <div className="relative">
          {experiences.map((exp, i) => (
            <TimelineItem key={i} {...exp} />
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-24 bg-gray-50 rounded-[2.5rem] p-8 md:p-12 border border-gray-100" data-aos="zoom-in">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-black text-white rounded-full mb-4 inline-block">
                Current Education
              </span>
              <h3 className="text-3xl font-black text-gray-900">B.Tech Information Technology</h3>
              <p className="text-xl font-bold text-[#ff2a2a]">St. John College of Engineering and Management</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-mono font-bold text-gray-400">2022 — 2026</p>
              <p className="text-lg font-black text-gray-900">Final Year</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            {["Mumbai, India", "Major: IT", "Focus: Software & AI"].map((tag, i) => (
              <span key={i} className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-white px-4 py-2 rounded-lg border border-gray-200">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
