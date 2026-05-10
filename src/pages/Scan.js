import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Maximize, Minimize, Eye, ArrowLeft } from 'lucide-react';
import PlayStoreButton from '../components/PlayStoreButton';
import ScrollReveal from '../components/ScrollReveal';

const SCAN_COLORS = [
  { id: 'white', label: 'White', hex: '#FFFFFF' },
  { id: 'gray', label: 'Gray', hex: '#808080' },
  { id: 'navy', label: 'Navy', hex: '#000080' },
  { id: 'red', label: 'Red', hex: '#FF0000' },
  { id: 'green', label: 'Green', hex: '#00FF00' },
  { id: 'yellow', label: 'Yellow', hex: '#FFFF00' },
  { id: 'lightblue', label: 'Light Blue', hex: '#ADD8E6' },
  { id: 'pink', label: 'Pink', hex: '#FFC0CB' },
];

const Scan = () => {
  const [selectedColor, setSelectedColor] = useState('white');
  const [started, setStarted] = useState(false);
  const [uiHidden, setUiHidden] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const activeColor = SCAN_COLORS.find(c => c.id === selectedColor);

  const handleCanvasClick = () => {
    if (!started) return;
    setUiHidden(!uiHidden);
  };

  const handleStart = async () => {
    setStarted(true);
    setUiHidden(false);
    const el = document.getElementById('scan-tool-container');
    if (el && !document.fullscreenElement) {
      try { await el.requestFullscreen(); } catch (e) { /* fullscreen not supported or denied */ }
    }
  };

  const handleExit = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    setStarted(false);
    setUiHidden(false);
  };

  const toggleFullscreen = useCallback(() => {
    const el = document.getElementById('scan-tool-container');
    if (!document.fullscreenElement) {
      el?.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }, []);

  useEffect(() => {
    const onFSChange = () => {
      const fs = !!document.fullscreenElement;
      setIsFullscreen(fs);
      if (!fs) setUiHidden(false);
    };
    document.addEventListener('fullscreenchange', onFSChange);
    return () => document.removeEventListener('fullscreenchange', onFSChange);
  }, []);

  return (
    <main className="bg-void min-h-screen">
      {!isFullscreen && (
        <div className="pt-24 pb-6 px-4">
          <div className="max-w-5xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-muted hover:text-lime transition-colors mb-4 text-sm">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>

            <h1 className="text-3xl sm:text-5xl font-bold font-mono mb-4">
              OLED Burn-in <span className="text-lime">Scanner</span>
            </h1>
            <p className="text-muted text-lg max-w-2xl mb-4 leading-relaxed">
              Display solid colors on your screen to identify where burn-in has occurred. Look for faint ghost images, uneven patches, or discoloration against each solid color.
            </p>
            <div className="bg-lime/10 border border-lime/30 rounded-lg p-4 text-sm text-lime font-mono space-y-1">
              <p className="flex items-center gap-2"><Maximize className="w-4 h-4 flex-shrink-0" /> Use fullscreen mode for maximum screen coverage.</p>
              <p className="flex items-center gap-2"><Eye className="w-4 h-4 flex-shrink-0" /> Tap the screen to hide all UI for a clean inspection.</p>
            </div>
          </div>
        </div>
      )}

      <div
        id="scan-tool-container"
        className={`relative ${isFullscreen ? 'fixed inset-0 z-50' : 'max-w-5xl mx-auto px-4 mb-8'}`}
        style={{ backgroundColor: started && activeColor ? activeColor.hex : '#000000' }}
      >
        <div
          className={`relative rounded-xl overflow-hidden ${isFullscreen ? '' : 'border border-border'}`}
          style={{
            ...(isFullscreen ? { height: '100vh' } : { height: '500px' }),
          }}
        >
          {started && (
            <div
              className="absolute inset-0 cursor-pointer"
              style={{ backgroundColor: activeColor?.hex || '#FFFFFF' }}
              onClick={handleCanvasClick}
              role="button"
              tabIndex={0}
              aria-label="Tap to hide UI for clean inspection"
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCanvasClick(); }}
            />
          )}

          {!started && !isFullscreen && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-void/80 backdrop-blur-sm">
              <Eye className="w-16 h-16 text-lime mb-4 animate-pulse-glow" />
              <h2 className="text-2xl font-bold font-mono text-white mb-2">Ready to Scan</h2>
              <p className="text-muted mb-6 text-center px-8">Press Start to begin scanning. Fullscreen mode will activate automatically.</p>
              <button
                onClick={handleStart}
                className="bg-lime text-void px-10 py-4 rounded-lg font-bold text-lg hover:bg-lime-hover transition-all animate-pulse-glow hover:scale-105 flex items-center gap-2"
              >
                <Eye className="w-5 h-5" /> Start Scanning
              </button>
            </div>
          )}

          {started && !uiHidden && (
            <>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <p className="text-black/80 font-mono text-lg font-semibold text-center px-8 mb-2"
                   style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
                  Tap the screen to hide this text for a clean inspection
                </p>
                <p className="text-black/60 font-mono text-sm text-center px-8"
                   style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
                  Look for ghost images, uneven patches, or discoloration
                </p>
              </div>

              <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/60 to-transparent p-4">
                <div className="flex items-center justify-between">
                  <span className="text-white font-mono font-bold text-lg drop-shadow-lg">
                    Scan: {activeColor?.label}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleFullscreen}
                      className="bg-white/10 backdrop-blur-sm p-2 rounded-lg hover:bg-white/20 transition-colors pointer-events-auto"
                      aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                    >
                      {isFullscreen ? (
                        <Minimize className="w-5 h-5 text-white" />
                      ) : (
                        <Maximize className="w-5 h-5 text-white" />
                      )}
                    </button>
                    <button
                      onClick={handleExit}
                      className="bg-white/10 backdrop-blur-sm p-2 rounded-lg hover:bg-white/20 transition-colors pointer-events-auto"
                      aria-label="Exit scanner"
                    >
                      <span className="text-white text-sm font-mono">Exit</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute right-0 top-1/2 -translate-y-1/2 pr-3 pointer-events-auto sm:pr-4">
                <div className="bg-black/40 backdrop-blur-sm rounded-lg p-2 space-y-1.5">
                  {SCAN_COLORS.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color.id)}
                      className={`block w-8 h-8 sm:w-9 sm:h-9 rounded-md border-2 transition-all hover:scale-110 ${
                        selectedColor === color.id ? 'border-white scale-110 shadow-lg' : 'border-white/30'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      aria-label={color.label}
                      title={color.label}
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {!isFullscreen && !started && (
        <div className="max-w-5xl mx-auto px-4 pb-20">
          <div className="glass-card rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold font-mono mb-4 text-lime">&gt; How to Scan for Burn-in</h2>
            <div className="grid sm:grid-cols-2 gap-8 text-muted">
              <div>
                <h3 className="text-white font-semibold font-mono text-sm mb-2">How do I detect burn-in?</h3>
                <p className="text-sm leading-relaxed">
                  Select a color from the side panel and look closely at your screen. Burn-in appears as faint ghost images, shadowy patches, or uneven areas visible against the solid color. Gray and white are especially effective at revealing burn-in.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold font-mono text-sm mb-2">Which color should I use?</h3>
                <p className="text-sm leading-relaxed">
                  Gray and white tend to show burn-in most clearly. Red, green, and blue help identify specific pixel degradation. Try several colors — some burn-in is only visible against certain backgrounds.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold font-mono mb-4 text-lime">&gt; What to Look For</h2>
            <div className="grid sm:grid-cols-3 gap-6 text-muted text-sm">
              <div>
                <h3 className="text-white font-semibold font-mono text-sm mb-2">Ghost Images</h3>
                <p className="leading-relaxed">Faint outlines of previously displayed content — like a status bar, keyboard, or navigation buttons — visible against the solid color.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold font-mono text-sm mb-2">Uneven Patches</h3>
                <p className="leading-relaxed">Areas that appear slightly darker or discolored compared to the surrounding screen, indicating uneven pixel wear.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold font-mono text-sm mb-2">Color Shifts</h3>
                <p className="leading-relaxed">Colors that look tinted or washed out in specific areas, especially visible on gray or white backgrounds.</p>
              </div>
            </div>
          </div>

          <ScrollReveal>
            <div className="glass-card rounded-xl p-6 text-center border-lime/20">
              <h3 className="text-xl font-bold font-mono mb-3">Found burn-in? Fix it for free.</h3>
              <p className="text-muted mb-5">Our pixel refresh tool rapidly cycles random pixels to help reduce visible burn-in.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/fix"
                  className="inline-flex items-center justify-center gap-2 bg-lime text-void px-6 py-3 rounded-lg font-bold hover:bg-lime-hover transition-all hover:shadow-[0_0_20px_rgba(205,255,0,0.4)]"
                >
                  Try Fix Tool
                </Link>
                <PlayStoreButton size="small" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      )}
    </main>
  );
};

export default Scan;
