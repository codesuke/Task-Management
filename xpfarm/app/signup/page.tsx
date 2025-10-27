'use client';

import { useState } from 'react';
import { authAPI } from '@/lib/api';

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear errors when user starts typing
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const result = await authAPI.signup(formData);
      
      if (result.success) {
        setSuccess('Account created successfully! Redirecting...');
        // Clear form
        setFormData({
          firstName: '',
          lastName: '',
          username: '',
          email: '',
          password: ''
        });
        // Redirect to login or dashboard after 2 seconds
        setTimeout(() => {
          // window.location.href = '/login';
        }, 2000);
      } else {
        setError(result.message || 'Signup failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      console.error('Signup error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    // TODO: Implement actual OAuth flow
    console.log(`Login with ${provider}`);
    setError('Social login coming soon!');
  };

  return (
    <div className="min-h-screen bg-black flex">
      {/* Left Side - Info Section */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-16">
        <div>
          <div className="flex items-center gap-3 mb-16">
            <div className="w-8 h-8 bg-[#CCFF00] rounded-full flex items-center justify-center">
              <span className="text-black text-xl font-bold">S</span>
            </div>
            <span className="text-white text-xl font-semibold font-orbitron">Superlist</span>
          </div>

          <h1 className="text-white text-5xl font-bold mb-8 leading-tight font-orbitron">
            Start your 30-day free trial
          </h1>
          
          <p className="text-[#A8A8A8] text-sm mb-12 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="7.5" stroke="#A8A8A8" strokeWidth="1"/>
              <path d="M11 6L7 10L5 8" stroke="#A8A8A8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            No credit card required
          </p>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-[#0A0A0A] rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#CCFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="#CCFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#CCFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2 font-kode-mono">Invite unlimited colleagues</h3>
                <p className="text-[#A8A8A8] text-sm leading-relaxed">
                  Integrate with guaranteed developer-friendly APIs or openly to choose a third-party or low-code solution.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-[#0A0A0A] rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="#CCFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 4L12 14.01l-3-3" stroke="#CCFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2 font-kode-mono">Ensure compliance</h3>
                <p className="text-[#A8A8A8] text-sm leading-relaxed">
                  Resolve detailed insights on all your numbers in real-time, see where visitors are coming from.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-[#0A0A0A] rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="#CCFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#CCFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2 font-kode-mono">Built-in security</h3>
                <p className="text-[#A8A8A8] text-sm leading-relaxed">
                  Keep your team members and customers in the loop by sharing your dashboard publicly.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-6 text-[#A8A8A8] text-sm">
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Docs</a>
          <a href="#" className="hover:text-white transition-colors">Help</a>
          <button className="flex items-center gap-2 hover:text-white transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1"/>
              <path d="M8 3v5l3 3" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
            </svg>
            English
          </button>
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="bg-[#0A0A0A] rounded-2xl p-8 border border-[#1a1a1a]">
            <div className="mb-6">
              <p className="text-[#A8A8A8] text-sm mb-4 text-center">Register with</p>
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => handleSocialLogin('Google')}
                  className="bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors border border-[#2a2a2a]"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
                    <path d="M9.003 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18z" fill="#34A853"/>
                    <path d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                    <path d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.426 0 9.003 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z" fill="#EA4335"/>
                  </svg>
                  <span className="text-sm font-kode-mono">Google</span>
                </button>
                <button
                  onClick={() => handleSocialLogin('Github')}
                  className="bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors border border-[#2a2a2a]"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9 0C4.0275 0 0 4.13211 0 9.22838C0 13.3065 2.5785 16.7648 6.15375 17.9841C6.60375 18.0709 6.76875 17.7853 6.76875 17.5403C6.76875 17.3212 6.76125 16.7405 6.7575 15.9712C4.254 16.5277 3.726 14.7332 3.726 14.7332C3.3165 13.6681 2.72475 13.3832 2.72475 13.3832C1.9095 12.8111 2.78775 12.8229 2.78775 12.8229C3.6915 12.8871 4.16625 13.7737 4.16625 13.7737C4.96875 15.1847 6.273 14.777 6.7875 14.5414C6.8685 13.9443 7.10025 13.5381 7.3575 13.3073C5.35875 13.0764 3.258 12.2829 3.258 8.74709C3.258 7.73988 3.60675 6.91659 4.18425 6.27095C4.083 6.03774 3.77925 5.0994 4.263 3.82846C4.263 3.82846 5.01675 3.58116 6.738 4.77462C7.458 4.56958 8.223 4.46785 8.988 4.46315C9.753 4.46785 10.518 4.56958 11.238 4.77462C12.948 3.58116 13.7017 3.82846 13.7017 3.82846C14.1855 5.0994 13.8818 6.03774 13.7917 6.27095C14.3655 6.91659 14.7142 7.73988 14.7142 8.74709C14.7142 12.2923 12.6105 13.0725 10.608 13.2995C10.923 13.5765 11.2155 14.1423 11.2155 15.0071C11.2155 16.242 11.2043 17.2344 11.2043 17.5341C11.2043 17.7759 11.3617 18.0647 11.823 17.9723C15.4237 16.7609 18 13.3002 18 9.22838C18 4.13211 13.9703 0 9 0Z" fill="white"/>
                  </svg>
                  <span className="text-sm font-kode-mono">Github</span>
                </button>
                <button
                  onClick={() => handleSocialLogin('Gitlab')}
                  className="bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors border border-[#2a2a2a]"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L11.58 10.26H6.42L9 18Z" fill="#E24329"/>
                    <path d="M9 18L6.42 10.26H1.74L9 18Z" fill="#FC6D26"/>
                    <path d="M1.74 10.26L.42 14.04C.3 14.4.42 14.82.72 15.06L9 18L1.74 10.26Z" fill="#FCA326"/>
                    <path d="M1.74 10.26H6.42L4.68 4.86C4.56 4.5 4.02 4.5 3.9 4.86L1.74 10.26Z" fill="#E24329"/>
                    <path d="M9 18L11.58 10.26H16.26L9 18Z" fill="#FC6D26"/>
                    <path d="M16.26 10.26L17.58 14.04C17.7 14.4 17.58 14.82 17.28 15.06L9 18L16.26 10.26Z" fill="#FCA326"/>
                    <path d="M16.26 10.26H11.58L13.32 4.86C13.44 4.5 13.98 4.5 14.1 4.86L16.26 10.26Z" fill="#E24329"/>
                  </svg>
                  <span className="text-sm font-kode-mono">Gitlab</span>
                </button>
              </div>
            </div>

            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-[#2a2a2a]"></div>
              <span className="px-4 text-[#A8A8A8] text-sm">Or</span>
              <div className="flex-1 h-px bg-[#2a2a2a]"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}
              
              {success && (
                <div className="bg-green-500/10 border border-green-500/50 text-green-500 px-4 py-3 rounded-lg text-sm">
                  {success}
                </div>
              )}

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="firstName" className="block text-[#A8A8A8] text-sm mb-2 font-kode-mono">
                    First Name
                  </label>
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#A8A8A8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      className="w-full bg-[#1a1a1a] text-white pl-10 pr-4 py-3 rounded-lg border border-[#2a2a2a] focus:outline-none focus:border-[#4D4D4D] placeholder-[#4D4D4D] font-kode-mono text-sm"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-[#A8A8A8] text-sm mb-2 font-kode-mono">
                    Last Name
                  </label>
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#A8A8A8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="w-full bg-[#1a1a1a] text-white pl-10 pr-4 py-3 rounded-lg border border-[#2a2a2a] focus:outline-none focus:border-[#4D4D4D] placeholder-[#4D4D4D] font-kode-mono text-sm"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="username" className="block text-[#A8A8A8] text-sm mb-2 font-kode-mono">
                  Username
                </label>
                <div className="relative">
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#A8A8A8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                    className="w-full bg-[#1a1a1a] text-white pl-10 pr-4 py-3 rounded-lg border border-[#2a2a2a] focus:outline-none focus:border-[#4D4D4D] placeholder-[#4D4D4D] font-kode-mono text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-[#A8A8A8] text-sm mb-2 font-kode-mono">
                  Email
                </label>
                <div className="relative">
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#A8A8A8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full bg-[#1a1a1a] text-white pl-10 pr-4 py-3 rounded-lg border border-[#2a2a2a] focus:outline-none focus:border-[#4D4D4D] placeholder-[#4D4D4D] font-kode-mono text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-[#A8A8A8] text-sm mb-2 font-kode-mono">
                  Password
                </label>
                <div className="relative">
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#A8A8A8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full bg-[#1a1a1a] text-white pl-10 pr-12 py-3 rounded-lg border border-[#2a2a2a] focus:outline-none focus:border-[#4D4D4D] placeholder-[#4D4D4D] font-kode-mono text-sm"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#A8A8A8] hover:text-white transition-colors"
                  >
                    {showPassword ? (
                      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
                <p className="text-[#4D4D4D] text-xs mt-2 font-kode-mono">Minimum length is 8 characters</p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#CCFF00] hover:bg-[rgba(204,255,0,0.85)] text-black font-semibold py-3 px-4 rounded-lg transition-colors font-kode-mono disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Creating Account...' : 'Sign Up'}
              </button>

              <p className="text-[#A8A8A8] text-xs text-center mt-4">
                By creating an account, you agree to the{' '}
                <a href="#" className="text-white underline hover:text-[rgba(255,255,255,0.85)] transition-colors">
                  Terms of Service
                </a>
                . We'll occasionally send you account-related emails.
              </p>

              <p className="text-[#A8A8A8] text-sm text-center mt-6">
                Already have an account?{' '}
                <a href="#" className="text-[#CCFF00] hover:text-[rgba(204,255,0,0.85)] transition-colors font-semibold">
                  Login
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
