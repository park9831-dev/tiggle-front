import React from 'react';
import { LayoutDashboard, Wallet, BarChart3, User } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={cn(
      "flex flex-col items-center justify-center px-3 py-1 transition-all active:scale-90",
      isActive ? "text-[#47c4ff] bg-[#00225a]/50 rounded-xl" : "text-[#dee5ff]/40 hover:text-[#dee5ff]"
    )}
  >
    {icon}
    <span className="text-[10px] font-bold uppercase tracking-widest mt-1 font-headline">
      {label}
    </span>
  </button>
);

export const BottomNav: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('dashboard');

  return (
    <nav className="fixed bottom-0 w-full z-50 bg-[#060e20]/90 backdrop-blur-xl border-t border-[#2b4680]/15 shadow-2xl">
      <div className="flex justify-around items-center h-20 px-4 pb-safe max-w-7xl mx-auto">
        <NavItem
          icon={<LayoutDashboard size={20} />}
          label="Dashboard"
          isActive={activeTab === 'dashboard'}
          onClick={() => setActiveTab('dashboard')}
        />
        <NavItem
          icon={<Wallet size={20} />}
          label="Portfolio"
          isActive={activeTab === 'portfolio'}
          onClick={() => setActiveTab('portfolio')}
        />
        <NavItem
          icon={<BarChart3 size={20} />}
          label="Markets"
          isActive={activeTab === 'markets'}
          onClick={() => setActiveTab('markets')}
        />
        <NavItem
          icon={<User size={20} />}
          label="Profile"
          isActive={activeTab === 'profile'}
          onClick={() => setActiveTab('profile')}
        />
      </div>
    </nav>
  );
};
