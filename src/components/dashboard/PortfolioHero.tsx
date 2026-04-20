import React from 'react';
import { TrendingUp } from 'lucide-react';
import { formatCurrency } from '@/src/lib/utils';

interface PortfolioHeroProps {
  totalValue: number;
  changePercent: number;
}

export const PortfolioHero: React.FC<PortfolioHeroProps> = ({ totalValue, changePercent }) => {
  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-1">
        <span className="text-sm uppercase tracking-widest text-[#91aaeb] font-medium">
          Total Portfolio Value
        </span>
        <div className="flex items-baseline gap-4 flex-wrap">
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-[#dee5ff] font-headline">
            {formatCurrency(totalValue)}
          </h1>
          <div className="flex items-center gap-1 text-[#47c4ff] font-semibold text-lg bg-[#47c4ff]/10 px-3 py-1 rounded-full">
            <TrendingUp size={16} />
            <span>+{changePercent}%</span>
          </div>
        </div>
      </div>
    </section>
  );
};
