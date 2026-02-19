
import React, { useState, useEffect } from 'react';
import { Briefcase, ShieldCheck, Users, Users2, Zap, ArrowRight, ExternalLink, X, Maximize2, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import customizedTrainingImage from '../assets/images/solution/Customized Corporate Training.png';
import hseCompetencyImage from '../assets/images/solution/HSE Competency.png';
import eventManagementImage from '../assets/images/solution/Event Management.png';
import consultingServicesImage from '../assets/images/solution/Consulting Services.png';

// Popup images
import propertyDevelopmentImg from '../assets/images/solution/Consulting Services/Project Management/Property Development.png';
import solarSystemsImg from '../assets/images/solution/Consulting Services/Project Management/Solar Systems.png';
import wasteToEnergyImg from '../assets/images/solution/Consulting Services/Project Management/Waste to Energy.png';
import sportsComplexImg from '../assets/images/solution/Consulting Services/Project Management/Sport Complex.png';
import smartCityImg from '../assets/images/solution/Consulting Services/Project Management/Smart City.png';
import greenBuildingImg from '../assets/images/solution/Consulting Services/Project Management/Green Building.png';
import tinyHome1Img from '../assets/images/solution/Consulting Services/Project Management/Prefabricated Tiny Home 1.jpeg';
import tinyHome2Img from '../assets/images/solution/Consulting Services/Project Management/Prefabricated Tiny Home 2.jpeg';

// Corporate Event images
import corporateGalaDinnerImg from '../assets/images/solution/Event Management/Corporate Event/Corporate Gala Dinner.png';
import techInnovationExpoImg from '../assets/images/solution/Event Management/Corporate Event/Tech Innovation Expo.png';
import strategicWorkshopImg from '../assets/images/solution/Event Management/Corporate Event/Strategic Workshop.png';
import productLaunchEventImg from '../assets/images/solution/Event Management/Corporate Event/Product Launch Event.png';
import sustainabilityCampaignImg from '../assets/images/solution/Event Management/Corporate Event/Sustainability Campaign.png';
import townHallMeetingImg from '../assets/images/solution/Event Management/Corporate Event/Town Hall Meeting.png';

interface ShowcaseProps {
  onClose: () => void;
  title: string;
  projects: any[];
}

const ShowcasePopup: React.FC<{ onClose: () => void; title: string; projects: any[] }> = ({ onClose, title, projects }) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center hidden lg:flex">
      {/* Subtle Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-500 cursor-pointer"
        onClick={onClose}
      ></div>

      {/* Centered Panel */}
      <div className="relative w-full max-w-5xl bg-white border border-slate-200 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] animate-in fade-in zoom-in-95 duration-300 overflow-hidden rounded-none flex flex-col max-h-[90vh]">

        {/* Gallery Lightbox Overlay */}
        {previewImage && (
          <div className="absolute inset-0 z-[110] bg-slate-950 flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/50 backdrop-blur">
              <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em]">Visual Identification</span>
              <button
                onClick={() => setPreviewImage(null)}
                className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Back to Gallery</span>
                <X size={24} />
              </button>
            </div>
            <div className="flex-grow flex items-center justify-center p-8 bg-[radial-gradient(circle_at_center,_#1e293b_0%,_#020617_100%)]">
              <img
                src={previewImage}
                className="max-h-full max-w-full object-contain shadow-2xl animate-in zoom-in-90 duration-500"
                alt="Preview"
              />
            </div>
            <div className="p-4 bg-slate-900/80 border-t border-slate-800 text-center">
              <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em]">ThinkLab {title} Showcase &copy; Strategic Execution</p>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between p-8 bg-white border-b border-slate-100 shrink-0">
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-[0.4em]">{title}</h4>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hidden sm:inline">Click images to expand</span>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-2 group"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest">Close Panel</span>
              <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>
        </div>

        <div className="flex-grow overflow-y-auto bg-slate-200 p-1">
          <div className="grid grid-cols-2 gap-1">
            {projects.map((p, idx) => (
              <div
                key={idx}
                className="relative group/proj overflow-hidden bg-slate-100 rounded-none cursor-pointer aspect-square"
              >
                  <div className="w-full h-full" onClick={() => setPreviewImage(p.img || null)}>
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover/proj:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <div className="bg-white/90 p-4 rounded-full shadow-xl translate-y-4 group-hover/proj:translate-y-0 transition-transform">
                        <Maximize2 className="text-blue-600 w-5 h-5" />
                      </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent opacity-90 group-hover/proj:opacity-100 transition-opacity flex items-end p-8 pointer-events-none">
                      <div>
                        <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-3 block">ThinkLab</span>
                        <span className="text-white text-xl font-bold uppercase tracking-[0.2em]">{p.title}</span>
                      </div>
                    </div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Solutions: React.FC = () => {
  const [showProjectShowcase, setShowProjectShowcase] = useState(false);
  const [showEventsShowcase, setShowEventsShowcase] = useState(false);

  useEffect(() => {
    const handleScrollToAnchor = () => {
      const hash = window.location.hash;
      const parts = hash.split('#');
      // Parts would be ['', '/solutions', 'anchor-id']
      if (parts.length > 2) {
        const id = parts[2];
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 150);
        }
      }
    };

    handleScrollToAnchor();
    window.addEventListener('hashchange', handleScrollToAnchor);
    return () => window.removeEventListener('hashchange', handleScrollToAnchor);
  }, []);

  const projectPortfolio = [
    { title: "Property Development", img: propertyDevelopmentImg },
    { title: "Solar Systems", img: solarSystemsImg },
    { title: "Waste-to-energy", img: wasteToEnergyImg },
    { title: "Sports Complex", img: sportsComplexImg },
    { title: "Prefabricated Tiny Home", img: tinyHome1Img },
    { title: "Prefabricated Tiny Home", img: tinyHome2Img },
    { title: "Smart City", img: smartCityImg },
    { title: "Green Building", img: greenBuildingImg },
  ];

  const eventPortfolio = [
    { title: "Corporate Gala Dinner", img: corporateGalaDinnerImg },
    { title: "Tech Innovation Expo", img: techInnovationExpoImg },
    { title: "Strategic Workshop", img: strategicWorkshopImg },
    { title: "Product Launch Event", img: productLaunchEventImg },
    { title: "Sustainability Campaign", img: sustainabilityCampaignImg },
    { title: "Town Hall Meeting", img: townHallMeetingImg },
  ];

  const solutions = [
    {
      icon: <Users2 className="w-8 h-8 text-blue-600" />,
      title: "Customized Corporate Training",
      image: customizedTrainingImage,
      detailLink: "/solutions/customized-training",
      features: [
        "Executive Development Programs",
        "Leadership & Managerial Excellence",
        "Soft Skills & Self-Management"
      ]
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "HSE Competency",
      image: hseCompetencyImage,
      detailLink: "/solutions/hse-competency",
      features: [
        "Safety Leadership Frameworks",
        "Risk Assessment Mastery",
        "Environmental Compliance Auditing"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      id: "event-management",
      title: "Event Management",
      image: eventManagementImage,
      features: [
        "Corporate Events",
        "Conferences & Exhibitions",
        "Team Building Retreats",
        "Sports & Carnivals"
      ]
    },
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      id: "consulting-services",
      title: "Consulting Services",
      image: consultingServicesImage,
      features: [
        "PR & Branding",
        "ESG Consulting",
        "IT, AI & Blockchain Consulting",
        "Project Management",
        "Professional Proofreading"
      ]
    }
  ];

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <div className="relative bg-slate-950 py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
            alt="Corporate Skyscrapers"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 to-slate-950"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">Strategic Corporate Solutions</h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              ThinkLab provides executive-level consultancy and training to help organizations navigate industrial shifts, safety requirements, and competency evolution with precision.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {solutions.map((s, i) => (
            <div
              key={i}
              id={s.id}
              className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500 overflow-visible flex flex-col relative scroll-mt-32"
            >
              <div className="relative h-64 overflow-hidden rounded-t-3xl">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                <div className="absolute top-6 left-6 p-3 bg-white/90 backdrop-blur shadow-lg rounded-2xl text-blue-600">
                  {s.icon}
                </div>
              </div>

              <div className="p-10 pt-4 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{s.title}</h3>
                <ul className="space-y-4 mb-10">
                  {s.features.map((f, j) => {
                    const isProjectManagement = f === "Project Management" && s.title === "Consulting Services";
                    const isCorporateEvents = f === "Corporate Events" && s.title === "Event Management";
                    const isProofreading = f === "Professional Proofreading" && s.title === "Consulting Services";

                    const isInteractive = isProjectManagement || isCorporateEvents || isProofreading;

                    return (
                      <li
                        key={j}
                        className={`flex items-center text-slate-600 relative ${isInteractive ? 'cursor-pointer hover:text-blue-600 transition-colors' : ''}`}
                        onClick={() => {
                          if (isProjectManagement) setShowProjectShowcase(true);
                          if (isCorporateEvents) setShowEventsShowcase(true);
                        }}
                      >
                        <Zap size={16} className={`mr-3 shrink-0 ${isInteractive ? 'text-blue-600 animate-pulse' : 'text-blue-500'}`} />
                        {isProofreading ? (
                          <Link
                            to="/training#Language"
                            className="text-sm font-medium text-blue-700 border-b border-dashed border-blue-200 pb-0.5 hover:text-blue-800 transition-colors"
                          >
                            {f}
                          </Link>
                        ) : (
                          <span className={`text-sm font-medium ${isInteractive ? 'text-blue-700 border-b border-dashed border-blue-200 pb-0.5' : ''}`}>
                            {f}
                          </span>
                        )}
                        {isInteractive && (
                          <ExternalLink size={12} className="ml-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </li>
                    );
                  })}
                </ul>

                {s.detailLink && (
                  <div className="mt-auto pt-6 border-t border-slate-50">
                    <Link
                      to={s.detailLink}
                      className="inline-flex items-center text-blue-600 font-bold text-sm tracking-wide uppercase hover:text-blue-700 transition-colors group/btn"
                    >
                      Get More Details <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Portals */}
        {showProjectShowcase && (
          <ShowcasePopup
            title="Strategic Portfolio Management"
            projects={projectPortfolio}
            onClose={() => setShowProjectShowcase(false)}
          />
        )}

        {showEventsShowcase && (
          <ShowcasePopup
            title="Executive Event Coordination"
            projects={eventPortfolio}
            onClose={() => setShowEventsShowcase(false)}
          />
        )}

        {/* Strategic CTA */}
        <div className="mt-24 p-12 bg-blue-600 rounded-[2.5rem] text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl shadow-blue-600/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-80 h-80 bg-white/10 rounded-full blur-3xl transition-transform group-hover:scale-110 duration-700"></div>
          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <h3 className="text-3xl font-bold mb-4">Request Your Strategic Roadmap</h3>
            <p className="text-blue-100 text-lg leading-relaxed">
              Unlock a comprehensive blueprint for organizational excellence. Our multidisciplinary team integrates training, HSE, and ESG consulting to build a future-proof workforce strategy for your enterprise.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold hover:bg-blue-50 transition-all whitespace-nowrap shadow-xl relative z-10 flex items-center gap-2 group/btn"
          >
            Connect with an Expert <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
