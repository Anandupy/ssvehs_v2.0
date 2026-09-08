import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Upload, CheckCircle2, User, ArrowLeft } from 'lucide-react';

export const MembershipPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    batch: '',
    address: '',
    country: 'India',
    phone: '',
    email: '',
    education: '',
    workType: 'service',
    designation: '',
    almaMatar: '',
    hobbies: '',
    journey: '',
  });

  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Top Banner */}
      <div className="w-full bg-[#002147] overflow-hidden shadow-sm">
        <img
          src="/assets/img/abt-banner.png"
          alt="Alumni Banner"
          className="w-full max-h-[350px] object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#00394f] via-[#005270] to-[#17a2b8] p-8 sm:p-10 text-white text-center relative">
            <Link
              to="/alumni"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-4 transition-colors absolute left-6 top-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portal</span>
            </Link>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4">
              Alumni Membership Form
            </h1>
            <p className="text-sky-100 text-lg mt-2 font-medium">
              Connecting Past, Present & Future
            </p>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-10">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Membership Form Submitted Successfully!
                </h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-gray-900">{formData.firstName} {formData.lastName}</span> (Batch {formData.batch})! Your details have been submitted to the SSVEHS Alumni Directory.
                </p>
                <div className="pt-6 flex justify-center gap-4">
                  <Link
                    to="/alumni"
                    className="px-6 py-3 bg-[#00394f] hover:bg-[#002a3a] text-white font-bold rounded-xl transition-colors shadow-md"
                  >
                    Go to Alumni Portal
                  </Link>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold rounded-xl transition-colors"
                  >
                    Submit Another Response
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* 1. Photo Upload */}
                <div>
                  <label className="block text-sm font-bold text-[#00394f] mb-2">
                    Upload Photo <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-col sm:flex-row items-center gap-6 p-5 border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50/50 hover:bg-sky-50/30 transition-colors">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-white border-2 border-sky-200 flex items-center justify-center shrink-0 shadow-sm">
                      {photoPreview ? (
                        <img
                          src={photoPreview}
                          alt="Profile Preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="w-10 h-10 text-gray-400" />
                      )}
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <label className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 bg-[#17a2b8] hover:bg-sky-600 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm">
                        <Upload className="w-4 h-4" />
                        <span>Choose File</span>
                        <input
                          type="file"
                          accept="image/*"
                          required
                          onChange={handlePhotoChange}
                          className="hidden"
                        />
                      </label>
                      <p className="text-xs text-gray-500 mt-2">
                        Supported formats: JPG, PNG, WEBP. Max size: 5MB.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. Basic Info (First Name, Last Name, Batch) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-[#00394f] mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="e.g. Rahul"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#17a2b8] focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#00394f] mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="e.g. Sharma"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#17a2b8] focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#00394f] mb-1">
                      Batch <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.batch}
                      onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                      placeholder="e.g. 2005-2006 or 2012"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#17a2b8] focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                {/* 3. Address & Current Country */}
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-[#00394f] mb-1">
                      Address
                    </label>
                    <textarea
                      rows={3}
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="Enter your current residential address..."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#17a2b8] focus:border-transparent text-sm resize-y"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#00394f] mb-1">
                      Current Residential Country <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. India, United States, UAE, United Kingdom"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#17a2b8] focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                {/* 4. Contact Details (Phone & Email) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-[#00394f] mb-1">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#17a2b8] focus:border-transparent text-sm"
                    />
                    <p className="text-xs text-amber-700 bg-amber-50 rounded-lg p-2 mt-1.5 border border-amber-100">
                      <strong>Note:</strong> You can use this as password to login your portal.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#00394f] mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#17a2b8] focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                {/* 5. Educational Qualification */}
                <div>
                  <label className="block text-sm font-bold text-[#00394f] mb-1">
                    Educational Qualification <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.education}
                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                    placeholder="e.g. B.Tech, M.B.B.S, B.A Diploma in ECCEd, M.Com, CA, etc."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#17a2b8] focus:border-transparent text-sm"
                  />
                </div>

                {/* 6. Work Detail (Radio Options) */}
                <div>
                  <label className="block text-sm font-bold text-[#00394f] mb-2">
                    Work Detail
                  </label>
                  <div className="flex flex-wrap gap-4 sm:gap-6 pt-1">
                    {[
                      { value: 'service', label: 'Service' },
                      { value: 'business', label: 'Business' },
                      { value: 'professional', label: 'Professional' },
                      { value: 'home_maker', label: 'Home Maker' },
                    ].map((item) => (
                      <label
                        key={item.value}
                        className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border cursor-pointer transition-all ${
                          formData.workType === item.value
                            ? 'bg-[#00394f] text-white border-[#00394f] shadow-sm font-semibold'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="workType"
                          value={item.value}
                          checked={formData.workType === item.value}
                          onChange={(e) => setFormData({ ...formData, workType: e.target.value })}
                          className="w-4 h-4 text-sky-600 focus:ring-sky-500"
                        />
                        <span className="text-sm">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 7. Work Designation */}
                <div>
                  <label className="block text-sm font-bold text-[#00394f] mb-1">
                    Work Designation
                  </label>
                  <input
                    type="text"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    placeholder="e.g. Senior Software Engineer, Principal, Doctor, Business Owner"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#17a2b8] focus:border-transparent text-sm"
                  />
                </div>

                {/* 8. Contribution & Support */}
                <div>
                  <label className="block text-sm font-bold text-[#00394f] mb-1">
                    I would like to support and contribute towards my school...
                  </label>
                  <textarea
                    rows={3}
                    value={formData.almaMatar}
                    onChange={(e) => setFormData({ ...formData, almaMatar: e.target.value })}
                    placeholder="How would you like to contribute? (e.g. Student mentoring, career guidance, seminars, donations, internship referrals)..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#17a2b8] focus:border-transparent text-sm resize-y"
                  />
                  <p className="text-xs text-sky-800 bg-sky-50 rounded-lg p-2 mt-1.5 border border-sky-100">
                    <strong>Note:</strong> Specify any resources, recommendations, or assistance you can provide.
                  </p>
                </div>

                {/* 9. Hobbies / Special Interest */}
                <div>
                  <label className="block text-sm font-bold text-[#00394f] mb-1">
                    Hobbies / Special Interest
                  </label>
                  <textarea
                    rows={3}
                    value={formData.hobbies}
                    onChange={(e) => setFormData({ ...formData, hobbies: e.target.value })}
                    placeholder="e.g. Classical Music, Cricket, Reading, Photography, Social Work..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#17a2b8] focus:border-transparent text-sm resize-y"
                  />
                </div>

                {/* 10. My Journey so Far */}
                <div>
                  <label className="block text-sm font-bold text-[#00394f] mb-1">
                    My Journey so Far
                  </label>
                  <textarea
                    rows={3}
                    value={formData.journey}
                    onChange={(e) => setFormData({ ...formData, journey: e.target.value })}
                    placeholder="Share a short note about your career journey, achievements, and memorable moments at SSVEHS..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#17a2b8] focus:border-transparent text-sm resize-y"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4 flex items-center justify-end gap-4 border-t border-gray-100">
                  <Link
                    to="/alumni"
                    className="px-6 py-3 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-[#198754] hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg transition-colors cursor-pointer text-sm"
                  >
                    Submit Membership
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
