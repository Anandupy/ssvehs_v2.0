import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { schoolContact } from '../data/schoolData';

export const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject.';
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Banner */}
      <div className="w-full bg-[#002147] py-12 px-4 text-center text-white border-b-4 border-[#17a2b8]">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 mb-2">
            <Phone className="w-6 h-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Contact Us
          </h1>
          <p className="text-sky-200 text-sm sm:text-base max-w-2xl mx-auto">
            Get in touch with the admissions and administration desk at Shree Siddhi Vinayagar English High School.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Information (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-6">
              <h3 className="text-2xl font-bold text-[#002147] border-b border-gray-100 pb-3">
                School Information
              </h3>

              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 bg-sky-50 text-sky-600 rounded-xl shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Campus Address</h5>
                    <p className="mt-0.5 text-gray-600 leading-relaxed">
                      {schoolContact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-3 bg-sky-50 text-sky-600 rounded-xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Phone Numbers</h5>
                    <p className="mt-0.5 text-gray-600">
                      Telephone: <a href="tel:02225745402" className="text-sky-700 font-semibold hover:underline">{schoolContact.phone}</a>
                    </p>
                    <p className="text-gray-600">
                      Fee WhatsApp: <a href="https://wa.me/918104986862" className="text-sky-700 font-semibold hover:underline">8104986862</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-3 bg-sky-50 text-sky-600 rounded-xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Email Addresses</h5>
                    {schoolContact.emails.map((e) => (
                      <p key={e}>
                        <a href={`mailto:${e}`} className="text-sky-700 hover:underline">
                          {e}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-3 bg-sky-50 text-sky-600 rounded-xl shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Visiting Hours</h5>
                    <p className="mt-0.5 text-gray-600">
                      Monday to Saturday: 8:30 AM to 3:30 PM<br />
                      Principal Interaction: With prior appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* School Timings Card */}
            <div className="bg-[#002147] text-white rounded-2xl p-6 shadow-sm space-y-3">
              <h4 className="font-bold text-base text-sky-300">Daily School Timings</h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-sky-100">
                {schoolContact.timing.map((t, idx) => (
                  <li key={idx} className="flex justify-between border-b border-sky-800/40 pb-1 last:border-0">
                    <span className="font-semibold">{t.section}:</span>
                    <span>{t.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Contact Form (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-[#002147] mb-2">
              Send us a Message
            </h3>
            <p className="text-xs text-gray-500 mb-6">
              Have inquiries about admissions, curriculum, or school events? Fill out the form below.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-bold text-emerald-900">Thank You!</h4>
                <p className="text-emerald-700 text-sm max-w-md mx-auto">
                  Your message has been submitted successfully to Shree Siddhi Vinayagar English High School. Our administrative office will get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                  }}
                  className="mt-4 bg-[#002147] hover:bg-sky-900 text-white font-bold py-2 px-6 rounded-lg text-xs transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Patil"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-2.5 text-sm border rounded-xl focus:outline-none focus:ring-2 ${
                        errors.name ? 'border-rose-400 focus:ring-rose-400 bg-rose-50/20' : 'border-gray-200 focus:ring-sky-500'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. ramesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-2.5 text-sm border rounded-xl focus:outline-none focus:ring-2 ${
                        errors.email ? 'border-rose-400 focus:ring-rose-400 bg-rose-50/20' : 'border-gray-200 focus:ring-sky-500'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-2.5 text-sm border rounded-xl focus:outline-none focus:ring-2 ${
                        errors.phone ? 'border-rose-400 focus:ring-rose-400 bg-rose-50/20' : 'border-gray-200 focus:ring-sky-500'
                      }`}
                    />
                    {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Subject / Topic *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Admission Inquiry for Standard 1"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-4 py-2.5 text-sm border rounded-xl focus:outline-none focus:ring-2 ${
                        errors.subject ? 'border-rose-400 focus:ring-rose-400 bg-rose-50/20' : 'border-gray-200 focus:ring-sky-500'
                      }`}
                    />
                    {errors.subject && <p className="text-xs text-rose-500 mt-1">{errors.subject}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Write your query or message in detail..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-2.5 text-sm border rounded-xl focus:outline-none focus:ring-2 ${
                      errors.message ? 'border-rose-400 focus:ring-rose-400 bg-rose-50/20' : 'border-gray-200 focus:ring-sky-500'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-rose-500 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#17a2b8] hover:bg-[#128294] text-white font-bold py-3 px-8 rounded-xl text-sm transition-colors shadow-sm cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}

            {/* Google Map Location */}
            <div className="mt-8 pt-8 border-t border-gray-100">
              <h4 className="font-bold text-[#002147] text-sm mb-3">Campus Location on Map</h4>
              <div className="w-full h-64 rounded-xl overflow-hidden shadow-sm border border-gray-200">
                <iframe
                  title="SSVEHS Location"
                  src="https://maps.google.com/maps?q=Hariyali%20Village,%20Tagore%20Nagar,%20Vikhroli%20East,%20Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
