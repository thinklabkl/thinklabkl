
import React from 'react';
import { ArrowLeft, Trophy, Brain, Target, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import executiveDevelopmentImg from '../assets/images/solution/Customized Training/Executive Development.png';
import leadershipExcellenceImg from '../assets/images/solution/Customized Training/Leadership Excellence.png';
import softSkillsMasteryImg from '../assets/images/solution/Customized Training/Soft Skills & Mastery.png';

const CustomizedTraining: React.FC = () => {
  const pillars = [
    {
      title: "Executive Development",
      icon: <Target className="w-8 h-8 text-blue-600" />,
      image: executiveDevelopmentImg,
      description: "Bespoke programs designed for C-Suite and senior management, focusing on high-stakes decision making, global market trends, and strategic organizational culture.",
      points: ["Visionary Leadership", "Crisis Management", "Stakeholder Communication", "Digital Governance"]
    },
    {
      title: "Leadership Excellence",
      icon: <Trophy className="w-8 h-8 text-blue-600" />,
      image: leadershipExcellenceImg,
      description: "Empowering middle management and emerging leaders with the tools to scale operations, manage high-performance teams, and bridge the gap between strategy and execution.",
      points: ["Conflict Resolution", "Performance Coaching", "Agile Project Delivery", "Inclusion & Diversity"]
    },
    {
      title: "Soft Skills & Mastery",
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      image: softSkillsMasteryImg,
      description: "Developing the essential interpersonal competencies that drive workplace harmony and individual productivity in a hybrid, digital-first world.",
      points: ["Emotional Intelligence", "Advanced Negotiation", "Persuasive Presentation", "Time Management"]
    }
  ];

  return (
    <div className="pb-24">
      {/* Detail Hero */}
      <div className="relative bg-slate-950 py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Corporate Environment" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/solutions" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-12 group">
            <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to Solutions
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">Customized Corporate Training</h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              Transforming organizations through precision-engineered learning experiences. Our training is not a product; it is a strategic intervention designed to solve specific performance gaps and accelerate growth.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        {/* Stack of Alternating Horizontal Cards */}
        <div className="space-y-12">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/30 flex flex-col ${idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} overflow-hidden group transition-all duration-500 hover:shadow-2xl`}
            >
              {/* Details Side */}
              <div className="flex-1 p-10 md:p-14 lg:p-16 flex flex-col justify-center">
                <div className="mb-6 p-3 bg-blue-50 w-fit rounded-xl">
                  {pillar.icon}
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">{pillar.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-xl">
                  {pillar.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {pillar.points.map((p, i) => (
                    <div key={i} className="flex items-center text-xs font-bold text-slate-700 uppercase tracking-widest">
                      <CheckCircle2 size={16} className="text-blue-500 mr-3 shrink-0" /> {p}
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Side */}
              <div className="md:w-2/5 lg:w-1/2 min-h-[350px] md:min-h-full relative overflow-hidden">
                <img 
                  src={pillar.image} 
                  alt={pillar.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-1000"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Methodology Section */}
        <div className="mt-40">
          <div className="text-center mb-20">
            <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">ThinkLab Standard Operating Procedure</span>
            <h2 className="text-4xl font-bold text-slate-900">Strategic Methodology</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-slate-200 -z-10"></div>
            
            {[
              { step: "01", title: "Diagnostic", desc: "In-depth audits to understand unique organizational challenges." },
              { step: "02", title: "Curation", desc: "Curriculum designed by experts using real-world industrial case studies." },
              { step: "03", title: "Delivery", desc: "High-impact workshops, digital modules, or immersive simulations." },
              { step: "04", title: "Evaluation", desc: "Post-training ROI reports ensuring lasting performance transformation." }
            ].map((m, i) => (
              <div key={i} className="bg-white md:bg-transparent p-8 md:p-0 rounded-2xl border border-slate-100 md:border-none shadow-sm md:shadow-none">
                <div className="w-12 h-12 bg-white border-2 border-blue-600 rounded-lg flex items-center justify-center font-bold text-blue-600 mb-6 mx-auto md:mx-0 shadow-md">
                  {m.step}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{m.title}</h4>
                <p className="text-slate-500 leading-relaxed text-sm">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizedTraining;
