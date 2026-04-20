import React from 'react';
import { Landmark, Bitcoin, Apple, Zap } from 'lucide-react';
import { Card } from '../../components/common/Card';
import { formatCurrency, formatPercentage } from '@/src/lib/utils';

interface Holding {
  id: string;
  name: string;
  symbol: string;
  type: string;
  value: number;
  change: number;
  icon: React.ReactNode;
}

const holdings: Holding[] = [
  {
    id: '1',
    name: 'BlackRock S&P 500',
    symbol: 'IVV',
    type: 'ETF',
    value: 512.44,
    change: 1.24,
    icon: <Landmark size={20} />,
  },
  {
    id: '2',
    name: 'Bitcoin',
    symbol: 'BTC',
    type: 'Crypto',
    value: 64210.0,
    change: 3.82,
    icon: <Bitcoin size={20} />,
  },
  {
    id: '3',
    name: 'Apple Inc.',
    symbol: 'AAPL',
    type: 'Stock',
    value: 189.45,
    change: -0.42,
    icon: <Apple size={20} />,
  },
  {
    id: '4',
    name: 'Tesla, Inc.',
    symbol: 'TSLA',
    type: 'Stock',
    value: 174.6,
    change: 0.15,
    icon: <Zap size={20} />,
  },
];

export const HoldingsList: React.FC = () => {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-headline text-2xl font-bold tracking-tight">Top Holdings</h2>
        <button className="text-[#47c4ff] text-sm font-semibold hover:underline">View All</button>
      </div>
      <Card variant="low" className="p-1">
        <div className="divide-y divide-[#2b4680]/20">
          {holdings.map((holding) => (
            <div
              key={holding.id}
              className="flex items-center justify-between p-5 hover:bg-[#002867]/30 transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00225a] flex items-center justify-center text-[#47c4ff]">
                  {holding.icon}
                </div>
                <div>
                  <h4 className="font-bold text-[#dee5ff]">{holding.name}</h4>
                  <span className="text-xs font-medium text-[#91aaeb] uppercase tracking-widest">
                    {holding.symbol} • {holding.type}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-[#dee5ff]">{formatCurrency(holding.value)}</div>
                <div className={`text-xs font-semibold ${holding.change >= 0 ? 'text-[#47c4ff]' : 'text-[#ee7d77]'}`}>
                  {formatPercentage(holding.change)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};
