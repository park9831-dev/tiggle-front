import React from 'react';
import { Plus, Info, TriangleAlert } from 'lucide-react';
import { Header } from './layouts/Header';
import { BottomNav } from './layouts/BottomNav';
import { PortfolioHero } from './pages/dashboard/PortfolioHero';
import { PerformanceChart } from './pages/dashboard/PerformanceChart';
import { HoldingsList } from './pages/dashboard/HoldingsList';
import { NewsSection } from './pages/dashboard/NewsSection';
import { TransactionsList } from './pages/dashboard/TransactionsList';
import { LoginForm } from './pages/auth/LoginForm';
import { Modal } from './components/common/Modal';
import { Button } from './components/common/Button';
import { cn } from './lib/utils';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [showSecurityModal, setShowSecurityModal] = React.useState(false);
  const [showDiscardModal, setShowDiscardModal] = React.useState(false);

  // Simulate a security update modal on login
  React.useEffect(() => {
    if (isLoggedIn) {
      const timer = setTimeout(() => setShowSecurityModal(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#060e20] text-[#dee5ff] flex flex-col">
        <header className="bg-[#06122d] flex items-center justify-between w-full px-6 py-4 fixed top-0 z-50">
          <div className="flex items-center gap-2">
            <span className="font-headline tracking-tighter text-xl font-bold text-[#dee5ff]">WealthSense</span>
          </div>
          <div>
            <span className="text-[11px] font-medium uppercase tracking-widest text-[#dee5ff]/60">Secure Portal</span>
          </div>
        </header>
        <main className="flex-grow flex items-center justify-center px-4 pt-20 pb-12">
          <LoginForm onLogin={() => setIsLoggedIn(true)} />
        </main>
        <footer className="py-6 px-6 text-center border-t border-[#2b4680]/10">
          <p className="text-[10px] text-[#91aaeb]/40 tracking-widest uppercase">
            © 2024 WealthSense Institutional Services. All rights reserved.
          </p>
        </footer>
      </div>
    );
  }

  return (
    <div className={cn("min-h-screen bg-[#060e20] text-[#dee5ff]", (showSecurityModal || showDiscardModal) && "overflow-hidden")}>
      <Header />

      <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto space-y-12">
        <PortfolioHero totalValue={842591.12} changePercent={12.4} />
        <PerformanceChart />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <HoldingsList />
          </div>
          <div className="lg:col-span-5">
            <NewsSection />
          </div>
        </div>

        <TransactionsList />
      </main>

      <BottomNav />

      {/* Floating Action Button */}
      <button
        onClick={() => setShowDiscardModal(true)}
        className="fixed right-6 bottom-24 w-14 h-14 bg-[#b9c8de] text-[#334153] rounded-full shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-40"
      >
        <Plus size={32} />
      </button>

      {/* Modals */}
      <Modal
        isOpen={showSecurityModal}
        onClose={() => setShowSecurityModal(false)}
        title="Security Update"
        description="We have updated our terms of service for your account security. Reviewing these changes ensures your assets remain protected under our latest compliance standards."
        icon={<Info size={24} />}
      />

      <Modal
        isOpen={showDiscardModal}
        onClose={() => setShowDiscardModal(false)}
        title="Discard Changes?"
        description="You have unsaved changes in your profile. Are you sure you want to exit? All modifications will be permanently lost."
        variant="warning"
        icon={<TriangleAlert size={24} />}
        footer={
          <div className="flex gap-3">
            <Button variant="ghost" onClick={() => setShowDiscardModal(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={() => { setShowDiscardModal(false); setIsLoggedIn(false); }}>
              Discard
            </Button>
          </div>
        }
      />
    </div>
  );
}
