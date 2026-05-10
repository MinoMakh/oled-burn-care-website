import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone } from 'lucide-react';

const Footer = () => (
  <footer className="bg-surface border-t border-border" aria-label="Site footer">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link to="/" className="flex items-center space-x-2 mb-4">
            <Smartphone className="w-6 h-6 text-lime" />
            <span className="text-lg font-bold text-white font-mono">
              OLED<span className="text-lime">.</span>Burn<span className="text-lime">.</span>Care
            </span>
          </Link>
          <p className="text-muted text-sm leading-relaxed">
            Free tools and guides to help you understand, prevent, and fix OLED burn-in on any device. Try our online pixel refresh tool or get the full Android app.
          </p>
        </div>

        <div>
          <h3 className="text-white font-mono font-semibold text-sm uppercase tracking-wider mb-4">
            Resources
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/fix" className="text-muted hover:text-lime transition-colors text-sm">
                Fix OLED Burn-in Online
              </Link>
            </li>
            <li>
              <Link to="/scan" className="text-muted hover:text-lime transition-colors text-sm">
                Scan for Burn-in
              </Link>
            </li>
            <li>
              <Link to="/learn" className="text-muted hover:text-lime transition-colors text-sm">
                What Causes OLED Burn-in?
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-muted hover:text-lime transition-colors text-sm">
                OLED Burn-in FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-muted hover:text-lime transition-colors text-sm">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-mono font-semibold text-sm uppercase tracking-wider mb-4">
            Get the App
          </h3>
          <p className="text-muted text-sm mb-4">
            Full-featured Android app with Scan, Prevention, Fix, and Screen Off modes.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.oledcare.oledburncare&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-lime text-void px-5 py-2 rounded-md font-bold text-sm hover:bg-lime-hover transition-all hover:shadow-[0_0_20px_rgba(205,255,0,0.4)]"
          >
            Download on Google Play
          </a>
        </div>
      </div>

      <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-muted text-sm">
          &copy; {new Date().getFullYear()} OLED Burn Care. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <Link to="/privacy-policy" className="text-muted hover:text-lime transition-colors text-sm">
            Privacy Policy
          </Link>
          <Link to="/contact" className="text-muted hover:text-lime transition-colors text-sm">
            Contact
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;