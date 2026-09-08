import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Briefcase, Calendar, Eye, EyeOff, CheckCircle2, ArrowLeft } from 'lucide-react';

export const AlumniLoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginSuccess(true);
  };

  return (
    <div className="bg-[#f7f9fb] min-h-[80vh] flex items-center py-12 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto w-full">
        
        <Link
          to="/alumni"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#00394f] text-sm mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Alumni Portal</span>
        </Link>

        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Info Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#00394f] via-[#00647e] to-[#17a2b8] text-white p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xs flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-sky-200" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 leading-tight">
                Welcome Back, Alumni
              </h2>

              <p className="text-white/85 text-sm leading-relaxed mb-8">
                Stay connected with your alma mater, reconnect with classmates, and explore opportunities within our growing alumni community.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-sky-200" />
                  </div>
                  <span className="text-sm font-medium text-white/90">
                    Connect with fellow alumni
                  </span>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5 text-sky-200" />
                  </div>
                  <span className="text-sm font-medium text-white/90">
                    Discover career opportunities
                  </span>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 text-sky-200" />
                  </div>
                  <span className="text-sm font-medium text-white/90">
                    Stay updated with alumni events
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/15 mt-8 text-xs text-white/70">
              Shree Siddhi Vinayagar English High School Alumni Association
            </div>
          </div>

          {/* Right Column: Login Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#00394f] mb-2">
              Alumni Login
            </h1>
            <p className="text-sm text-gray-500 mb-6">
              Enter your registered alumni credentials.
            </p>

            {loginSuccess ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Login Successful!</h4>
                <p className="text-sm text-gray-600">
                  Welcome back! Redirecting to alumni dashboard...
                </p>
                <div className="pt-4">
                  <Link
                    to="/alumni"
                    className="inline-block px-6 py-2.5 bg-[#00394f] text-white rounded-xl font-semibold text-sm"
                  >
                    Return to Alumni Portal
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-[#00394f] uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your registered email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#17a2b8] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#00394f] uppercase tracking-wider mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your registered phone / password"
                      className="w-full px-4 py-3 pr-11 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#17a2b8] text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer p-1"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Default password is your registered mobile number.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#00394f] hover:bg-[#17a2b8] text-white font-bold rounded-xl shadow-md transition-colors cursor-pointer text-sm"
                  >
                    Login to Alumni Portal
                  </button>
                </div>

                <div className="text-center pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500">
                    Don't have an alumni account yet?{' '}
                    <Link to="/membership" className="font-bold text-[#17a2b8] hover:underline">
                      Register via Alumni Membership Form
                    </Link>
                  </p>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
