import React from 'react';
import { ShieldCheck, Monitor, Lock, Chrome } from 'lucide-react';
import { Button } from '../../components/common/Button';

interface LoginFormProps {
  onLogin: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  return (
    <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Side: Editorial Content */}
      <div className="hidden md:flex flex-col space-y-8 pr-12">
        <div className="space-y-4">
          <h1 className="font-headline text-5xl font-extrabold tracking-tight leading-tight text-[#dee5ff]">
            Precision in <br />
            <span className="text-[#47c4ff]">Wealth Management</span>
          </h1>
          <p className="text-[#91aaeb] text-lg max-w-md leading-relaxed">
            Access your institutional-grade portfolio dashboard. Meticulously organized data for the discerning investor.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#06122d] p-6 rounded-xl border border-[#2b4680]/10">
            <div className="text-[#47c4ff] mb-2">
              <Monitor size={24} />
            </div>
            <div className="text-sm font-medium text-[#dee5ff]">Real-time Data</div>
            <div className="text-xs text-[#91aaeb]">Live market execution</div>
          </div>
          <div className="bg-[#06122d] p-6 rounded-xl border border-[#2b4680]/10">
            <div className="text-[#47c4ff] mb-2">
              <Lock size={24} />
            </div>
            <div className="text-sm font-medium text-[#dee5ff]">Tier-1 Security</div>
            <div className="text-xs text-[#91aaeb]">Encrypted vault access</div>
          </div>
        </div>

        <div className="relative rounded-xl overflow-hidden h-48 group">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-60"></div>
          <img
            alt="Abstract digital network"
            className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-4 left-4 z-20">
            <span className="text-[10px] uppercase tracking-widest text-[#91aaeb] font-bold">Network Status</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#47c4ff] animate-pulse"></div>
              <span className="text-xs text-[#dee5ff]">Encrypted Node Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Login Form Card */}
      <div className="w-full max-w-md mx-auto">
        <div className="bg-[#031d4b]/40 backdrop-blur-xl p-8 md:p-10 rounded-2xl shadow-2xl border border-[#2b4680]/15">
          <div className="mb-10 text-center md:text-left">
            <h2 className="font-headline text-2xl font-bold text-[#dee5ff] mb-2">Welcome Back</h2>
            <p className="text-[#91aaeb] text-sm">Please enter your credentials to access your terminal.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-widest text-[#91aaeb] ml-1" htmlFor="email">
                Email Address
              </label>
              <input
                className="w-full bg-[#06122d] border-b-2 border-[#2b4680]/30 focus:border-[#47c4ff] focus:ring-0 text-[#dee5ff] py-3 px-4 transition-all placeholder:text-[#91aaeb]/30 outline-none"
                id="email"
                placeholder="investor@wealthsense.com"
                type="email"
                required
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-[11px] font-bold uppercase tracking-widest text-[#91aaeb] ml-1" htmlFor="password">
                  Password
                </label>
                <a className="text-[10px] font-bold uppercase tracking-widest text-[#47c4ff] hover:text-[#dee5ff] transition-colors" href="#">
                  Forgot Password?
                </a>
              </div>
              <input
                className="w-full bg-[#06122d] border-b-2 border-[#2b4680]/30 focus:border-[#47c4ff] focus:ring-0 text-[#dee5ff] py-3 px-4 transition-all placeholder:text-[#91aaeb]/30 outline-none"
                id="password"
                placeholder="••••••••••••"
                type="password"
                required
              />
            </div>

            <Button className="w-full py-4 tracking-tight" type="submit">
              Access Terminal
            </Button>
          </form>

          <div className="my-8 flex items-center gap-4">
            <div className="h-[1px] flex-grow bg-[#2b4680]/20"></div>
            <span className="text-[10px] uppercase tracking-widest text-[#91aaeb]/60 font-medium">Or Continue With</span>
            <div className="h-[1px] flex-grow bg-[#2b4680]/20"></div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-10">
            <button className="flex items-center justify-center gap-3 bg-[#06122d] hover:bg-[#002867]/30 border border-[#2b4680]/10 py-3 rounded-lg transition-all text-sm font-medium text-[#dee5ff]">
              <Chrome size={16} />
              Google
            </button>
            <button className="flex items-center justify-center gap-3 bg-[#06122d] hover:bg-[#002867]/30 border border-[#2b4680]/10 py-3 rounded-lg transition-all text-sm font-medium text-[#dee5ff]">
              <Lock size={16} />
              Apple
            </button>
          </div>

          <div className="text-center">
            <span className="text-sm text-[#91aaeb]">New to WealthSense?</span>
            <a className="text-sm font-bold text-[#47c4ff] ml-2 hover:underline decoration-[#47c4ff]/30 underline-offset-4 transition-all" href="#">
              Create Account
            </a>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-6 opacity-40">
          <span className="text-[10px] uppercase tracking-widest font-bold">Privacy</span>
          <span className="text-[10px] uppercase tracking-widest font-bold">Terms</span>
          <span className="text-[10px] uppercase tracking-widest font-bold">Support</span>
        </div>
      </div>
    </div>
  );
};
