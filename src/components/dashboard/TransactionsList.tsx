import React from 'react';
import { ShoppingCart, Wallet } from 'lucide-react';
import { Card } from '../common/Card';
import { formatCurrency } from '@/src/lib/utils';

interface Transaction {
  id: string;
  type: 'buy' | 'deposit';
  description: string;
  date: string;
  amount: number;
  status: 'completed' | 'processing';
}

const transactions: Transaction[] = [
  {
    id: '1',
    type: 'buy',
    description: 'Buy 0.45 ETH',
    date: 'Oct 14, 2023',
    amount: -1240.0,
    status: 'completed',
  },
  {
    id: '2',
    type: 'deposit',
    description: 'Deposit from Chase',
    date: 'Oct 12, 2023',
    amount: 5000.0,
    status: 'processing',
  },
];

export const TransactionsList: React.FC = () => {
  return (
    <section className="space-y-6">
      <h2 className="font-headline text-2xl font-bold tracking-tight">Recent Transactions</h2>
      <Card variant="low" className="border border-[#2b4680]/10">
        <div className="divide-y divide-[#2b4680]/10">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between hover:bg-[#002867]/20 transition-colors px-4 py-4 gap-3"
            >
              <div className="flex items-center gap-3 min-w-0 flex-1">
                {tx.type === 'buy' ? (
                  <ShoppingCart size={18} className="text-[#47c4ff] shrink-0" />
                ) : (
                  <Wallet size={18} className="text-[#8f9fb7] shrink-0" />
                )}
                <span className="font-semibold truncate text-sm md:text-base">{tx.description}</span>
              </div>
              <div className="shrink-0 hidden sm:block">
                <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase whitespace-nowrap ${
                  tx.status === 'completed' ? 'bg-[#47c4ff]/10 text-[#47c4ff]' : 'bg-[#8f9fb7]/10 text-[#8f9fb7]'
                }`}>
                  {tx.status}
                </span>
              </div>
              <div className="shrink-0 text-xs text-[#91aaeb] whitespace-nowrap">{tx.date}</div>
              <div className={`shrink-0 text-right font-bold text-sm md:text-base ${tx.amount >= 0 ? 'text-[#47c4ff]' : 'text-[#dee5ff]'}`}>
                {tx.amount >= 0 ? '+' : ''}{formatCurrency(tx.amount)}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};
