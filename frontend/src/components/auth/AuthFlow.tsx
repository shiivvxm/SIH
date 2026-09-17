import React, { useState, useEffect } from 'react';
import { Anchor, Eye, EyeOff, ArrowRight, Loader2, CheckCircle2, ShieldAlert, Navigation, Ship, Globe, BarChart3, Database, Briefcase, Building, Mail, Lock, Phone, Check } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

type AuthView = 'login' | 'signup' | 'forgot_password';
type ForgotPasswordStep = 'method' | 'otp' | 'reset' | 'success';
type Role = '' | 'Operations' | 'Analyst' | 'Decision Maker' | 'Management';


const translations = {
  en: {
    createAccount: "Create your FreightIQ account",
    createSubtitle: "Set up your maritime intelligence workspace.",
    personalInfo: "Personal Information",
    fullName: "Full Name",
    fullNamePlaceholder: "Enter your full name",
    corporateEmail: "Corporate Email",
    emailPlaceholder: "you@company.com",
    org: "Organization",
    orgPlaceholder: "Your Company Ltd",
    security: "Security",
    password: "Password",
    passwordPlaceholder: "••••••••",
    confirmPassword: "Confirm Password",
    strength: "Strength",
    roleWorkspace: "Role & Workspace",
    profileConfig: "Configuration",
    basePort: "Base Port / Terminal",
    selectPort: "Select Port...",
    operatorId: "Operator ID",
    operatorPlaceholder: "Enter Operator ID",
    inApp: "In-App",
    sms: "SMS",
    email: "Email",
    ausInd: "AUS -> IND (East)",
    usaInd: "USA -> IND (East)",
    freightForecasting: "Freight Forecasting",
    marketDemands: "Market Demands",
    steel: "Steel",
    coal: "Coal",
    containers: "Containers",
    global: "Global",
    apac: "APAC",
    emea: "EMEA",
    alertPref: "Alert Delivery Preference",
    tradeRoute: "Primary Trade Route",
    selectRoute: "Select Route...",
    specialization: "Specialization",
    confidence: "Default Confidence Threshold",
    approvalLimit: "Approval Authority Limit (USD)",
    commodityFocus: "Primary Commodity Focus",
    delegatedSignatory: "Delegated Signatory",
    delegatedPlaceholder: "Backup approver email",
    adminKey: "Admin Authorization Key",
    kpiScope: "KPI Regional Scope",
    preferences: "Preferences & Consent",
    languagePref: "Language",
    dpdpConsent: "Privacy & Data Consent",
    analyticsProcessing: "Analytics Processing",
    analyticsDesc: "Use platform data for analytics and intelligence features.",
    operationalTracking: "Operational Tracking",
    operationalDesc: "Use operational activity data for tracking and workflow features.",
    createBtn: "Create FreightIQ Account",
    creating: "Creating Account...",
    alreadyHave: "Already have an account? ",
    signInHere: "Log In here",
    roles: {
      'Operations': { title: "Operations", desc: "Monitor freight operations and vessel activity." },
      'Analyst': { title: "Analyst", desc: "Analyze markets, forecasts and intelligence." },
      'Decision Maker': { title: "Decision Maker", desc: "Evaluate recommendations and approve." },
      'Management': { title: "Management", desc: "Monitor performance, ROI and outcomes." }
    },
    leftBuild: "Build Your",
    leftIntelligence: "{en.leftIntelligence}",
    leftWorkspace: "Workspace.",
    leftConfigure: "Configure your maritime intelligence workspace for smarter chartering, procurement and operational decisions.",
    errors: {
      fullName: "Full Name is required.",
      email: "Please enter a valid corporate email.",
      password: "Password is required.",
      mismatch: "Passwords do not match.",
      org: "Organization is required.",
      role: "Please select a role.",
      basePort: "Base Port/Terminal is required for Operations.",
      operatorId: "Operator ID is required.",
      tradeRoute: "Primary Trade Route is required.",
      approvalLimit: "Approval Authority Limit is required.",
      delegatedSignatory: "Valid Delegated Signatory email is required.",
      adminKey: "Admin Authorization Key is required.",
      consent: "You must accept the DPDP data processing consents to continue."
    }
  },
  hi: {
    createAccount: "अपना FreightIQ खाता बनाएं",
    createSubtitle: "अपना समुद्री इंटेलिजेंस कार्यक्षेत्र सेट करें।",
    personalInfo: "व्यक्तिगत जानकारी",
    fullName: "पूरा नाम",
    fullNamePlaceholder: "अपना पूरा नाम दर्ज करें",
    corporateEmail: "कॉर्पोरेट ईमेल",
    emailPlaceholder: "आप@company.com",
    org: "संगठन",
    orgPlaceholder: "आपकी कंपनी लिमिटेड",
    security: "सुरक्षा",
    password: "पासवर्ड",
    passwordPlaceholder: "••••••••",
    confirmPassword: "पासवर्ड की पुष्टि करें",
    strength: "मज़बूती",
    roleWorkspace: "भूमिका और कार्यक्षेत्र",
    profileConfig: "कॉन्फ़िगरेशन",
    basePort: "बेस पोर्ट / टर्मिनल",
    selectPort: "पोर्ट चुनें...",
    operatorId: "ऑपरेटर ID",
    operatorPlaceholder: "ऑपरेटर ID दर्ज करें",
    inApp: "ऐप में",
    sms: "SMS",
    email: "ईमेल",
    ausInd: "AUS -> IND (पूर्व)",
    usaInd: "USA -> IND (पूर्व)",
    freightForecasting: "फ्रेट पूर्वानुमान",
    marketDemands: "बाज़ार की मांग",
    steel: "स्टील",
    coal: "कोयला",
    containers: "कंटेनर्स",
    global: "वैश्विक",
    apac: "APAC",
    emea: "EMEA",
    alertPref: "अलर्ट वितरण प्राथमिकता",
    tradeRoute: "प्राथमिक व्यापार मार्ग",
    selectRoute: "मार्ग चुनें...",
    specialization: "विशेषज्ञता",
    confidence: "डिफ़ॉल्ट विश्वास सीमा",
    approvalLimit: "अनुमोदन प्राधिकरण सीमा (USD)",
    commodityFocus: "प्राथमिक कमोडिटी फोकस",
    delegatedSignatory: "प्रत्यायोजित हस्ताक्षरकर्ता",
    delegatedPlaceholder: "बैकअप अनुमोदनकर्ता ईमेल",
    adminKey: "व्यवस्थापक प्राधिकरण कुंजी",
    kpiScope: "KPI क्षेत्रीय दायरा",
    preferences: "प्राथमिकताएं और सहमति",
    languagePref: "भाषा",
    dpdpConsent: "गोपनीयता और डेटा सहमति",
    analyticsProcessing: "एनालिटिक्स प्रोसेसिंग",
    analyticsDesc: "एनालिटिक्स और इंटेलिजेंस सुविधाओं के लिए प्लेटफ़ॉर्म डेटा का उपयोग करें।",
    operationalTracking: "परिचालन ट्रैकिंग",
    operationalDesc: "ट्रैकिंग और वर्कफ़्लो सुविधाओं के लिए परिचालन गतिविधि डेटा का उपयोग करें।",
    createBtn: "अपना FreightIQ खाता बनाएं",
    creating: "खाता बनाया जा रहा है...",
    alreadyHave: "क्या आपके पास पहले से खाता है? ",
    signInHere: "यहां लॉग इन करें",
    roles: {
      'Operations': { title: "Operations", desc: "फ्रेट संचालन और पोत गतिविधियों की निगरानी करें।" },
      'Analyst': { title: "Analyst", desc: "बाज़ार, पूर्वानुमान और समुद्री जानकारी का विश्लेषण करें।" },
      'Decision Maker': { title: "Decision Maker", desc: "सिफारिशों का मूल्यांकन करें और व्यावसायिक निर्णयों को स्वीकृति दें।" },
      'Management': { title: "Management", desc: "प्रदर्शन, ROI और रणनीतिक परिणामों की निगरानी करें।" }
    },
    leftBuild: "अपना",
    leftIntelligence: "फ्रेट इंटेलिजेंस",
    leftWorkspace: "कार्यक्षेत्र बनाएं।",
    leftConfigure: "स्मार्ट चार्टरिंग, खरीद और परिचालन निर्णयों के लिए अपने समुद्री इंटेलिजेंस कार्यक्षेत्र को कॉन्फ़िगर करें।",
    errors: {
      fullName: "पूरा नाम आवश्यक है।",
      email: "कृपया मान्य कॉर्पोरेट ईमेल दर्ज करें।",
      password: "पासवर्ड आवश्यक है।",
      mismatch: "पासवर्ड मेल नहीं खाते।",
      org: "संगठन आवश्यक है।",
      role: "कृपया एक भूमिका चुनें।",
      basePort: "Operations के लिए बेस पोर्ट/टर्मिनल आवश्यक है।",
      operatorId: "ऑपरेटर ID आवश्यक है।",
      tradeRoute: "प्राथमिक व्यापार मार्ग आवश्यक है।",
      approvalLimit: "अनुमोदन प्राधिकरण सीमा आवश्यक है।",
      delegatedSignatory: "मान्य प्रत्यायोजित हस्ताक्षरकर्ता ईमेल आवश्यक है।",
      adminKey: "व्यवस्थापक प्राधिकरण कुंजी आवश्यक है।",
      consent: "जारी रखने के लिए आपको DPDP डेटा प्रोसेसिंग सहमति स्वीकार करनी होगी।"
    }
  }
};

