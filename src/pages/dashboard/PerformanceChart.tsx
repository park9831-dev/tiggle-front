import React from 'react';
import { Card } from '../../components/common/Card';

export const PerformanceChart: React.FC = () => {
  return (
    <Card variant="low" className="relative w-full h-64 md:h-80 group">
      {/* Grid Lines */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 py-10 opacity-20 pointer-events-none">
        <div className="border-t border-[#2b4680] w-full"></div>
        <div className="border-t border-[#2b4680] w-full"></div>
        <div className="border-t border-[#2b4680] w-full"></div>
        <div className="border-t border-[#2b4680] w-full"></div>
      </div>

      {/* SVG Chart */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 300">
        <defs>
          <linearGradient id="portfolioGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#47c4ff" stopOpacity="0.25" />
            <stop offset="80%" stopColor="#47c4ff" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#47c4ff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Benchmark Line (S&P 500) */}
        <path
          d="M0,260 L100,255 L200,230 L300,240 L400,210 L500,215 L600,190 L700,200 L800,170 L900,180 L1000,150"
          fill="none"
          stroke="#8f9fb7"
          strokeDasharray="8,4"
          strokeOpacity="0.4"
          strokeWidth="1.5"
        />

        {/* Portfolio Area */}
        <path
          d="M0,250 C100,240 200,280 300,220 C400,160 500,180 600,80 C700,40 800,120 900,60 L1000,40 V300 H0 Z"
          fill="url(#portfolioGradient)"
        />

        {/* Portfolio Main Line */}
        <path
          d="M0,250 C100,240 200,280 300,220 C400,160 500,180 600,80 C700,40 800,120 900,60 L1000,40"
          fill="none"
          stroke="#47c4ff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </svg>

      {/* Chart Legend Overlay */}
      <div className="absolute top-4 left-6 flex gap-4 text-[10px] font-bold uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-[#47c4ff]"></div>
          <span className="text-[#dee5ff]">Portfolio</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 border-t-2 border-dashed border-[#8f9fb7]/40"></div>
          <span className="text-[#91aaeb]">S&P 500</span>
        </div>
      </div>

      {/* Interactive Tooltip Highlight */}
      <div className="absolute top-[40px] right-[40px] flex flex-col items-center group-hover:scale-105 transition-all duration-300 pointer-events-none">
        <div className="w-3 h-3 bg-[#47c4ff] rounded-full ring-4 ring-[#47c4ff]/20 shadow-[0_0_15px_rgba(71,196,255,0.6)]"></div>
        <div className="mt-2 bg-[#00225a]/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold shadow-2xl border border-[#2b4680]/30 flex flex-col items-center">
          <span className="text-[#47c4ff]">$842,591</span>
          <span className="text-[9px] text-[#91aaeb]/80">CURRENT PEAK</span>
        </div>
      </div>
    </Card>
  );
};
