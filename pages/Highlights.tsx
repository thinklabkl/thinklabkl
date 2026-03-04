
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Camera, Users, Building2, Zap, ArrowLeft, X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Event Images
import event02 from '../assets/images/highlight/event/Event 02.jpeg';
import event08 from '../assets/images/highlight/event/Event 08.jpeg';
import event09 from '../assets/images/highlight/event/Event 09.jpeg';
import event10 from '../assets/images/highlight/event/Event 10.jpeg';
import event11 from '../assets/images/highlight/event/Event 11.jpeg';

// Facilities Images

import facility03 from '../assets/images/highlight/facilities/Facility 03.jpeg';
import facility04 from '../assets/images/highlight/facilities/Facility 04.png';
import facility06 from '../assets/images/highlight/facilities/Facility 06.jpeg';
import facility07 from '../assets/images/highlight/facilities/Facility 07.jpeg';
import facility08 from '../assets/images/highlight/facilities/Facility 08.jpeg';
import facility09 from '../assets/images/highlight/facilities/Facility 09.jpeg';
import facility10 from '../assets/images/highlight/facilities/Facility 10.jpeg';
import facility11 from '../assets/images/highlight/facilities/Facility 11.jpeg';
import facility12 from '../assets/images/highlight/facilities/Facility 12.jpg';
import facility13 from '../assets/images/highlight/facilities/Facility 13.jpg';
import facility14 from '../assets/images/highlight/facilities/Facility 14.jpg';
import facility15 from '../assets/images/highlight/facilities/Facility 15.jpg';
import facility16 from '../assets/images/highlight/facilities/Facility 16.jpg';

// Training Images
import training01 from '../assets/images/highlight/training/Training 01.jpg';
import training02 from '../assets/images/highlight/training/Training 02.jpg';
import training03 from '../assets/images/highlight/training/Training 03.jpeg';
import training04 from '../assets/images/highlight/training/Training 04.jpeg';

import training06 from '../assets/images/highlight/training/Training 06.jpeg';
import training07 from '../assets/images/highlight/training/Training 07.jpeg';

interface GalleryItem {
  url: string;
  title: string;
  category: string;
  description: string;
}

