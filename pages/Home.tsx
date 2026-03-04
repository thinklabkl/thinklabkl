
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Cpu, LineChart, Users, Zap, X, ChevronLeft, ChevronRight } from 'lucide-react';
import heroImage from '../assets/images/home/hero.png';

// Import Highlight Images for Showcase
import event02 from '../assets/images/highlight/event/Event 02.jpeg';
import event08 from '../assets/images/highlight/event/Event 08.jpeg';
import facility03 from '../assets/images/highlight/facilities/Facility 03.jpeg';
import facility04 from '../assets/images/highlight/facilities/Facility 04.png';

import training01 from '../assets/images/highlight/training/Training 01.jpg';
import training02 from '../assets/images/highlight/training/Training 02.jpg';
import training07 from '../assets/images/highlight/training/Training 07.jpeg';

const Home: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const focuses = [
    {
      icon: <LineChart className="w-8 h-8 text-blue-500" />,
      title: "Corporate Upskilling",
      description: "Tailored executive trainings and workforce development programs designed to bridge the talent gap and foster leadership excellence."
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-500" />,
      title: "Digital & Robotics",
      description: "Driving industrial automation and digital literacy through advanced training in robotics, AI, smart systems, and emerging technologies."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
      title: "HSE Certification & Assessment",
      description: "Comprehensive health, safety, and environment programs with accredited certification pathways for industrial compliance."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Event Management",
      description: "End-to-end strategic planning and execution of high-impact corporate events, summits, professional workshops, and networking galas."
    }
  ];

  const showcaseImages = [
    { url: event08, alt: "ThinkLab Innovation Awards", span: "md:col-span-2 md:row-span-2" },
    { url: training01, alt: "Technical Safety Training", span: "" },
    { url: facility03, alt: "Advanced Computer Lab", span: "" },
    { url: event02, alt: "Global Leadership Summit", span: "md:col-span-2" },
    { url: training02, alt: "Industrial Skills Workshop", span: "" },
    { url: training07, alt: "Workplace Safety Assessment", span: "" },
    { url: facility04, alt: "ThinkLab Innovation Center", span: "md:col-span-2" }
  ];

  const selectedItem = selectedIndex !== null ? showcaseImages[selectedIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? showcaseImages.length - 1 : selectedIndex - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === showcaseImages.length - 1 ? 0 : selectedIndex + 1);
  };

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem]);

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative bg-slate-950 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src={heroImage}
            alt="Corporate Environment"
            className="w-full h-full object-cover opacity-35 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/30 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(37,99,235,0.1),transparent_50%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
          <div className="text-left space-y-8 max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-4 animate-in fade-in slide-in-from-left-4 duration-700">
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              Next-Gen Corporate Development
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Master the Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Industry Excellence</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              ThinkLab is a multidisciplinary training and consultancy organization focused on high-stakes professional development and global competency.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <Link to="/solutions" className="bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center text-lg w-full sm:w-auto justify-center shadow-xl shadow-blue-600/20">
                Explore Solutions <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/training" className="bg-white/5 backdrop-blur-sm text-white px-10 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all border border-white/10 w-full sm:w-auto text-center text-lg">
                Training Catalog
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hidden md:block">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Key Business Areas Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Key Business Areas</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Tailored professional development pathways designed for measurable corporate impact.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {focuses.map((f, i) => (
            <div key={i} className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="mb-6">{f.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">50+</div>
              <div className="text-slate-500 text-sm uppercase tracking-widest font-semibold">Corporate Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">80+</div>
              <div className="text-slate-500 text-sm uppercase tracking-widest font-semibold">Specialized Modules</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">98%</div>
              <div className="text-slate-500 text-sm uppercase tracking-widest font-semibold">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">2k+</div>
              <div className="text-slate-500 text-sm uppercase tracking-widest font-semibold">Professionals Trained</div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Showcase Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Impact in Action</h2>
            <p className="text-slate-600">A glimpse into our high-performance training environments and corporate workshops.</p>
          </div>
          <Link to="/highlights" className="text-blue-600 font-bold flex items-center hover:text-blue-700 transition-colors group">
            View All Highlights <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {showcaseImages.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelectedIndex(i)}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${img.span}`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-xl animate-in fade-in duration-300"
            onClick={() => setSelectedIndex(null)}
          ></div>

          <div className="relative w-full h-full max-w-7xl mx-auto p-4 md:p-8 flex items-center justify-center animate-in zoom-in-95 duration-300 pointer-events-none">
            {/* Fixed Size Image Container */}
            <div className="relative pointer-events-auto w-full max-w-[900px] max-h-[600px] md:h-[600px] h-[50vh] bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center">
              <img
                src={selectedItem.url}
                alt={selectedItem.alt}
                className="w-full h-full object-contain"
              />


            </div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 z-50 p-2 text-white/70 hover:text-white transition-colors pointer-events-auto"
              aria-label="Close modal"
            >
              <X size={32} />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white text-white hover:text-slate-900 rounded-full transition-all backdrop-blur-md pointer-events-auto group"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white text-white hover:text-slate-900 rounded-full transition-all backdrop-blur-md pointer-events-auto group"
              aria-label="Next image"
            >
              <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>,
        document.body
      )}

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 rounded-[2.5rem] p-12 md:p-24 text-white relative overflow-hidden group">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1522207182399e-b89e7df830c6?auto=format&fit=crop&q=80&w=2000"
              alt="Team Meeting"
              className="w-full h-full object-cover opacity-15 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-blue-600/80 mix-blend-multiply"></div>
          </div>

          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to redefine your workforce capability?</h2>
            <p className="text-blue-100 text-xl mb-10 leading-relaxed max-w-2xl">
              Contact our consultancy team for a custom competency gap analysis and strategic training roadmap tailored to your industry needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all flex items-center shadow-lg">
                Make an Inquiry <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
