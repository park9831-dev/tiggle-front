import React from 'react';
import { BarChart2, Globe } from 'lucide-react';
import { Card } from '../common/Card';

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  category: string;
  time: string;
  icon: React.ReactNode;
  isAnalysis?: boolean;
}

const news: NewsItem[] = [
  {
    id: '1',
    title: 'Fed Signals Potential Rate Adjustments Amid Q3 Inflation Data',
    summary: 'Market analysts weigh in on the latest FOMC minutes and what it means for growth-focused portfolios in the coming quarter.',
    category: 'Analysis',
    time: '2h ago',
    icon: <BarChart2 size={14} />,
    isAnalysis: true,
  },
  {
    id: '2',
    title: 'Tech Giants Rebound as AI Infrastructure Spending Surges',
    summary: 'Nvidia and Microsoft lead a recovery in the Nasdaq 100 as new data center projections exceed expectations.',
    category: 'Global',
    time: '5h ago',
    icon: <Globe size={14} />,
  },
];

export const NewsSection: React.FC = () => {
  return (
    <section className="space-y-6">
      <h2 className="font-headline text-2xl font-bold tracking-tight">Market News</h2>
      <div className="space-y-4">
        {news.map((item) => (
          <Card
            key={item.id}
            variant="high"
            className="p-6 space-y-3 hover:bg-[#00225a] transition-colors group cursor-pointer"
          >
            <div className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest ${item.isAnalysis ? 'text-[#47c4ff]' : 'text-[#8f9fb7]'}`}>
              {item.icon}
              {item.category} • {item.time}
            </div>
            <h3 className="font-headline font-bold text-lg leading-tight group-hover:text-[#47c4ff] transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-[#91aaeb] line-clamp-2">
              {item.summary}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};
