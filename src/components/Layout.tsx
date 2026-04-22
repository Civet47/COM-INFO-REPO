import { AnimatePresence, motion } from 'motion/react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Database, LayoutDashboard, Menu, MessageSquare, X, Youtube } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import { cn } from '../utils';
import { Logo } from './Logo';

const navItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Motions', path: '/motions', icon: Database },
  { name: 'Case Files', path: '/case-files', icon: BookOpen },
  { name: 'Guides', path: '/guides', icon: BookOpen },
  { name: 'YouTube Analyzer', path: '/youtube', icon: Youtube },
  { name: 'AI Assistant', path: '/assistant', icon: MessageSquare },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-brand-cream text-brand-black font-sans relative overflow-x-hidden">
      {/* Heritage Pattern Background Layer */}
      <div className="fixed inset-0 heritage-pattern pointer-events-none z-0" />

      {/* Sidebar - Desktop */}
      <aside className="fixed left-0 top-0 hidden h-full w-64 border-r border-brand-black/10 bg-white/80 backdrop-blur-md lg:block z-10">
        <div className="flex h-20 items-center justify-center border-b border-brand-black/5 px-6">
          <Logo size="sm" />
        </div>
        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const isCaseFiles = item.path === '/case-files';
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-all group relative overflow-hidden",
                  isActive 
                    ? "bg-brand-black text-white shadow-md shadow-brand-black/10" 
                    : "text-brand-black/60 hover:text-brand-black hover:bg-brand-black/5"
                )}
              >
                {isActive && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute inset-0 bg-brand-black z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <item.icon className={cn("w-4 h-4 relative z-10", isActive ? "text-brand-gold" : "text-brand-black/30 group-hover:text-brand-black/50")} />
                <span className="relative z-10">{item.name}</span>
                {isCaseFiles && !isActive && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                )}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Header */}
      <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-brand-black/5 bg-white/90 backdrop-blur-md px-4 lg:hidden">
        <Logo size="sm" />
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-brand-black">
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-30 bg-white lg:hidden overflow-y-auto"
          >
            <div className="flex items-center justify-between p-4 border-b border-brand-black/5">
              <Logo size="sm" />
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="p-6 space-y-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-4 text-xl font-bold p-4 rounded-2xl transition-all",
                      isActive ? "bg-brand-black text-white" : "text-brand-black/60 hover:bg-brand-black/5"
                    )}
                  >
                    <item.icon className={cn("w-6 h-6", isActive ? "text-brand-gold" : "text-brand-black/30")} />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen p-4 md:p-8 lg:p-12 relative z-10">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      </main>
      <Analytics />
    </div>
  );
}
