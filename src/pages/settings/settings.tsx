/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ArrowLeft, 
  User, 
  FileText, 
  Building2, 
  ChevronRight, 
  Fingerprint, 
  Shield, 
  ShieldCheck, 
  Bell, 
  Moon, 
  Globe, 
  HelpCircle, 
  ExternalLink, 
  Scale, 
  Lock, 
  LogOut, 
  Wallet, 
  TrendingUp, 
  BookOpen, 
  Settings,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { useState } from 'react';

/**
 * Reusable Settings Row Component
 */
interface SettingsItemProps {
  icon: ReactNode;
  label: string;
  value?: string;
  isSwitch?: boolean;
  isActive?: boolean;
  isExternal?: boolean;
  onClick?: () => void;
}

function SettingsItem({ icon, label, value, isSwitch, isActive, isExternal, onClick }: SettingsItemProps) {
  const [enabled, setEnabled] = useState(isActive ?? false);

  return (
    <motion.div 
      whileTap={{ scale: 0.99 }}
      onClick={isSwitch ? () => setEnabled(!enabled) : onClick}
      className="flex items-center justify-between p-5 hover:bg-surface-container-highest/30 transition-all cursor-pointer group active:scale-[0.99]"
    >
      <div className="flex items-center gap-4">
        <div className="text-tertiary">
          {icon}
        </div>
        <span className="font-sans text-sm font-medium text-on-surface">{label}</span>
      </div>
      
      <div className="flex items-center gap-3">
        {value && <span className="font-sans text-[11px] text-secondary font-medium">{value}</span>}
        
        {isSwitch ? (
          <div 
            className={`w-10 h-5 rounded-full relative flex items-center px-1 transition-colors duration-300 ${enabled ? 'bg-tertiary/20' : 'bg-surface-container-highest'}`}
          >
            <motion.div 
              animate={{ x: enabled ? 20 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={`w-3.5 h-3.5 rounded-full ${enabled ? 'bg-tertiary' : 'bg-secondary'}`}
            />
          </div>
        ) : isExternal ? (
          <ExternalLink size={18} className="text-outline-variant group-hover:text-tertiary transition-colors" />
        ) : (
          <ChevronRight size={18} className="text-outline-variant group-hover:text-tertiary transition-colors" />
        )}
      </div>
    </motion.div>
  );
}

/**
 * Group Wrapper Component
 */
function SettingsGroup({ title, children }: { title: string, children: ReactNode }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-4"
    >
      <h3 className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-secondary px-2">{title}</h3>
      <div className="bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/10 shadow-lg">
        {children}
      </div>
    </motion.section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-surface selection:bg-tertiary/30">
      {/* Top App Bar */}
      <header className="bg-surface/80 backdrop-blur-md w-full sticky top-0 z-50 border-b border-outline-variant/10">
        <div className="flex items-center justify-between px-6 py-4 max-w-2xl mx-auto">
          <div className="flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-primary hover:bg-tertiary/10 transition-colors p-2 rounded-lg"
            >
              <ArrowLeft size={20} />
            </motion.button>
            <h1 className="text-primary font-headline font-bold tracking-tight text-xl">Settings</h1>
          </div>
          <div className="text-xl font-bold text-on-surface tracking-tighter">WS</div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 pt-8 pb-32 space-y-12">
        {/* Profile Section */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-6 bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 shadow-[0_-4px_40px_rgba(222,229,255,0.03)]"
        >
          <div className="relative">
            <div className="w-20 h-20 rounded-full border-2 border-outline-variant/30 p-1">
              <img 
                alt="Alexander Sterling" 
                className="w-full h-full rounded-full object-cover" 
                src="https://picsum.photos/seed/wealth/200/200"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-tertiary w-5 h-5 rounded-full border-4 border-surface-container-low flex items-center justify-center">
              <CheckCircle2 size={10} className="text-surface font-bold fill-current" />
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="font-headline font-extrabold text-2xl tracking-tight text-on-surface">Alexander Sterling</h2>
            <p className="font-sans text-sm text-tertiary font-medium">Premium Wealth Member</p>
            <p className="font-sans text-[10px] text-secondary tracking-widest uppercase mt-1 opacity-70">ID: 8829-QX</p>
          </div>
        </motion.section>

        {/* Groups */}
        <div className="space-y-12">
          <SettingsGroup title="Account Settings">
            <SettingsItem icon={<User size={18} />} label="Personal Information" />
            <SettingsItem icon={<FileText size={18} />} label="Documents" />
            <SettingsItem icon={<Building2 size={18} />} label="Linked Accounts" />
          </SettingsGroup>

          <SettingsGroup title="Security & Privacy">
            <SettingsItem icon={<Fingerprint size={18} />} label="Biometric Lock" isSwitch isActive={true} />
            <SettingsItem icon={<Shield size={18} />} label="Two-Factor Authentication" value="ACTIVE" />
            <SettingsItem icon={<ShieldCheck size={18} />} label="Privacy Center" />
          </SettingsGroup>

          <SettingsGroup title="Preferences">
            <SettingsItem icon={<Bell size={18} />} label="Notification Settings" />
            <SettingsItem icon={<Moon size={18} />} label="Display" value="Dark Mode" />
            <SettingsItem icon={<Globe size={18} />} label="Language" value="English (US)" />
          </SettingsGroup>

          <SettingsGroup title="Support & Legal">
            <SettingsItem icon={<HelpCircle size={18} />} label="Help Center" isExternal />
            <SettingsItem icon={<Scale size={18} />} label="Terms of Service" />
            <SettingsItem icon={<Lock size={18} />} label="Privacy Policy" />
          </SettingsGroup>
        </div>

        {/* Logout Button */}
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-3 py-5 bg-error/10 border border-error/20 rounded-xl hover:bg-error/20 transition-all group"
        >
          <LogOut size={18} className="text-error" />
          <span className="font-headline font-bold text-error tracking-wide">Sign Out of Alexander's Account</span>
        </motion.button>

        {/* Footer */}
        <footer className="pt-8 pb-12 flex flex-col items-center justify-center opacity-40">
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-secondary">WealthSense v4.2.1-PRO</p>
          <div className="h-[2px] w-8 bg-outline-variant mt-4 opacity-30" />
        </footer>
      </main>

      {/* Bottom Nav Bar */}
      <nav className="bg-surface-container-low/80 backdrop-blur-xl fixed bottom-0 w-full z-50 rounded-t-2xl border-t border-outline-variant/15 shadow-2xl">
        <div className="max-w-2xl mx-auto flex justify-around items-center px-4 pb-6 pt-3">
          <NavItem icon={<Wallet size={20} />} label="Portfolio" />
          <NavItem icon={<TrendingUp size={20} />} label="Markets" />
          <NavItem icon={<BookOpen size={20} />} label="Insights" />
          <NavItem icon={<Settings size={20} />} label="Settings" active />
        </div>
      </nav>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: ReactNode, label: string, active?: boolean }) {
  return (
    <motion.a 
      href="#"
      whileTap={{ scale: 0.9 }}
      className={`flex flex-col items-center justify-center transition-colors ${active ? 'text-tertiary' : 'text-secondary hover:text-on-surface'}`}
    >
      <div className={active ? 'fill-current' : ''}>
        {icon}
      </div>
      <span className={`font-sans text-[10px] font-medium tracking-wide uppercase mt-1 ${active ? 'font-bold' : ''}`}>
        {label}
      </span>
    </motion.a>
  );
}