const Highlights: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categories = ['All', 'Training', 'Facilities', 'Events'];

  const galleryItems: GalleryItem[] = [
    // TRAINING
    {
      url: training01,
      title: "Technical Safety Training",
      category: "Training",
      description: "Hands-on technical safety training for industrial specialists, featuring real-world simulations and advanced hardware."
    },
    {
      url: training02,
      title: "Industrial Skills Workshop",
      category: "Training",
      description: "Practical workshop focusing on immediate skill acquisition through direct application and expert-guided demonstrations."
    },
    {
      url: training03,
      title: "Advanced Engineering Simulation",
      category: "Training",
      description: "Advanced simulation session designed to enhance technical competency and operational safety in high-stakes environments."
    },
    {
      url: training04,
      title: "Operational Safety Drill",
      category: "Training",
      description: "Live operational safety drill designed to prepare participants for emergency response and hazard mitigation in industrial settings."
    },

    {
      url: training06,
      title: "Equipment Handling Certification",
      category: "Training",
      description: "Certified training on the proper handling and operation of specialized industrial equipment and machinery."
    },
    {
      url: training07,
      title: "Workplace Safety Assessment",
      category: "Training",
      description: "Comprehensive workplace safety assessment training covering risk evaluation, compliance standards, and preventive measures."
    },

    // FACILITIES

    {
      url: facility03,
      title: "Advanced Computer Lab",
      category: "Facilities",
      description: "Equipped with high-performance workstations for technical software training and digital exploration."
    },
    {
      url: facility04,
      title: "ThinkLab Innovation Center",
      category: "Facilities",
      description: "Our dedicated laboratory for research and development in industrial automation and technology."
    },
    {
      url: facility06,
      title: "Executive Seminar Room",
      category: "Facilities",
      description: "Premium seminar space tailored for high-level management and leadership development sessions."
    },
    {
      url: facility07,
      title: "Smart Classroom Alpha",
      category: "Facilities",
      description: "Modern classroom featuring integrated digital tools and interactive display systems."
    },
    {
      url: facility08,
      title: "Technical Resource Library",
      category: "Facilities",
      description: "Comprehensive collection of technical documentation and industry standards for professional research."
    },
    {
      url: facility09,
      title: "Practical Assessment Gallery",
      category: "Facilities",
      description: "Specialized environment for evaluating hands-on technical competencies and safety practices."
    },
    {
      url: facility10,
      title: "Collaborative Workspace",
      category: "Facilities",
      description: "Flexible workspace designed for team collaboration and group learning activities."
    },
    {
      url: facility11,
      title: "Multimedia Briefing Room",
      category: "Facilities",
      description: "Dedicated audio-visual suite for high-impact presentations and remote collaboration."
    },
    {
      url: facility12,
      title: "Outdoor Practical Zone",
      category: "Facilities",
      description: "Spacious outdoor area for specialized industrial drills and emergency response simulations."
    },
    {
      url: facility13,
      title: "Breakout Lounge",
      category: "Facilities",
      description: "Relaxed environment designed for informal knowledge sharing and professional networking."
    },
    {
      url: facility14,
      title: "Corporate Strategy Boardroom",
      category: "Facilities",
      description: "High-stakes decision environment for corporate consultancy and strategy development."
    },
    {
      url: facility15,
      title: "Technical Hardware Suite",
      category: "Facilities",
      description: "Inventory space for specialized technical equipment used in hands-on industrial programs."
    },
    {
      url: facility16,
      title: "ThinkLab Admin Wing",
      category: "Facilities",
      description: "Management and coordination offices for all ThinkLab training and programs."
    },

    // EVENTS
    {
      url: event02,
      title: "Global Leadership Summit",
      category: "Events",
      description: "Gathering of industry leaders and corporate partners to discuss emerging trends and organizational excellence."
    },
    {
      url: event08,
      title: "ThinkLab Innovation Awards",
      category: "Events",
      description: "Recognizing outstanding contributions to industrial innovation and professional excellence."
    },
    {
      url: event09,
      title: "Technical Skills Showcase",
      category: "Events",
      description: "Demonstrating the practical impact of our hands-on training via live demonstrations and case studies."
    },
    {
      url: event10,
      title: "Corporate Strategy Briefing",
      category: "Events",
      description: "Specialized briefing for executive partners on strategic workforce development and digital readiness."
    },
    {
      url: event11,
      title: "Safety & Health Awareness Day",
      category: "Events",
      description: "Dedicated event promoting the core principles of OSH and workplace safety across all industrial sectors."
    }
  ];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const selectedItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? filteredItems.length - 1 : selectedIndex - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === filteredItems.length - 1 ? 0 : selectedIndex + 1);
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
    <div className="pb-24">
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
                alt={selectedItem.title}
                className="w-full h-full object-contain"
              />

              {/* Category Label (Overlay) */}
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-white/90 text-xs font-bold uppercase tracking-widest border border-white/10">
                {selectedItem.category}
              </div>
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

      {/* Header */}
      <div className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-500 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center text-blue-400 hover:text-white transition-colors mb-8 group">
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Gallery & Highlights</h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed text-justify">
            A visual documentation of ThinkLab's commitment to excellence, showcasing our environments, our people, and the tangible impact of our programs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setActiveFilter(cat);
                setSelectedIndex(null);
              }}
              className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all ${activeFilter === cat
                ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-400 hover:text-blue-600'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className="relative group overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-sm break-inside-avoid cursor-pointer"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-full w-fit">
                    <Maximize2 className="text-white w-5 h-5" />
                  </div>
                </div>
                <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                  {item.category === 'Training' && <Zap size={14} />}
                  {item.category === 'Facilities' && <Building2 size={14} />}
                  {item.category === 'Events' && <Users size={14} />}
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-32 bg-slate-50 rounded-[3rem] border border-dashed border-slate-300">
            <Camera className="mx-auto w-12 h-12 text-slate-300 mb-4" />
            <p className="text-slate-500 font-medium">No highlights available for this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Highlights;
