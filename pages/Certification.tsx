
import React from 'react';
import { CheckCircle, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HrdcLogo, CidbLogo, BritishCouncilLogo, DoshLogo, NioshLogo } from '../assets/images';
import doshImage from '../assets/images/certification/dosh.png';
import nioshImage from '../assets/images/certification/niosh.png';
import cidbImage from '../assets/images/certification/cidb.png';

const Certification: React.FC = () => {
  const certs = [
    {
      title: "HRD Corp Registered Training",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
      desc: "Accelerate organizational growth through HRD Corp claimable programs, maximizing your human capital investment with approved skill development pathways tailored for corporate excellence."
    },
    {
      title: "DOSH Accredited Programs",
      image: doshImage,
      desc: "Ensure total compliance with the Department of Occupational Safety & Health (DOSH) through specialized competency programs and regulatory-mandated safety certifications for industrial operations."
    },
    {
      title: "NIOSH Competency Training",
      image: nioshImage,
      desc: "Technical and operational safety training validated by the National Institute of Occupational Safety and Health (NIOSH), designed for Safety & Health Officers (SHO) and high-risk industrial sectors."
    },
    {
      title: "CIDB Certified Courses",
      image: cidbImage,
      desc: "Enhance technical proficiency within the construction sector through CIDB claimable programs. We provide specialized training modules designed to meet Construction Industry Development Board standards, focusing on project management and advanced infrastructure techniques.",
      link: "/certification/cidb-courses"
    }
  ];

  const partners = [
    { logo: <HrdcLogo className="h-10 w-auto" />, name: "HRD Corp", url: "https://hrdcorp.gov.my" },
    { logo: <DoshLogo className="h-14 w-auto" />, name: "DOSH", url: "https://www.dosh.gov.my" },
    { logo: <NioshLogo className="h-12 w-auto" />, name: "NIOSH", url: "https://www.niosh.com.my" },
    { logo: <CidbLogo className="h-10 w-auto" />, name: "CIDB Malaysia", url: "https://www.cidb.gov.my" },
    { logo: <BritishCouncilLogo className="h-10 w-auto" />, name: "British Council", url: "https://www.britishcouncil.my" }
  ];

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-32 text-white overflow-hidden">
        {/* Fixed Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c7377fb386b0?auto=format&fit=crop&q=80&w=2000"
            alt="Professional Achievement"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-in fade-in slide-in-from-left-4 duration-700">
              <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Accreditation & Certification</h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-10">
                ThinkLab partners with Malaysia's leading regulatory bodies to provide recognized professional credentials that validate your industrial competency and technical mastery.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center text-blue-400 font-medium"><CheckCircle className="mr-2 w-5 h-5" /> Regulatory Compliance</div>
                <div className="flex items-center text-blue-400 font-medium"><CheckCircle className="mr-2 w-5 h-5" /> Certified Assessors</div>
              </div>
            </div>
            <div className="hidden md:block animate-in fade-in slide-in-from-right-4 duration-700">
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-4 border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200"
                  alt="Corporate Success"
                  className="rounded-2xl shadow-xl w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Recognized Competency Frameworks</h2>
          <p className="text-slate-600">Explore our accredited pathways designed for professional mobility and industrial safety compliance.</p>
        </div>

        <div className="space-y-8">
          {certs.map((c, i) => (
            <div key={i} className="flex flex-col lg:flex-row gap-0 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all overflow-hidden group items-stretch">
              <div className="lg:w-1/3 min-h-[240px] lg:min-h-[320px] overflow-hidden relative">
                <img
                  src={c.image}
                  alt={c.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="lg:w-2/3 p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                    <Award size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{c.title}</h3>
                </div>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  {c.desc}
                </p>
                <div className="flex items-center gap-4">
                  {c.link ? (
                    <Link to={c.link}>
                      <button className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-slate-900/10">
                        View Courses
                      </button>
                    </Link>
                  ) : (
                    <button className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-slate-900/10">
                      Register for Program
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance & Accreditation Logo Cloud */}
        <div className="mt-32 pt-20 border-t border-slate-200">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight uppercase tracking-[0.2em] text-xs text-slate-500">Compliance & Accreditation</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We collaborate with global and local regulatory bodies to ensure your credentials meet the highest industry benchmarks.</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 pb-10">
            {partners.map((p, i) => (
              <a
                key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110 ${p.name === "British Council" ? "hidden" : ""}`}
                title={p.name}
              >
                {p.logo}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
