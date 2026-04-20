import React from 'react';
import { Bell } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#060e20]/80 backdrop-blur-md">
      <div className="flex justify-between items-center px-6 h-16 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#39485a] flex items-center justify-center overflow-hidden">
            <img
              alt="User Profile"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-xl font-bold tracking-tighter text-[#b9c8de] font-headline">
            WealthSense
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-[#dee5ff]/60 hover:bg-[#002867]/30 transition-colors p-2 rounded-lg active:scale-95">
            <Bell size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};
