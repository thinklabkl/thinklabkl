import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: 'Corporate program',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: 'Corporate program',
          message: '',
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.details || data.error || 'Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pb-24">
      <div className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Partner With Us</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Ready to initiate a transformation? Fill out the form below or reach out to our corporate desks.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">General Enquiries</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-xl text-blue-600"><Mail size={20} /></div>
                  <div>
                    <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Email</div>
                    <div className="text-slate-900 font-medium">admin@thinklabkl.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-xl text-blue-600"><Phone size={20} /></div>
                  <div>
                    <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Phone</div>
                    <div className="text-slate-900 font-medium">03-2282 9118</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Training Centre</h3>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-xl text-blue-600"><MapPin size={20} /></div>
                <div>
                  <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">ThinkLab Head Office</div>
                  <div className="text-slate-900 font-medium leading-relaxed">
                    Lot 1.47 Tower A, Ground Floor,<br />
                    Bangsar Trade Centre, Jalan Pantai Baharu,<br />
                    59200 Kuala Lumpur, Malaysia
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-[2rem] shadow-xl border border-slate-100 p-8 md:p-12">
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
                <CheckCircle className="text-green-600 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-green-800">Message Sent Successfully!</h4>
                  <p className="text-green-700 text-sm">Thank you for reaching out. We'll get back to you soon.</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                <h4 className="font-bold text-red-800">Failed to Send Message</h4>
                <p className="text-red-700 text-sm">{errorMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-500 transition-all" 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Corporate Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-500 transition-all" 
                    placeholder="john@company.com" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Organization / Company</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-500 transition-all" 
                    placeholder="Tech Solutions Inc." 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Contact Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-500 transition-all" 
                    placeholder="+60" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Service of Inquiry</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-500 transition-all"
                >
                  <option>Corporate program</option>
                  <option>HSE Competency</option>
                  <option>ESG Consultancy</option>
                  <option>IT Consultancy</option>
                  <option>Blockchain and AI Consultancy</option>
                  <option>Branding and Digital Media</option>
                  <option>Event Management</option>
                  <option>Sports Development</option>
                  <option>Project Management</option>
                  <option>Training Space Rental</option>
                  <option>Other / General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-500 transition-all min-h-[150px]" 
                  placeholder="How can we help your organization?"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Sending...
                  </>
                ) : (
                  <>
                    Submit Inquiry <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="pt-16 bg-slate-50">
        <div className="text-center mb-8 px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Visit Our Location</h2>
        </div>
        <div className="w-full">
          <iframe
            src="https://maps.google.com/maps?q=3.11543863435149,101.66781771106591&t=&z=17&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
