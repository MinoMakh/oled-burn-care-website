import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Smartphone } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/fix', label: 'Fix' },
  { to: '/scan', label: 'Scan' },
  { to: '/learn', label: 'Learn' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-void/95 backdrop-blur-md border-b border-border py-2'
          : 'bg-void/80 backdrop-blur-sm border-b border-border/50 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <Smartphone className="w-7 h-7 text-lime group-hover:drop-shadow-[0_0_8px_rgba(205,255,0,0.5)] transition-all" />
            <span className="text-lg font-bold text-white font-mono tracking-tight">
              OLED<span className="text-lime">.</span>Burn<span className="text-lime">.</span>Care
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  location.pathname === to
                    ? 'text-lime bg-lime/10'
                    : 'text-muted hover:text-lime hover:bg-lime/5'
                }`}
              >
                {label}
              </Link>
            ))}
            </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-md border-t border-border">
          <div className="px-4 pt-3 pb-5 space-y-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-all ${
                  location.pathname === to
                    ? 'text-lime bg-lime/10'
                    : 'text-muted hover:text-lime hover:bg-lime/5'
                }`}
              >
                {label}
              </Link>
            ))}
            </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;