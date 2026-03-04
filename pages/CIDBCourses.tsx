
import React from 'react';
import { ArrowLeft, Award, Clock, Users, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import acmvImg from '../assets/images/certification/cidb courses/Air Conditioning & Mechanical Ventilation.png';
import fireProtectionImg from '../assets/images/certification/cidb courses/Fire Protection.png';
import ccmImg from '../assets/images/certification/cidb courses/Certified Construction Manager Training.png';
import ccpmImg from '../assets/images/certification/cidb courses/Certified Construction Project Manager Training.png';

const CIDBCourses: React.FC = () => {
  const courses = [
    {
      title: "Certified Construction Manager (CCM) Training",
      icon: <Award className="w-8 h-8 text-blue-600" />,
      image: ccmImg,
      duration: "5 Days",
      audience: "Aspiring and practicing site managers, construction professionals",
      description: "The Certified Construction Manager (CCM) Training prepares construction professionals to achieve the prestigious CIDB Malaysia Level 5 certification, recognizing excellence in on-site construction management. Awarded by the Construction Industry Development Board Malaysia (CIDB), the CCM credential formalizes the operational leadership skills required to manage daily site activities effectively — from tendering and mobilization to construction execution and project close-out. This programme equips participants with the practical competencies to coordinate resources, supervise site teams, ensure regulatory compliance, and deliver projects safely, efficiently, and within budget. Designed for aspiring and practicing site managers, this training strengthens tactical decision-making and reinforces professional credibility within Malaysia's construction industry.",
      suitableFor: "Aspiring and practicing site managers, construction professionals seeking CIDB Level 5 certification."
    },
    {
      title: "Certified Construction Project Manager (CCPM) Training",
      icon: <BadgeCheck className="w-8 h-8 text-blue-600" />,
      image: ccpmImg,
      duration: "5 Days",
      audience: "Senior project leaders, aspiring project directors, project managers",
      description: "The Certified Construction Project Manager (CCPM) Training prepares construction professionals to attain the prestigious CIDB Malaysia Level 6 certification — a formal recognition of advanced project leadership competency in Malaysia's construction industry. Established under the provisions of CIDB Act 520, the CCPM credential validates qualified and competent project managers who are authorized to lead construction projects in compliance with national regulatory requirements. Positioned at the strategic management level, this programme equips participants with the technical expertise, managerial capability, and professional judgment required to manage projects across the overall project lifecycle. Designed for senior project leaders and aspiring project directors, the CCPM Training strengthens strategic decision-making, governance oversight, and industry credibility at the highest operational tier.",
      suitableFor: "Senior project leaders, aspiring project directors, and project managers seeking CIDB Level 6 certification."
    },
    {
      title: "Air Conditioning & Mechanical Ventilation (ACMV) Course",
      icon: <Award className="w-8 h-8 text-blue-600" />,
      image: acmvImg,
      duration: "5 Days",
      audience: "Contractors, site supervisors, engineers, and technical personnel",
      description: "A 5-day practical course designed to equip contractors and construction professionals with essential knowledge and hands-on understanding of air conditioning and mechanical ventilation (ACMV) systems. Participants will gain exposure to ACMV system fundamentals, including installation methods, operation, maintenance, safety practices, and compliance with current industry standards. The course also emphasizes quality workmanship and best practices to improve system performance and project outcomes. Upon successful completion, participants will receive CIDB certification, supporting PKK registration and contributing towards CIDB CPD points.",
      suitableFor: "Contractors, site supervisors, engineers, and technical personnel involved in building services works."
    },
    {
      title: "Fire Protection Course",
      icon: <BadgeCheck className="w-8 h-8 text-blue-600" />,
      image: fireProtectionImg,
      duration: "5 Days",
      audience: "Site supervisors, safety officers, engineers, contractors",
      description: "A 5-day intensive course designed to equip participants with essential knowledge and practical skills in fire prevention, fire safety, and emergency response for workplaces and construction sites. Participants will learn common causes of fire, preventive measures, proper use of fire extinguishing equipment, and effective emergency response and evacuation procedures, in line with Malaysian safety standards and regulations. CIDB certification is awarded upon completion, supporting PKK applications and contributing towards CIDB CPD points.",
      suitableFor: "Site supervisors, safety officers, engineers, contractors, and construction professionals."
    }
  ];

  return (
    <div className="pb-24">
      {/* Detail Hero */}
      <div className="relative bg-slate-950 py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000"
            alt="Construction Training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/certification" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-12 group">
            <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to Certification
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">CIDB Certified Courses</h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              Enhance technical proficiency within the construction sector through CIDB claimable programs. Specialized training modules designed to meet Construction Industry Development Board standards, supporting PKK registration and CPD points.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        {/* Stack of Alternating Horizontal Cards */}
        <div className="space-y-12">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/30 flex flex-col ${idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} overflow-hidden group transition-all duration-500 hover:shadow-2xl`}
            >
              {/* Details Side */}
              <div className="flex-1 p-10 md:p-14 lg:p-16 flex flex-col justify-center">
                <div className="mb-6 p-3 bg-blue-50 w-fit rounded-xl">
                  {course.icon}
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">{course.title}</h3>
                
                {/* Course Meta */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-sm font-medium text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg">
                    <Clock className="w-4 h-4 mr-2 text-blue-600" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-sm font-medium text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg">
                    <Users className="w-4 h-4 mr-2 text-blue-600" />
                    CIDB Certified
                  </div>
                </div>

                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Suitable For */}
                <div className="mb-6 p-4 bg-blue-50/50 border border-blue-100 rounded-xl">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Suitable For</h4>
                  <p className="text-slate-600 text-sm">{course.suitableFor}</p>
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  <button className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-slate-900/10">
                    Register for This Course
                  </button>
                </div>
              </div>

              {/* Image Side */}
              <div className="md:w-2/5 lg:w-1/2 min-h-[350px] md:min-h-full relative overflow-hidden bg-slate-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-1000"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-40">
          <div className="text-center mb-20">
            <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Why Choose CIDB</span>
            <h2 className="text-4xl font-bold text-slate-900">Certification Benefits</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "CIDB Certification", desc: "Official certification awarded upon successful course completion." },
              { step: "02", title: "PKK Support", desc: "Supports PKK registration applications for contractors." },
              { step: "03", title: "CPD Points", desc: "Contributes towards CIDB Continuing Professional Development points." },
              { step: "04", title: "Industry Recognition", desc: "Nationally recognized credentials for construction professionals." }
            ].map((m, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-white border-2 border-blue-600 rounded-lg flex items-center justify-center font-bold text-blue-600 mb-6 shadow-md">
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

export default CIDBCourses;
