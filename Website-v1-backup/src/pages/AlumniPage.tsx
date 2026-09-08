import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Trophy, 
  Users, 
  Building2, 
  HandHeart, 
  Briefcase, 
  CalendarCheck, 
  Newspaper, 
  Handshake, 
  CheckCircle2, 
  ShieldAlert, 
  LogIn, 
  UserPlus, 
  X,
  Globe,
  Upload,
  ExternalLink,
  User
} from 'lucide-react';

export const AlumniPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'login' | 'register'>('register');
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  // Registration Form State matching ssvehs.com/membership
  const [regData, setRegData] = useState({
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
  const [regPhotoPreview, setRegPhotoPreview] = useState<string | null>(null);
  const [regSuccess, setRegSuccess] = useState(false);

  // Login Form State
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegSuccess(true);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginSuccess(true);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setEmailSubscribed(true);
    }
  };

  const proudAlumni = [
    {
      name: 'Zainab Shaikh',
      role: 'Service - Teacher',
      qualification: 'B.A Diploma in ECCEd',
      batch: 'Batch 2005-2006',
      image: '/assets/img/zainab-shaikh.jpg',
    },
    {
      name: 'Rohan Sharma',
      role: 'Lead Architect',
      qualification: 'B.Tech (Computer Engineering)',
      batch: 'Batch 2008-2009',
      image: '/assets/img/1-alumini.jpg',
    },
    {
      name: 'Priyanka Jadhav',
      role: 'Financial Analyst',
      qualification: 'M.Com, Chartered Accountant',
      batch: 'Batch 2012-2013',
      image: '/assets/img/2-alumini.jpg',
    },
    {
      name: 'Amit Sawant',
      role: 'Athletics Coach',
      qualification: 'B.P.Ed, National Athlete',
      batch: 'Batch 2015-2016',
      image: '/assets/img/3-alumini.jpg',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Banner Start matching alumni.html */}
      <div className="w-full bg-[#002147] overflow-hidden shadow-sm">
        <img
          src="/assets/img/abt-banner.png"
          alt="Alumni Banner"
          className="w-full max-h-[380px] object-cover"
        />
      </div>
      {/* Banner End */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#002147] tracking-tight">
            Alumni Portal
          </h1>
          <p className="text-lg sm:text-xl font-bold text-[#00394f] mt-2 tracking-wide">
            Connecting Past, Present & Future
          </p>
        </div>

        {/* What is Alumni Portal Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-10 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#00394f] mb-4 border-b border-gray-200 pb-4 flex items-center gap-3">
                <Building2 className="w-7 h-7 text-[#17a2b8]" />
                <span>What is Alumni Portal?</span>
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
                The Alumni Portal is a dedicated platform to strengthen the lifelong bond between the institution and its former students. It serves as a dynamic bridge connecting alumni with their alma mater, fellow batchmates, and current students.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
                Through this portal, alumni can stay updated with campus developments, upcoming events, institutional achievements, and actively contribute to the growth of current students by sharing experiences, guidance, and creating opportunities.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/membership"
                  className="inline-flex items-center gap-2 bg-[#00394f] hover:bg-[#002736] text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-md cursor-pointer"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Join Network (Membership Form)</span>
                </Link>
                <button
                  onClick={() => {
                    setModalType('register');
                    setModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 bg-sky-50 hover:bg-sky-100 text-[#00394f] font-bold px-5 py-3 rounded-xl text-sm border border-sky-200 transition-all cursor-pointer"
                >
                  <span>Quick Modal Form</span>
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group border-4 border-white">
              <img
                src="/assets/img/1-alumini.jpg"
                alt="Alumni Network"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 bg-[#00394f]/95 text-white p-4 sm:p-5 rounded-tr-2xl backdrop-blur-sm border-t border-r border-sky-400/30">
                <h5 className="font-bold text-sm sm:text-base flex items-center gap-2 m-0">
                  <Globe className="w-5 h-5 text-[#17a2b8]" />
                  <span>Global Network Spanning 40+ Countries</span>
                </h5>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section - 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Card 1: Strong Network */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#17a2b8] flex items-center justify-center text-white mb-4 shadow-md">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#00394f] mb-3">Strong Network</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              A powerful alumni network connecting professionals across diverse industries and generations for mutual growth, collaboration, and endless opportunities.
            </p>
          </div>

          {/* Card 2: Inspiring Success */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#17a2b8] flex items-center justify-center text-white mb-4 shadow-md">
              <Trophy className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#00394f] mb-3">Inspiring Success</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Our alumni achievements across various fields inspire current students to aim higher, dream bigger, and achieve their goals through real-world success stories.
            </p>
          </div>

          {/* Card 3: Mentorship */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#17a2b8] flex items-center justify-center text-white mb-4 shadow-md">
              <HandHeart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#00394f] mb-3">Mentorship</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Alumni actively guide students with career advice, industry mentorship, and practical insights that bridge academic learning with professional requirements.
            </p>
          </div>

          {/* Card 4: Legacy */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#17a2b8] flex items-center justify-center text-white mb-4 shadow-md">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#00394f] mb-3">Legacy</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Our alumni carry forward a rich legacy of excellence, values, and achievements, inspiring future generations to uphold the institution’s proud traditions and contribute meaningfully to society.
            </p>
          </div>

        </div>

        {/* Section 5: Alumni Achievement Wall - Interactive Gallery */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="uppercase text-xs font-extrabold tracking-widest text-[#17a2b8] bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              Hall of Fame
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#002147] mt-2">
              Alumni Achievement Wall
            </h2>
            <p className="text-gray-600 text-sm max-w-xl mx-auto mt-1">
              Celebrating the extraordinary accomplishments of our global alumni community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {proudAlumni.map((alum, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl overflow-hidden h-80 shadow-md hover:shadow-2xl hover:scale-102 transition-all duration-400 group cursor-pointer border border-gray-100 bg-slate-900"
              >
                <img
                  src={alum.image}
                  alt={alum.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                />
                <div
                  className="absolute inset-0 p-5 flex flex-col justify-end"
                  style={{
                    background: 'linear-gradient(0deg, rgba(0,57,79,0.95) 0%, rgba(0,57,79,0.5) 60%, transparent 100%)',
                  }}
                >
                  <span className="self-start mb-2 px-3 py-1 bg-amber-400 text-slate-950 font-bold text-xs rounded-full shadow-sm">
                    🏆 {alum.role}
                  </span>
                  <h3 className="text-white font-extrabold text-lg sm:text-xl leading-snug mb-1">
                    {alum.name}
                  </h3>
                  <p className="text-sky-200 text-xs font-medium mb-1">
                    {alum.qualification}
                  </p>
                  <p className="text-white/60 text-[11px] font-mono">
                    {alum.batch} • SSVEHS
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alumni Spotlight & Interactive World Map Section */}
        <div className="mb-16 bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002147]">
              Alumni Spotlight
            </h2>
            <p className="text-xs text-gray-500 mt-1">Global presence of Shree Siddhi Vinayagar Alumni</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-3 space-y-8 text-center lg:text-right">
              <div>
                <h3 className="text-lg font-bold text-[#00394f] mb-1">Career Journey</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  From humble beginnings to remarkable heights, our alumni's career journeys inspire and exemplify the transformative power of education.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#00394f] mb-1">Impact and Contributions</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  With innovation as their compass, our alumni have left an indelible mark on their industries, paving the way for progress and shaping the future.
                </p>
              </div>
            </div>

            {/* Center Column: World Map */}
            <div className="lg:col-span-6 text-center">
              <div className="relative w-full max-w-lg mx-auto bg-slate-50 p-3 rounded-2xl border border-sky-100 shadow-inner">
                <img
                  src="/assets/img/world-map.png"
                  alt="World map showing alumni members by country"
                  className="w-full h-auto object-contain drop-shadow-sm"
                />

                {/* Animated Pulsing Pin on India */}
                <div className="absolute top-[51%] left-[68%] -translate-x-1/2 -translate-y-1/2 z-20 group">
                  <div className="relative flex flex-col items-center">
                    <div className="bg-[#00394f] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-lg mb-1 whitespace-nowrap">
                      <span>India • Active</span>
                    </div>
                    <span className="w-3.5 h-3.5 rounded-full bg-[#00394f] border-2 border-white shadow-md animate-ping absolute"></span>
                    <span className="w-3.5 h-3.5 rounded-full bg-[#17a2b8] border-2 border-white shadow-md relative"></span>
                  </div>
                </div>

                {/* Pulsing Pin on UAE */}
                <div className="absolute top-[48%] left-[58%] -translate-x-1/2 -translate-y-1/2 z-20">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-500 border border-white inline-block shadow-sm"></span>
                </div>

                {/* Pulsing Pin on USA */}
                <div className="absolute top-[42%] left-[24%] -translate-x-1/2 -translate-y-1/2 z-20">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-500 border border-white inline-block shadow-sm"></span>
                </div>

                {/* Pulsing Pin on UK */}
                <div className="absolute top-[34%] left-[48%] -translate-x-1/2 -translate-y-1/2 z-20">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-500 border border-white inline-block shadow-sm"></span>
                </div>
              </div>

              {/* Map Summary Badges matching original */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-[#00394f] shadow-xs">
                  <span>India:</span>
                  <strong className="text-[#17a2b8]">Primary Chapter</strong>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-[#00394f] shadow-xs">
                  <span>Global:</span>
                  <strong className="text-[#17a2b8]">40+ Countries</strong>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-3 space-y-8 text-center lg:text-left">
              <div>
                <h3 className="text-lg font-bold text-[#00394f] mb-1">Community Involvement</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Making a difference beyond borders, our alumni actively engage in various community-driven initiatives, embodying our institution's ethos of service and impact.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#00394f] mb-1">Alumni Connect</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Join our growing network of mapped alumni and reconnect with fellow alumni across the world.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* CTA Banner Section matching bg-gradient-dark-blue */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-[#00394f] via-[#002147] to-[#17a2b8] rounded-3xl p-8 sm:p-12 shadow-xl text-white relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                Join Our Growing Alumni Network
              </h2>
              <p className="text-sm sm:text-base text-sky-100 leading-relaxed">
                Stay connected with your alma mater, inspire future generations, and grow together as a strong, supportive alumni community.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Link
                  to="/alumni/login"
                  className="inline-flex items-center gap-2 bg-white text-[#00394f] hover:bg-sky-50 font-bold px-6 py-3 rounded-xl text-sm shadow-md transition-all cursor-pointer"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Alumni Login</span>
                </Link>
                <Link
                  to="/membership"
                  className="inline-flex items-center gap-2 bg-[#17a2b8] text-white hover:bg-sky-600 font-bold px-6 py-3 rounded-xl text-sm shadow-md transition-all cursor-pointer"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Register Membership</span>
                </Link>
              </div>
              <div className="pt-4 text-xs text-sky-200">
                <small className="flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-yellow-300" />
                  <span>Already 2500+ alumni connected worldwide</span>
                </small>
              </div>
            </div>
          </div>
        </div>

        {/* Alumni Features Section: 4 feature cards on left, Checklist on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-gradient-to-br from-[#17a2b8] to-[#0d6e8c] text-white p-6 rounded-2xl shadow-sm">
                <Briefcase className="w-8 h-8 mb-3 opacity-90" />
                <h5 className="font-bold text-lg mb-1">Job Portal</h5>
                <p className="text-xs text-sky-100 leading-relaxed">Exclusive career openings & referrals from alumni companies.</p>
              </div>

              <div className="bg-[#002147] text-white p-6 rounded-2xl shadow-sm">
                <CalendarCheck className="w-8 h-8 mb-3 text-[#17a2b8]" />
                <h5 className="font-bold text-lg mb-1">Events & Meets</h5>
                <p className="text-xs text-sky-100 leading-relaxed">Regular alumni reunions, academic webinars, and sports meets.</p>
              </div>

              <div className="bg-[#17a2b8] text-white p-6 rounded-2xl shadow-sm">
                <Newspaper className="w-8 h-8 mb-3 opacity-90" />
                <h5 className="font-bold text-lg mb-1">Newsletter</h5>
                <p className="text-xs text-sky-100 leading-relaxed">Monthly gazette updates on school progress and alumni honors.</p>
              </div>

              <div className="bg-gradient-to-br from-[#00394f] to-[#002147] text-white p-6 rounded-2xl shadow-sm">
                <Handshake className="w-8 h-8 mb-3 text-[#17a2b8]" />
                <h5 className="font-bold text-lg mb-1">Partnerships</h5>
                <p className="text-xs text-sky-100 leading-relaxed">Collaborations with alumni-led corporate and educational bodies.</p>
              </div>

            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-[#002147] mb-6 border-b border-gray-100 pb-3">
                Why Join Our Alumni Network?
              </h3>

              <ul className="space-y-4 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#17a2b8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Lifelong Learning:</strong> Access to masterclasses, seminars, and skills development sessions.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#17a2b8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Career Advancement:</strong> High-value professional networking with established industry leaders.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#17a2b8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Giving Back:</strong> Opportunity to guide, mentor, and sponsor meritorious students at SSVEHS.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#17a2b8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Recognition:</strong> Prominent feature in our official Alumni Hall of Fame and school archives.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#17a2b8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Extending Assistance:</strong> Connect seamlessly with fellow batchmates settled across the globe.
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Our Proud Alumni Grid */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002147]">
              Our Proud Alumni
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Meet some of our distinguished alumni making a difference globally
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {proudAlumni.map((alum, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-[#17a2b8] shadow-md bg-sky-50">
                    <img
                      src={alum.image}
                      alt={alum.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h5 className="text-lg font-bold text-[#00394f] mb-1">
                    {alum.name}
                  </h5>
                  <p className="text-xs font-bold text-[#17a2b8] mb-1 uppercase tracking-wider">
                    {alum.role}
                  </p>
                  <p className="text-xs text-gray-600 mb-3">
                    {alum.qualification}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 text-[11px] font-mono text-gray-500 flex items-center justify-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-[#17a2b8]" />
                  <span>{alum.batch}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter & Social Connect Section matching alumni.html */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          
          {/* Left Column: Newsletter */}
          <div className="lg:col-span-8 bg-gradient-to-br from-slate-50 to-slate-200/80 rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-extrabold text-[#00394f] mb-2">
                Stay in the Loop
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Get monthly updates on alumni achievements, events, and opportunities.
              </p>

              {emailSubscribed ? (
                <div className="bg-emerald-100/70 border border-emerald-300 text-emerald-900 p-4 rounded-xl text-sm font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Thank you for subscribing! You will receive our next monthly newsletter.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 px-4 py-3 text-sm bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#17a2b8]"
                  />
                  <button
                    type="submit"
                    className="bg-[#00394f] hover:bg-[#002736] text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            <div className="pt-4 mt-4 border-t border-gray-300/40 text-xs text-gray-500 flex items-center gap-1">
              <ShieldAlert className="w-3.5 h-3.5 text-gray-400" />
              <span>No spam, unsubscribe anytime.</span>
            </div>
          </div>

          {/* Right Column: Social Links */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col justify-center text-center">
            <h4 className="text-xl font-bold text-[#00394f] mb-4">
              Connect on Social
            </h4>
            <div className="flex justify-center gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-[#17a2b8] text-white flex items-center justify-center hover:bg-sky-700 transition-colors shadow-sm"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/shreesiddhivinayagar"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-[#00394f] text-white flex items-center justify-center hover:bg-sky-900 transition-colors shadow-sm"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-[#17a2b8] text-white flex items-center justify-center hover:bg-sky-700 transition-colors shadow-sm"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/shree_siddhi_vinayagar01"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-[#00394f] text-white flex items-center justify-center hover:bg-sky-900 transition-colors shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
            <p className="text-xs font-semibold text-gray-500 mt-4 tracking-wider">
              #OurAlumniStory
            </p>
          </div>

        </div>

      </div>

      {/* Interactive Modal for Registration & Login */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setModalOpen(false);
                setRegSuccess(false);
                setLoginSuccess(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Toggle between Register & Login */}
            <div className="flex border-b border-gray-200 mb-6">
              <button
                onClick={() => setModalType('register')}
                className={`pb-3 px-4 font-bold text-sm cursor-pointer ${
                  modalType === 'register'
                    ? 'border-b-2 border-[#17a2b8] text-[#00394f]'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Join / Register
              </button>
              <button
                onClick={() => setModalType('login')}
                className={`pb-3 px-4 font-bold text-sm cursor-pointer ${
                  modalType === 'login'
                    ? 'border-b-2 border-[#17a2b8] text-[#00394f]'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Alumni Login
              </button>
            </div>

            {modalType === 'register' ? (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b pb-3">
                  <div>
                    <h3 className="text-xl font-bold text-[#00394f]">
                      Alumni Membership Form
                    </h3>
                    <p className="text-xs text-gray-500">
                      Connecting Past, Present & Future
                    </p>
                  </div>
                  <Link
                    to="/membership"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#17a2b8] hover:underline"
                  >
                    <span>Open Full Page Form</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {regSuccess ? (
                  <div className="text-center py-8 space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                    <h4 className="text-lg font-bold text-gray-900">Membership Form Submitted!</h4>
                    <p className="text-xs text-gray-600 max-w-md mx-auto">
                      Thank you, {regData.firstName} {regData.lastName}! Your alumni membership application is successfully registered.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleRegisterSubmit} className="space-y-4 text-left">
                    
                    {/* 1. Upload Photo */}
                    <div>
                      <label className="block text-xs font-bold text-[#00394f] mb-1.5">
                        Upload Photo <span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-center gap-4 p-3 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50">
                        <div className="w-14 h-14 rounded-full overflow-hidden bg-white border border-gray-200 flex items-center justify-center shrink-0">
                          {regPhotoPreview ? (
                            <img src={regPhotoPreview} alt="Preview" className="w-full h-full object-cover" />
                          ) : (
                            <User className="w-6 h-6 text-gray-400" />
                          )}
                        </div>
                        <div className="flex-1">
                          <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#17a2b8] text-white text-xs font-semibold rounded-lg hover:bg-sky-600 transition-colors">
                            <Upload className="w-3.5 h-3.5" />
                            <span>Choose Photo</span>
                            <input
                              type="file"
                              accept="image/*"
                              required
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  const reader = new FileReader();
                                  reader.onloadend = () => setRegPhotoPreview(reader.result as string);
                                  reader.readAsDataURL(file);
                                }
                              }}
                              className="hidden"
                            />
                          </label>
                          <span className="text-[11px] text-gray-500 ml-2">JPG, PNG under 5MB</span>
                        </div>
                      </div>
                    </div>

                    {/* 2. Name & Batch */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[#00394f] mb-1">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={regData.firstName}
                          onChange={(e) => setRegData({ ...regData, firstName: e.target.value })}
                          className="w-full px-3 py-2 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17a2b8]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#00394f] mb-1">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={regData.lastName}
                          onChange={(e) => setRegData({ ...regData, lastName: e.target.value })}
                          className="w-full px-3 py-2 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17a2b8]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#00394f] mb-1">
                          Batch <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. 2005-2006"
                          value={regData.batch}
                          onChange={(e) => setRegData({ ...regData, batch: e.target.value })}
                          className="w-full px-3 py-2 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17a2b8]"
                        />
                      </div>
                    </div>

                    {/* 3. Address & Country */}
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-bold text-[#00394f] mb-1">Address</label>
                        <textarea
                          rows={2}
                          value={regData.address}
                          onChange={(e) => setRegData({ ...regData, address: e.target.value })}
                          placeholder="Current residential address..."
                          className="w-full px-3 py-2 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17a2b8]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#00394f] mb-1">
                          Current Residential Country <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={regData.country}
                          onChange={(e) => setRegData({ ...regData, country: e.target.value })}
                          className="w-full px-3 py-2 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17a2b8]"
                        />
                      </div>
                    </div>

                    {/* 4. Contact (Phone & Email) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[#00394f] mb-1">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={regData.phone}
                          onChange={(e) => setRegData({ ...regData, phone: e.target.value })}
                          className="w-full px-3 py-2 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17a2b8]"
                        />
                        <span className="text-[11px] text-amber-700 block mt-0.5">
                          <strong>Note:</strong> You can use this as password to login your portal.
                        </span>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#00394f] mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={regData.email}
                          onChange={(e) => setRegData({ ...regData, email: e.target.value })}
                          className="w-full px-3 py-2 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17a2b8]"
                        />
                      </div>
                    </div>

                    {/* 5. Educational Qualification */}
                    <div>
                      <label className="block text-xs font-bold text-[#00394f] mb-1">
                        Educational Qualification <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. B.A Diploma in ECCEd / B.Tech / M.Com"
                        value={regData.education}
                        onChange={(e) => setRegData({ ...regData, education: e.target.value })}
                        className="w-full px-3 py-2 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17a2b8]"
                      />
                    </div>

                    {/* 6. Work Detail & Designation */}
                    <div>
                      <label className="block text-xs font-bold text-[#00394f] mb-1.5">
                        Work Detail
                      </label>
                      <div className="flex flex-wrap gap-4 text-xs">
                        {[
                          { val: 'service', label: 'Service' },
                          { val: 'business', label: 'Business' },
                          { val: 'professional', label: 'Professional' },
                          { val: 'home_maker', label: 'Home Maker' },
                        ].map((item) => (
                          <label key={item.val} className="flex items-center gap-1.5 cursor-pointer">
                            <input
                              type="radio"
                              name="modalWorkType"
                              value={item.val}
                              checked={regData.workType === item.val}
                              onChange={(e) => setRegData({ ...regData, workType: e.target.value })}
                              className="text-sky-600"
                            />
                            <span>{item.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#00394f] mb-1">
                        Work Designation
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Teacher, Senior Consultant, Manager"
                        value={regData.designation}
                        onChange={(e) => setRegData({ ...regData, designation: e.target.value })}
                        className="w-full px-3 py-2 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17a2b8]"
                      />
                    </div>

                    {/* 7. Support School */}
                    <div>
                      <label className="block text-xs font-bold text-[#00394f] mb-1">
                        I would like to support and contribute towards my school...
                      </label>
                      <textarea
                        rows={2}
                        value={regData.almaMatar}
                        onChange={(e) => setRegData({ ...regData, almaMatar: e.target.value })}
                        placeholder="Specify any resources, recommendations, or assistance you can provide..."
                        className="w-full px-3 py-2 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17a2b8]"
                      />
                    </div>

                    {/* 8. Hobbies & Journey */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[#00394f] mb-1">
                          Hobbies / Special Interest
                        </label>
                        <textarea
                          rows={2}
                          value={regData.hobbies}
                          onChange={(e) => setRegData({ ...regData, hobbies: e.target.value })}
                          className="w-full px-3 py-2 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17a2b8]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#00394f] mb-1">
                          My Journey so Far
                        </label>
                        <textarea
                          rows={2}
                          value={regData.journey}
                          onChange={(e) => setRegData({ ...regData, journey: e.target.value })}
                          className="w-full px-3 py-2 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17a2b8]"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-3 bg-[#198754] hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-sm transition-colors cursor-pointer shadow-md"
                    >
                      Submit Membership Application
                    </button>
                  </form>
                )}
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold text-[#00394f] mb-1">
                  Alumni Portal Login
                </h3>
                <p className="text-xs text-gray-500 mb-4">
                  Log in with your registered email credentials to access the alumni directory and notices.
                </p>

                {loginSuccess ? (
                  <div className="text-center py-8 space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                    <h4 className="text-lg font-bold text-gray-900">Login Verified</h4>
                    <p className="text-xs text-gray-600">
                      Welcome back! Redirecting to alumni dashboard...
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleLoginSubmit} className="space-y-4 text-left">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Registered Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="alumnus@example.com"
                        value={loginData.email}
                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                        className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17a2b8]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Password *</label>
                      <input
                        type="password"
                        required
                        placeholder="••••••••"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17a2b8]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#17a2b8] hover:bg-sky-600 text-white font-bold py-2.5 rounded-xl text-sm transition-colors cursor-pointer"
                    >
                      Sign In
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
