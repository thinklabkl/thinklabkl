
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';
import { DoshLogo, NioshLogo, HrdcLogo, CidbLogo, BritishCouncilLogo } from '../assets/images';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-4 lg:col-span-5">
            <div className="flex items-center space-x-3 mb-8">
              <Logo className="w-10 h-10 text-blue-500" />
              <span className="text-xl font-bold text-white font-montserrat tracking-[0.3em] inline-block scale-y-110 origin-left">THINKLAB</span>
            </div>
            <p className="text-base leading-relaxed mb-8 max-w-sm font-light">
              Empowering local and global organizations through multidisciplinary excellence in corporate leadership, technical and human capital development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 group shadow-lg">
                <Facebook size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 group shadow-lg">
                <Instagram size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 group shadow-lg">
                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">Solutions</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/solutions/customized-training" className="hover:text-blue-500 transition-colors">Corporate Training</Link></li>
              <li><Link to="/solutions/hse-competency" className="hover:text-blue-500 transition-colors">HSE Competency</Link></li>
              <li><Link to="/solutions#it-consulting" className="hover:text-blue-500 transition-colors">IT Consulting</Link></li>
              <li><Link to="/solutions#consulting-services" className="hover:text-blue-500 transition-colors">ESG Consulting</Link></li>
              <li><Link to="/solutions#event-management" className="hover:text-blue-500 transition-colors">Event Management</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-blue-500 transition-colors">Our Mission</Link></li>
              <li><Link to="/highlights" className="hover:text-blue-500 transition-colors">Gallery</Link></li>
              <li><Link to="/training" className="hover:text-blue-500 transition-colors">Course Catalog</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">Get In Touch</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start group">
                <MapPin className="mr-4 w-5 h-5 text-blue-500 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="leading-relaxed">
                  Lot 1.47 Tower A, Ground Floor, Bangsar Trade Centre, Jalan Pantai Baharu, 59200 KL
                </span>
              </li>
              <li className="flex items-start group">
                <Phone className="mr-4 w-5 h-5 text-blue-500 shrink-0 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span>03-2282 9118</span>
                  <span>013-533 8823</span>
                  <span>012-801 5505</span>
                </div>
              </li>
              <li className="flex items-center group">
                <Mail className="mr-4 w-5 h-5 text-blue-500 shrink-0 group-hover:scale-110 transition-transform" />
                <span>admin@thinklabkl.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Compliance Section - Left Aligned */}
        <div className="border-t border-slate-900 pt-16 pb-8">
          <div className="flex flex-col items-start gap-8">
            <div className="w-full">
              <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-8 text-left">Compliance & Accreditation</h5>
              <div className="flex flex-wrap justify-start items-center gap-12 lg:gap-16">
                <a href="https://hrdcorp.gov.my" target="_blank" rel="noopener noreferrer" className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110" title="HRD Corp Registered">
                  <HrdcLogo className="h-10 w-auto" />
                </a>
                <a href="https://www.dosh.gov.my" target="_blank" rel="noopener noreferrer" className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110" title="Visit DOSH Malaysia">
                  <DoshLogo className="h-14 w-auto" />
                </a>
                <a href="https://www.niosh.com.my" target="_blank" rel="noopener noreferrer" className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110" title="Visit NIOSH Malaysia">
                  <NioshLogo className="h-12 w-auto" />
                </a>
                <a href="https://www.cidb.gov.my" target="_blank" rel="noopener noreferrer" className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110" title="CIDB Malaysia">
                  <CidbLogo className="h-10 w-auto" />
                </a>
                {/* British Council Logo hidden via className but kept in code */}
                <a href="https://www.britishcouncil.my" target="_blank" rel="noopener noreferrer" className="hidden grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110" title="British Council">
                  <BritishCouncilLogo className="h-10 w-auto" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-medium tracking-widest uppercase">
          <p className="text-slate-500">© {new Date().getFullYear()} ThinkLab SDN BHD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