export default function AuthFlow({ initialView = 'login' }: { initialView?: AuthView }) {
  const [view, setView] = useState<AuthView>(initialView);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  // Shared State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Signup Specific State
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [org, setOrg] = useState('');
  const [role, setRole] = useState<Role>('');
  const [loginRole, setLoginRole] = useState<Role>('');
  // Forgot Password State
  const [fpStep, setFpStep] = useState<ForgotPasswordStep>('method');
  const [recoveryMethod, setRecoveryMethod] = useState<'email' | 'phone'>('email');
  const [recoveryInput, setRecoveryInput] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);
  const [newPassword, setNewPassword] = useState('');

  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const t = translations[language];
  const en = translations['en'];


  // Dynamic Role State
  const [dynamicInputs, setDynamicInputs] = useState<Record<string, any>>({});

  // Consent
  const [consentAnalytics, setConsentAnalytics] = useState(false);
  const [consentTracking, setConsentTracking] = useState(false);
  const [error, setError] = useState('');

  // Clear state on view change
  useEffect(() => {
    setEmail('');
    setPassword('');
    setFullName('');
    setConfirmPassword('');
    setOrg('');
    setRole('');
    setLoginRole('');
        setDynamicInputs({});
    setConsentAnalytics(false);
    setConsentTracking(false);
    setError('');
    
    setFpStep('method');
    setRecoveryMethod('email');
    setRecoveryInput('');
    setOtp(['', '', '', '', '', '']);
    setTimer(30);
    setNewPassword('');
    setShowPassword(false);
  }, [view]);


  
  // OTP Timer Logic
  useEffect(() => {
    let interval: number | ReturnType<typeof setTimeout>;
    if (view === 'forgot_password' && fpStep === 'otp' && timer > 0) {
      interval = setInterval(() => setTimer(t => t - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [view, fpStep, timer]);

  const handleOtpChange = (index: number, value: string) => {
    if (!/^[0-9]*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6).split('');
    const newOtp = [...otp];
    pastedData.forEach((char, i) => {
      if (/^[0-9]$/.test(char) && i < 6) newOtp[i] = char;
    });
    setOtp(newOtp);
    const focusIndex = Math.min(pastedData.length, 5);
    const input = document.getElementById(`otp-${focusIndex}`);
    if (input) input.focus();
  };

  const handleResendOtp = () => {
    if (timer > 0) return;
    setTimer(30);
    setOtp(['', '', '', '', '', '']);
    // Wait for a small delay to focus to ensure React renders the cleared inputs
    setTimeout(() => {
      const firstInput = document.getElementById('otp-0');
      if (firstInput) firstInput.focus();
    }, 50);
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value as Role);
    setDynamicInputs({});
  };

  const handleDynamicChange = (field: string, value: any) => {
    setDynamicInputs(prev => ({ ...prev, [field]: value }));
  };

  const validateLogin = () => {
    if (!email || !email.includes('@')) return 'Please enter a valid work email.';
    if (!password) return 'Password is required.';
    return '';
  };

  const validateSignup = () => {
    if (!fullName) return 'Full Name is required.';
    if (!email || !email.includes('@')) return 'Please enter a valid corporate email.';
    if (!password) return 'Password is required.';
    if (password !== confirmPassword) return 'Passwords do not match.';
    if (!org) return 'Organization is required.';
    if (!role) return 'Please select a role.';
    
    if (role === 'Operations') {
      if (!dynamicInputs.basePort) return 'Base Port/Terminal is required for Operations.';
      if (!dynamicInputs.operatorId) return 'Operator ID is required.';
    }
    if (role === 'Analyst') {
      if (!dynamicInputs.tradeRoute) return 'Primary Trade Route is required.';
    }
    if (role === 'Decision Maker') {
      if (!dynamicInputs.approvalLimit) return 'Approval Authority Limit is required.';
      if (!dynamicInputs.delegatedSignatory || !dynamicInputs.delegatedSignatory.includes('@')) {
        return 'Valid Delegated Signatory email is required.';
      }
    }
    if (role === 'Management') {
      if (!dynamicInputs.adminAuthKey) return 'Admin Authorization Key is required.';
    }

    if (!consentAnalytics || !consentTracking) return 'You must accept the DPDP data processing consents to continue.';
    
    return '';
  };

  
  const handleForgotPasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (fpStep === 'method') {
      if (!recoveryInput) {
        setError(recoveryMethod === 'email' ? 'Please enter your corporate email.' : 'Please enter your phone number.');
        return;
      }
      if (recoveryMethod === 'email' && !recoveryInput.includes('@')) {
        setError('Please enter a valid email address.');
        return;
      }
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setFpStep('otp');
        setTimer(30);
      }, 800);
      return;
    }

    if (fpStep === 'otp') {
      if (otp.join('').length < 6) {
        setError('Please enter the 6-digit code.');
        return;
      }
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        if (otp.join('') === '000000') {
          setError('Invalid or expired verification code. Please try again.');
        } else {
          setFpStep('reset');
        }
      }, 1000);
      return;
    }

    if (fpStep === 'reset') {
      if (!newPassword || newPassword !== confirmPassword) {
        setError('Passwords do not match or are empty.');
        return;
      }
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setFpStep('success');
      }, 1000);
      return;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const validationError = view === 'login' ? validateLogin() : validateSignup();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      login();
      navigate('/dashboard');
    }, 1500);
  };

  const toggleView = () => setView(view === 'login' ? 'signup' : 'login');

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white font-sans overflow-hidden">
      
      {/* LEFT PANEL: PRODUCT IDENTITY & VISUALIZATION */}
      <div className="hidden md:flex flex-col w-[55%] bg-slate-950 relative overflow-hidden text-white border-r border-slate-800">
        
        {/* Subtle Grid Background */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        {/* Subtle Glow Overlays */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Header / Brand */}
        <div className="p-10 relative z-10">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-blue-600/20 p-2 rounded-lg border border-blue-500/30">
              <Anchor className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-white block leading-none">FreightIQ</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 block">Smarter Freight Decisions</span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-slate-900/80 border border-slate-700/50 px-3 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-[9px] font-bold text-cyan-300 uppercase tracking-widest">AI-Powered Maritime Intelligence</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-4">
            Predict.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Optimize.</span><br/>
            Decide.
          </h1>
          <p className="text-sm text-slate-400 max-w-md font-medium leading-relaxed">
            AI-powered intelligence for vessel chartering, bulk cargo procurement and smarter maritime decisions across the East Coast of India.
          </p>
        </div>

        {/* Central Visualization (CSS/SVG) */}
        <div className="flex-1 relative z-10 flex items-center justify-center p-10 min-h-[300px]">
          
          <div className="w-full max-w-lg relative h-64">
            {/* Base Line / Ocean level */}
            <div className="absolute bottom-10 left-0 right-0 h-px bg-slate-700/50"></div>
            
            {/* SVG Routes & Nodes */}
            <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
              {/* Route Path */}
              <path d="M 50,150 Q 150,50 250,120 T 450,180" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-50" />
              
              {/* Nodes */}
              <circle cx="50" cy="150" r="3" fill="#38bdf8" className="animate-pulse" />
              <circle cx="250" cy="120" r="3" fill="#38bdf8" />
              <circle cx="450" cy="180" r="4" fill="#22d3ee" className="animate-pulse" />
            </svg>

            {/* Ship Geometric Shape */}
            <div className="absolute bottom-10 left-[40%] transform -translate-x-1/2 w-48 h-16 flex flex-col justify-end">
              {/* Containers */}
              <div className="flex gap-0.5 px-6 mb-0.5">
                <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
                <div className="w-4 h-4 bg-cyan-600 rounded-sm"></div>
                <div className="w-4 h-4 bg-slate-600 rounded-sm"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                <div className="w-4 h-4 bg-cyan-700 rounded-sm"></div>
                <div className="w-4 h-4 bg-blue-700 rounded-sm"></div>
              </div>
              <div className="flex gap-0.5 px-4 mb-0.5">
                <div className="w-4 h-4 bg-cyan-700 rounded-sm"></div>
                <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
                <div className="w-4 h-4 bg-slate-500 rounded-sm"></div>
                <div className="w-4 h-4 bg-blue-800 rounded-sm"></div>
                <div className="w-4 h-4 bg-cyan-600 rounded-sm"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                <div className="w-4 h-4 bg-slate-600 rounded-sm"></div>
              </div>
              {/* Hull */}
              <div className="w-full h-8 bg-slate-800 rounded-b-xl rounded-tl-sm rounded-tr-3xl relative overflow-hidden border-b-2 border-slate-900">
                <div className="absolute bottom-1 left-4 text-[6px] font-black tracking-widest text-slate-500">FREIGHTIQ 01</div>
              </div>
            </div>

            {/* Port Cranes Geometrics (Right Side) */}
            <div className="absolute bottom-10 right-10 w-24 h-32 flex justify-end items-end gap-4">
              <div className="relative w-8 h-24">
                <div className="absolute bottom-0 left-2 w-1.5 h-24 bg-slate-700"></div>
                <div className="absolute bottom-0 right-2 w-1.5 h-24 bg-slate-700"></div>
                <div className="absolute top-4 -left-4 w-16 h-1.5 bg-slate-600 transform -rotate-12"></div>
              </div>
              <div className="relative w-8 h-20 opacity-70">
                <div className="absolute bottom-0 left-2 w-1.5 h-20 bg-slate-700"></div>
                <div className="absolute bottom-0 right-2 w-1.5 h-20 bg-slate-700"></div>
                <div className="absolute top-4 -left-4 w-16 h-1.5 bg-slate-600 transform -rotate-12"></div>
              </div>
            </div>

            {/* Floating Labels */}
            <div className="absolute top-10 left-10 bg-slate-900/80 border border-slate-700 backdrop-blur-sm px-3 py-2 rounded-lg">
              <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Global Supply</div>
              <div className="text-xs font-bold text-white flex items-center gap-1"><Globe className="w-3 h-3 text-cyan-400"/> Australia</div>
            </div>
            <div className="absolute top-20 right-20 bg-slate-900/80 border border-slate-700 backdrop-blur-sm px-3 py-2 rounded-lg">
              <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Destination</div>
              <div className="text-xs font-bold text-white flex items-center gap-1"><Navigation className="w-3 h-3 text-blue-400"/> India Hub</div>
            </div>
          </div>
        </div>

        {/* Footer Metrics */}
        <div className="p-10 relative z-10 mt-auto">
          <div className="grid grid-cols-3 gap-6 border-t border-slate-800/50 pt-6">
            <div>
              <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1 flex items-center gap-1"><Database className="w-3 h-3"/> Active Nodes</div>
              <div className="text-xl font-mono font-bold text-white">12,400+</div>
            </div>
            <div>
              <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1 flex items-center gap-1"><Ship className="w-3 h-3"/> Fleet Tracking</div>
              <div className="text-xl font-mono font-bold text-white">99.8%</div>
            </div>
            <div>
              <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1 flex items-center gap-1"><BarChart3 className="w-3 h-3"/> Forecast Acc.</div>
              <div className="text-xl font-mono font-bold text-cyan-400">94.2%</div>
            </div>
          </div>
        </div>

      </div>


      {/* RIGHT PANEL: AUTHENTICATION (45%) */}
      <div className="w-full md:w-[45%] flex flex-col items-center justify-center bg-gray-50 p-6 sm:p-12 relative overflow-y-auto">
        
        <div className="w-full max-w-[460px] mb-4 bg-red-50 border border-red-100 rounded-xl p-3 flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
          <p className="text-[9px] font-bold text-red-800 uppercase tracking-widest leading-tight">
            AUTHORIZED PERSONNEL ONLY. ALL ACTIONS ARE AUDITED IN COMPLIANCE WITH DPDP ACT 2023.
          </p>
        </div>
        <div className="w-full max-w-[460px] bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10 relative">
          
          <div className="flex flex-col items-center mb-8 md:hidden">
            <Anchor className="w-8 h-8 text-slate-800 mb-2" />
            <span className="text-2xl font-black tracking-tight text-slate-900">FreightIQ</span>
          </div>

          {view !== 'forgot_password' && (
          <div className="text-center mb-8 hidden md:block">
            <h2 className="text-2xl font-black text-slate-900">
              {view === 'login' ? 'Log In Portal' : en.createAccount}
            </h2>
            <p className="text-sm text-slate-500 mt-1 font-medium">
              {view === 'login' ? 'Access your intelligence workspace' : en.createSubtitle}
            </p>
          </div>
          )}

          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {view === 'forgot_password' ? (
              /* --- FORGOT PASSWORD VIEW --- */
              <div className="space-y-5">
                {fpStep === 'method' && (
                  <>
                    <div className="text-center mb-6">
                      <h2 className="text-xl font-black text-slate-900">Reset your password</h2>
                      <p className="text-xs text-slate-500 mt-1 font-medium">Choose how you'd like to receive your verification code.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <button type="button" onClick={() => {setRecoveryMethod('email'); setRecoveryInput(''); setError('');}} className={`py-3 rounded-lg border text-xs font-bold uppercase tracking-widest transition-all ${recoveryMethod === 'email' ? 'border-slate-800 bg-slate-50 text-slate-900' : 'border-gray-200 text-slate-500 hover:bg-slate-50'}`}>Email</button>
                      <button type="button" onClick={() => {setRecoveryMethod('phone'); setRecoveryInput(''); setError('');}} className={`py-3 rounded-lg border text-xs font-bold uppercase tracking-widest transition-all ${recoveryMethod === 'phone' ? 'border-slate-800 bg-slate-50 text-slate-900' : 'border-gray-200 text-slate-500 hover:bg-slate-50'}`}>Phone</button>
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">
                        {recoveryMethod === 'email' ? 'Corporate Email' : 'Phone Number'}
                      </label>
                      <div className="relative">
                        {recoveryMethod === 'email' ? <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /> : <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />}
                        <input type={recoveryMethod === 'email' ? "email" : "tel"} value={recoveryInput} onChange={(e) => setRecoveryInput(e.target.value)} className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800 transition-colors text-sm" placeholder={recoveryMethod === 'email' ? "Enter your registered email" : "Enter your registered phone number"} />
                      </div>
                    </div>
                    <button type="button" onClick={handleForgotPasswordSubmit} disabled={isLoading} className="w-full bg-[#0a1128] text-white py-3 rounded-lg font-bold hover:bg-slate-900 transition-colors flex items-center justify-center mt-6">
                      {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Continue"}
                    </button>
                  </>
                )}

                {fpStep === 'otp' && (
                  <>
                    <div className="text-center mb-6">
                      <h2 className="text-xl font-black text-slate-900">Verify your identity</h2>
                      <p className="text-xs text-slate-500 mt-1 font-medium">Enter the 6-digit verification code sent to your registered {recoveryMethod}.</p>
                    </div>
                    <div className="flex justify-between gap-2 mb-2" onPaste={handleOtpPaste}>
                      {otp.map((digit, i) => (
                        <input key={i} id={`otp-${i}`} type="text" inputMode="numeric" maxLength={1} value={digit} onChange={(e) => handleOtpChange(i, e.target.value)} onKeyDown={(e) => handleOtpKeyDown(i, e)} className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-bold rounded-lg border border-gray-300 focus:border-slate-800 focus:ring-1 focus:ring-slate-800 focus:outline-none bg-white transition-all" />
                      ))}
                    </div>
                    <div className="text-center text-xs font-bold text-slate-500 mb-6">
                      {timer > 0 ? (
                        <span>Code expires in <span className="text-slate-900 font-mono">00:{timer.toString().padStart(2, '0')}</span></span>
                      ) : (
                        <div className="flex flex-col gap-1 items-center">
                          <span>Didn't receive the code?</span>
                          <button type="button" onClick={handleResendOtp} className="text-slate-900 hover:underline">Resend OTP</button>
                        </div>
                      )}
                    </div>
                    <button type="button" onClick={handleForgotPasswordSubmit} disabled={isLoading || otp.join('').length < 6} className="w-full bg-[#0a1128] text-white py-3 rounded-lg font-bold hover:bg-slate-900 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                      {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Verify Code"}
                    </button>
                  </>
                )}

                {fpStep === 'reset' && (
                  <>
                    <div className="text-center mb-6">
                      <h2 className="text-xl font-black text-slate-900">Create a new password</h2>
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">New Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input type={showPassword ? "text" : "password"} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-slate-800 text-sm" />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="space-y-1.5 mt-4">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">Confirm New Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input type={showPassword ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-slate-800 text-sm" />
                      </div>
                    </div>
                    <button type="button" onClick={handleForgotPasswordSubmit} disabled={isLoading} className="w-full bg-[#0a1128] text-white py-3 rounded-lg font-bold hover:bg-slate-900 transition-colors flex items-center justify-center mt-6">
                      {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Reset Password"}
                    </button>
                  </>
                )}

                {fpStep === 'success' && (
                  <div className="text-center py-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-xl font-black text-slate-900 mb-2">Password reset successfully.</h2>
                    <p className="text-xs text-slate-500 mb-8 font-medium">Your account has been secured with the new password.</p>
                    <button type="button" onClick={() => setView('login')} className="w-full bg-[#0a1128] text-white py-3 rounded-lg font-bold hover:bg-slate-900 transition-colors">
                      Return to Sign In
                    </button>
                  </div>
                )}
                
                {fpStep !== 'success' && (
                  <div className="mt-6 text-center">
                    <button type="button" onClick={() => setView('login')} className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors">
                      Back to Sign In
                    </button>
                  </div>
                )}
              </div>
            ) : view === 'login' ? (

              /* --- LOGIN VIEW --- */
              <>
                <div className="mb-6">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Select Your FreightIQ Profile</div>
                  <div className="grid grid-cols-4 gap-2 md:gap-3">
                    {[
                      { id: 'Operations', icon: <Ship className="w-5 h-5 mb-1.5" />, label: 'Operations' },
                      { id: 'Analyst', icon: <BarChart3 className="w-5 h-5 mb-1.5" />, label: 'Analyst' },
                      { id: 'Decision Maker', icon: <Briefcase className="w-5 h-5 mb-1.5" />, label: 'Decision\nMaker' },
                      { id: 'Management', icon: <Building className="w-5 h-5 mb-1.5" />, label: 'Management' }
                    ].map(r => (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => setLoginRole(r.id as Role)}
                        className={`flex flex-col items-center justify-center p-2 md:p-3 rounded-xl border transition-all ${loginRole === r.id ? 'border-slate-800 bg-slate-50 text-slate-900 shadow-sm ring-1 ring-slate-800' : 'border-gray-200 bg-white text-slate-500 hover:border-slate-300 hover:bg-slate-50'}`}
                      >
                        {r.icon}
                        <span className="text-[9px] md:text-[10px] font-bold text-center leading-tight">{r.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex border-b border-gray-200 mb-4 gap-6">
                  <button type="button" className="pb-2 border-b-2 border-slate-900 text-xs font-bold text-slate-900 uppercase tracking-widest">Email Access</button>
                  <button type="button" className="pb-2 border-b-2 border-transparent text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors">SSO Login</button>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">Official Email</label>
                  <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800 transition-colors" 
                    placeholder="admin@freightiq.com" 
                  />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">{en.password}</label>
                    <button type="button" onClick={() => setView('forgot_password')} className="text-xs text-red-500 hover:text-red-700 font-bold transition-colors">Forgot Password?</button>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type={showPassword ? "text" : "password"} 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800 transition-colors" 
                      placeholder={en.passwordPlaceholder} 
                    />
                    <button 
                      type="button" 
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input type="checkbox" id="remember" className="w-4 h-4 rounded border-gray-300 text-slate-800 focus:ring-slate-800" />
                  <label htmlFor="remember" className="text-xs font-bold text-slate-500 uppercase tracking-widest">Keep Session Active</label>
                </div>

                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-[#0a1128] text-white py-3 rounded-lg font-bold hover:bg-slate-900 transition-colors flex items-center justify-center mt-6"
                >
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <span className="flex items-center gap-2">Secure Log In <ArrowRight className="w-4 h-4" /></span>}
                </button>

                <div className="relative py-6">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">OR</span>
                  </div>
                </div>

                <button 
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-slate-50 text-slate-700 border border-slate-200 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 group"
                >
                  Demo Environment Access
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </>
            ) : (
              /* --- SIGNUP VIEW --- */
              <div className="space-y-8 animate-in fade-in duration-500">
                
                {/* 01: PERSONAL INFORMATION */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                    <span className="text-[10px] font-black text-slate-300">01</span>
                    <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest">{en.personalInfo}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">{en.fullName}</label>
                      <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800 text-sm transition-colors" placeholder={en.fullNamePlaceholder} />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">{en.corporateEmail}</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800 text-sm transition-colors" placeholder={en.emailPlaceholder} />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">{en.org}</label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input type="text" value={org} onChange={e => setOrg(e.target.value)} className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800 text-sm transition-colors" placeholder={en.orgPlaceholder} />
                    </div>
                  </div>
                </div>

                {/* 02: SECURITY */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                    <span className="text-[10px] font-black text-slate-300">02</span>
                    <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest">{en.security}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input type={showPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800 text-sm transition-colors" placeholder={en.passwordPlaceholder} />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">{en.confirmPassword}</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input type={showPassword ? "text" : "password"} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800 text-sm transition-colors" placeholder="••••••••" />
                      </div>
                    </div>
                  </div>
                  {password && (
                    <div className="flex items-center gap-2 mt-2">
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{en.strength}</div>
                      <div className="flex gap-1">
                        <div className={`w-6 h-1.5 rounded-full ${password.length > 0 ? 'bg-amber-400' : 'bg-gray-200'}`}></div>
                        <div className={`w-6 h-1.5 rounded-full ${password.length > 5 ? 'bg-amber-400' : 'bg-gray-200'}`}></div>
                        <div className={`w-6 h-1.5 rounded-full ${password.length > 8 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 03: ROLE & WORKSPACE */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                    <span className="text-[10px] font-black text-slate-300">03</span>
                    <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest">{en.roleWorkspace}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'Operations', icon: <Ship className="w-5 h-5 mb-2" /> },
                      { id: 'Analyst', icon: <BarChart3 className="w-5 h-5 mb-2" /> },
                      { id: 'Decision Maker', icon: <Briefcase className="w-5 h-5 mb-2" /> },
                      { id: 'Management', icon: <Building className="w-5 h-5 mb-2" /> }
                    ].map(r => (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => { setRole(r.id as Role); setDynamicInputs({}); }}
                        className={`flex flex-col items-start p-4 rounded-xl border text-left transition-all ${role === r.id ? 'border-blue-600 bg-blue-50/50 shadow-[0_0_0_1px_rgba(37,99,235,1)] ring-1 ring-blue-600/20' : 'border-gray-200 bg-white hover:border-slate-300 hover:bg-slate-50'}`}
                      >
                        <div className={`${role === r.id ? 'text-blue-700' : 'text-slate-600'}`}>
                          {r.icon}
                        </div>
                        {/* @ts-ignore */}
                        <span className={`text-sm font-bold ${role === r.id ? 'text-blue-950' : 'text-slate-700'}`}>{en.roles[r.id as Role].title}</span>
                        {/* @ts-ignore */}
                        <span className="text-[10px] font-medium text-slate-500 mt-1 leading-snug">{en.roles[r.id as Role].desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 04: PROFILE CONFIGURATION */}
                {role && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                      <span className="text-[10px] font-black text-slate-300">04</span>
                    {/* @ts-ignore */}
                      <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest">{en.roles[role as Role].title} {en.profileConfig}</h3>
                    </div>

                    <div className="p-5 bg-slate-50 border border-slate-100 rounded-xl space-y-4">
                      {role === 'Operations' && (
                        <>
                          <div className="space-y-1.5">
                            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">{en.basePort}</label>
                            <select onChange={e=>handleDynamicChange('basePort', e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800 text-sm bg-white">
                              <option value="">{en.selectPort}</option><option>Paradip</option><option>Visakhapatnam</option>
                            </select>
                          </div>
                          <div className="space-y-1.5">
                            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">{en.operatorId}</label>
                            <input type="text" onChange={e=>handleDynamicChange('operatorId', e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800 text-sm" placeholder={en.operatorPlaceholder} />
                          </div>
                          <div className="space-y-1.5">
                            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">{en.alertPref}</label>
                            <div className="flex gap-2">
                              {[{ id: 'In-App', label: en.inApp }, { id: 'SMS', label: en.sms }, { id: 'Email', label: en.email }].map(opt => (
                                <button key={opt.id} type="button" onClick={()=>handleDynamicChange('alertPref', opt.id)} className={`px-3 py-1.5 rounded-md text-xs font-bold border transition-colors ${dynamicInputs.alertPref === opt.id ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-600 border-gray-200 hover:bg-slate-100'}`}>{opt.label}</button>
                              ))}
                            </div>
                          </div>
                        </>
                      )}

                      {role === 'Analyst' && (
                        <>
                          <div className="space-y-1.5">
                            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">{en.tradeRoute}</label>
                            <select onChange={e=>handleDynamicChange('tradeRoute', e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800 text-sm bg-white">
                              <option value="">{en.selectRoute}</option><option>{en.ausInd}</option><option>{en.usaInd}</option>
                            </select>
                          </div>
                          <div className="space-y-1.5">
                            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">{en.specialization}</label>
                            <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800 text-sm bg-white">
                              <option>{en.freightForecasting}</option><option>{en.marketDemands}</option>
                            </select>
                          </div>
                          <div className="space-y-1.5">
                            <label className="flex justify-between block text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                              <span>{en.confidence}</span>
                              <span className="text-slate-800 font-mono">{dynamicInputs.threshold || 85}%</span>
                            </label>
                            <input type="range" min="70" max="99" defaultValue="85" onChange={e=>handleDynamicChange('threshold', e.target.value)} className="w-full accent-slate-800" />
                          </div>
                        </>
                      )}

                      {role === 'Decision Maker' && (
                        <>
                          <div className="space-y-1.5">
                            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">{en.approvalLimit}</label>
                            <div className="relative">
                              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
                              <input type="number" onChange={e=>handleDynamicChange('approvalLimit', e.target.value)} className="w-full pl-8 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800 text-sm" placeholder="e.g. 5000000" />
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">{en.commodityFocus}</label>
                            <div className="flex gap-2">
                              {[{ id: 'Steel', label: en.steel }, { id: 'Coal', label: en.coal }, { id: 'Containers', label: en.containers }].map(opt => (
                                <button key={opt.id} type="button" onClick={()=>handleDynamicChange('commodity', opt.id)} className={`px-3 py-1.5 rounded-md text-xs font-bold border transition-colors ${dynamicInputs.commodity === opt.id ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-600 border-gray-200 hover:bg-slate-100'}`}>{opt.label}</button>
                              ))}
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">{en.delegatedSignatory}</label>
                            <input type="email" onChange={e=>handleDynamicChange('delegatedSignatory', e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800 text-sm" placeholder={en.delegatedPlaceholder} />
                          </div>
                        </>
                      )}

                      {role === 'Management' && (
                        <>
                          <div className="space-y-1.5">
                            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">{en.adminKey}</label>
                            <input type="password" onChange={e=>handleDynamicChange('adminAuthKey', e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800 text-sm font-mono tracking-widest" placeholder="••••••••••••" />
                          </div>
                          <div className="space-y-1.5">
                            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">{en.kpiScope}</label>
                            <div className="flex gap-2">
                              {[{ id: 'Global', label: en.global }, { id: 'APAC', label: en.apac }, { id: 'EMEA', label: en.emea }].map(opt => (
                                <button key={opt.id} type="button" onClick={()=>handleDynamicChange('scope', opt.id)} className={`px-3 py-1.5 rounded-md text-xs font-bold border transition-colors ${dynamicInputs.scope === opt.id ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-600 border-gray-200 hover:bg-slate-100'}`}>{opt.label}</button>
                              ))}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}

                {/* 05: PREFERENCES & CONSENT */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                    <span className="text-[10px] font-black text-slate-300">05</span>
                    <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest">{t.preferences}</h3>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{t.languagePref}</span>
                      <div className="flex bg-slate-100 rounded-lg p-1">
                        <button type="button" onClick={() => setLanguage('en')} className={`px-4 py-1 text-xs font-bold rounded-md transition-all ${language === 'en' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>{language === 'hi' ? 'अंग्रेज़ी' : 'English'}</button>
                        <button type="button" onClick={() => setLanguage('hi')} className={`px-4 py-1 text-xs font-bold rounded-md transition-all ${language === 'hi' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>{language === 'hi' ? 'हिंदी' : 'Hindi'}</button>
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                      <div className="text-[10px] font-bold text-slate-800 uppercase tracking-widest flex items-center gap-1.5 mb-2">
                        <ShieldAlert className="w-3.5 h-3.5 text-slate-500"/> Privacy & Data Consent
                      </div>
                      
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input type="checkbox" checked={consentAnalytics} onChange={e=>setConsentAnalytics(e.target.checked)} className="mt-0.5 w-4 h-4 rounded border-gray-300 text-slate-800 focus:ring-slate-800 transition-colors" />
                        <div>
                          <div className="text-xs font-bold text-slate-800 group-hover:text-slate-900">{t.analyticsProcessing}</div>
                          <div className="text-[10px] text-slate-500 font-medium">{t.analyticsDesc}</div>
                        </div>
                      </label>
                      
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input type="checkbox" checked={consentTracking} onChange={e=>setConsentTracking(e.target.checked)} className="mt-0.5 w-4 h-4 rounded border-gray-300 text-slate-800 focus:ring-slate-800 transition-colors" />
                        <div>
                          <div className="text-xs font-bold text-slate-800 group-hover:text-slate-900">{t.operationalTracking}</div>
                          <div className="text-[10px] text-slate-500 font-medium">{t.operationalDesc}</div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-[#0a1128] text-white py-4 rounded-xl font-bold hover:bg-slate-900 transition-colors flex items-center justify-center shadow-lg shadow-slate-900/20"
                  >
                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <span className="flex items-center gap-2">{en.createBtn} <ArrowRight className="w-4 h-4" /></span>}
                  </button>
                </div>
              </div>
            )}

          </form>

          {/* Footer Toggle */}
          {view !== 'forgot_password' && (
            <div className="mt-8 text-center pt-6 text-xs text-slate-500">
              {view === 'login' ? "Need a verified account? " : en.alreadyHave}
              <button type="button" onClick={toggleView} className="text-red-500 font-bold hover:underline ml-1">
                {view === 'login' ? "Create Account here" : en.signInHere}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
