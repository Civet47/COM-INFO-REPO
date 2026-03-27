import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Database, BookOpen, MessageSquare, Menu, X, Youtube } from 'lucide-react';
import { cn } from '../utils';
import { motion, AnimatePresence } from 'motion/react';

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
    <div className="min-h-screen bg-[#F5F5F4] text-[#1C1917] font-sans">
      {/* Sidebar - Desktop */}
      <aside className="fixed left-0 top-0 hidden h-full w-64 border-r border-[#E7E5E4] bg-white lg:block">
        <div className="flex h-16 items-center border-b border-[#E7E5E4] px-6">
          <span className="text-xl font-bold tracking-tight text-[#78716C]">CLASH OF <span className="text-[#1C1917]">MINDS</span></span>
        </div>
        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-[#F5F5F4] text-[#1C1917]" 
                    : "text-[#78716C] hover:text-[#1C1917] hover:bg-[#FAFAF9]"
                )}
              >
                <item.icon className={cn("w-4 h-4", isActive ? "text-[#1C1917]" : "text-[#A8A29E]")} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Header */}
      <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-[#E7E5E4] bg-white px-4 lg:hidden">
        <span className="text-lg font-bold tracking-tight text-[#78716C]">CLASH OF <span className="text-[#1C1917]">MINDS</span></span>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-10 bg-white pt-16 lg:hidden"
          >
            <nav className="p-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 text-xl font-medium text-[#1C1917]"
                >
                  <item.icon className="w-6 h-6 text-[#A8A29E]" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen p-4 md:p-8 lg:p-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
}
