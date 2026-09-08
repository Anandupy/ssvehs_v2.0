import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, Loader2, Sparkles, KeyRound } from 'lucide-react';
import { useAdmin } from './AdminContext';

export const AdminLoginPage: React.FC = () => {
  const { login } = useAdmin();
  const navigate = useNavigate();

  const [email, setEmail] = useState('info@ssvehs.com');
  const [password, setPassword] = useState('admin123');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate('/admin/dashboard');
    } catch (err) {
      setError('Invalid login credentials');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white font-sans antialiased">
      
      {/* LEFT SECTION: Vector Security Graphic matching Screenshot 1 */}
      <div className="md:w-1/2 bg-[#0C69D3] p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden text-white min-h-[380px] md:min-h-screen">
        
        {/* Background ambient gear/cloud vector accents */}
        <div className="absolute -top-10 -left-10 w-72 h-72 border-4 border-white/10 rounded-full pointer-events-none" />
        <div className="absolute top-1/4 right-5 w-44 h-44 border-2 border-dashed border-white/15 rounded-full pointer-events-none" />

        {/* Top bar branding on left */}
        <div className="relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-white/90 hover:text-white text-xs font-bold transition-colors">
            &larr; Back to School Website
          </Link>
        </div>

        {/* Center Graphic Illustration SVG Representation */}
        <div className="relative z-10 my-auto flex items-center justify-center py-6">
          <div className="relative w-full max-w-md aspect-4/3 flex items-center justify-center">
            
            {/* Big Laptop Frame */}
            <div className="w-[90%] h-[78%] bg-[#081E38] rounded-2xl border-4 border-[#071322] shadow-2xl p-4 flex flex-col relative">
              {/* Laptop Screen Content */}
              <div className="w-full h-full bg-[#1E5699] rounded-xl flex flex-col items-center justify-center p-4 relative overflow-hidden">
                
                {/* Padlock Badge */}
                <div className="w-16 h-16 rounded-2xl bg-white text-[#0C69D3] flex items-center justify-center shadow-lg mb-3 z-10">
                  <KeyRound className="w-8 h-8" />
                </div>

                {/* Simulated Input Bars */}
                <div className="w-48 h-5 bg-white/30 rounded-full mb-2 z-10 flex items-center px-3">
                  <span className="w-2 h-2 rounded-full bg-white mr-2"></span>
                  <span className="w-20 h-1.5 bg-white/70 rounded"></span>
                </div>
                <div className="w-48 h-5 bg-white/20 rounded-full z-10 flex items-center px-3">
                  <span className="w-2 h-2 rounded-full bg-white/80 mr-2"></span>
                  <span className="w-14 h-1.5 bg-white/50 rounded"></span>
                </div>

                {/* Orange Button */}
                <div className="w-20 h-4 bg-amber-400 rounded-full mt-3 z-10"></div>
              </div>

              {/* Laptop Base */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[105%] h-3 bg-[#071322] rounded-b-xl shadow-lg"></div>
            </div>

            {/* Giant Security Shield Badge */}
            <div className="absolute -right-2 bottom-4 w-28 h-36 bg-[#004B99] rounded-t-full rounded-b-[40px] border-4 border-white shadow-2xl flex items-center justify-center text-white z-20">
              <ShieldCheck className="w-16 h-16 text-sky-200" />
            </div>

            {/* Little Person 1 */}
            <div className="absolute -left-2 bottom-2 bg-amber-400 w-10 h-16 rounded-t-xl rounded-b-md shadow-md z-20 flex flex-col items-center pt-2">
              <div className="w-6 h-6 rounded-full bg-amber-200 -mt-5 border-2 border-amber-500"></div>
            </div>

            {/* Little Person 2 (on top) */}
            <div className="absolute top-1 left-1/3 bg-purple-500 w-8 h-10 rounded-t-xl z-20 flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-amber-200 -mt-5 border-2 border-purple-600"></div>
            </div>

          </div>
        </div>

        {/* Footer info on left */}
        <div className="relative z-10 text-xs text-white/80 hidden sm:block">
          P. K. Krishnan Educational Trust's • Shree Siddhi Vinayagar English High School
        </div>

      </div>

      {/* RIGHT SECTION: Sign-in Form matching Screenshot 1 */}
      <div className="md:w-1/2 flex flex-col justify-between p-8 sm:p-12 lg:p-20 bg-white">
        
        {/* Top spacer */}
        <div className="hidden sm:block"></div>

        {/* Main Form Center Box */}
        <div className="max-w-md w-full mx-auto space-y-6">
          
          {/* SSVEHS Logo */}
          <div className="mb-6">
            <img
              src="/assets/img/logo.png"
              alt="SSVEHS Crest Logo"
              className="h-20 w-auto object-contain"
            />
          </div>

          {/* Heading */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E36] tracking-tight">
              Hello! let's get started
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Sign in to continue.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-medium">
                {error}
              </div>
            )}

            <div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="info@ssvehs.com"
                className="w-full px-4 py-3.5 bg-[#EEF2F6] hover:bg-[#E8EDF4] focus:bg-white rounded-xl border border-transparent focus:border-[#0C69D3] focus:outline-none text-slate-800 text-sm transition-all shadow-inner"
              />
            </div>

            <div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-3.5 bg-[#EEF2F6] hover:bg-[#E8EDF4] focus:bg-white rounded-xl border border-transparent focus:border-[#0C69D3] focus:outline-none text-slate-800 text-sm transition-all shadow-inner"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-[#4F7082] hover:bg-[#3D5B6C] active:bg-[#314B5A] text-white font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-80"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Signing in...</span>
                  </>
                ) : (
                  <span>Sign In</span>
                )}
              </button>
            </div>

            {/* Forgot Password & Demo Fill */}
            <div className="flex items-center justify-between pt-1">
              <button
                type="button"
                onClick={() => alert('Please contact administrator at 022-2574 5402 to reset admin credentials.')}
                className="text-xs font-semibold text-slate-500 hover:text-[#0C69D3] transition-colors"
              >
                Forgot password?
              </button>

              <button
                type="button"
                onClick={() => { setEmail('info@ssvehs.com'); setPassword('admin123'); }}
                className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200"
              >
                <Sparkles className="w-3 h-3" />
                <span>Fill Demo Admin</span>
              </button>
            </div>

          </form>

        </div>

        {/* Footer Links matching Screenshot 1 */}
        <div className="pt-8 border-t border-slate-100 max-w-md w-full mx-auto text-center sm:text-left flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-slate-400">
          <Link to="/privacy-policy" className="hover:text-slate-700 transition-colors">Privacy Policy</Link>
          <span>|</span>
          <Link to="/cod" className="hover:text-slate-700 transition-colors">Terms and Conditions</Link>
          <span>|</span>
          <Link to="/about" className="hover:text-slate-700 transition-colors">About Us</Link>
        </div>

      </div>

    </div>
  );
};
