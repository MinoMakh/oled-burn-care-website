import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, Square, Maximize, Minimize, Zap, ArrowLeft, AlertTriangle, CheckCircle } from 'lucide-react';
import PlayStoreButton from '../components/PlayStoreButton';

const Fix = () => {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [showBreak, setShowBreak] = useState(false);
  const hideTimerRef = useRef(null);
  const lastBreakRef = useRef(0);

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  const drawNoise = useCallback((ctx, w, h) => {
    const data = ctx.createImageData(w, h);
    const buf = data.data;
    for (let i = 0; i < buf.length; i += 4) {
      buf[i] = Math.random() * 255;
      buf[i + 1] = Math.random() * 255;
      buf[i + 2] = Math.random() * 255;
      buf[i + 3] = 255;
    }
    ctx.putImageData(data, 0, 0);
  }, []);

  const drawFrame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !running) return;
    const ctx = canvas.getContext('2d');
    const { width, height } = canvas;
    drawNoise(ctx, width, height);
    animRef.current = requestAnimationFrame(drawFrame);
  }, [running, drawNoise]);

  useEffect(() => {
    if (!running) {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      return;
    }
    animRef.current = requestAnimationFrame(drawFrame);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [running, drawFrame]);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setElapsed((prev) => {
        const next = prev + 1;
        if (next - lastBreakRef.current >= 1800 && !showBreak) {
          lastBreakRef.current = next;
          setShowBreak(true);
        }
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [running, showBreak]);

  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      if (isFullscreen) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      } else {
        canvas.width = canvas.parentElement?.clientWidth || 800;
        canvas.height = 500;
      }
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [isFullscreen]);

  const toggleFullscreen = useCallback(() => {
    const el = document.getElementById('fix-tool-container');
    if (!document.fullscreenElement) {
      el?.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    const onFSChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFSChange);
    return () => document.removeEventListener('fullscreenchange', onFSChange);
  }, []);

  useEffect(() => {
    if (!isFullscreen) { setShowControls(true); return; }
    const handleMove = () => {
      setShowControls(true);
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = setTimeout(() => setShowControls(false), 3000);
    };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchstart', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchstart', handleMove);
      clearTimeout(hideTimerRef.current);
    };
  }, [isFullscreen]);

  useEffect(() => {
    const onBeforeUnload = (e) => {
      if (running) { e.preventDefault(); e.returnValue = ''; }
    };
    window.addEventListener('beforeunload', onBeforeUnload);
    return () => window.removeEventListener('beforeunload', onBeforeUnload);
  }, [running]);

  const handleStart = async () => {
    setRunning(true);
    setElapsed(0);
    lastBreakRef.current = 0;
    setShowBreak(false);
    const el = document.getElementById('fix-tool-container');
    if (el && !document.fullscreenElement) {
      try { await el.requestFullscreen(); } catch (e) { /* fullscreen not supported or denied */ }
    }
  };

  const handleStop = () => {
    setRunning(false);
    if (animRef.current) cancelAnimationFrame(animRef.current);
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#0A0A0A';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  };

  const handlePause = () => {
    setRunning(false);
    if (animRef.current) cancelAnimationFrame(animRef.current);
  };

  return (
    <main className="bg-void min-h-screen">
      {!isFullscreen && (
        <div className="pt-24 pb-6 px-4">
          <div className="max-w-5xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-muted hover:text-lime transition-colors mb-4 text-sm">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>

            <h1 className="text-3xl sm:text-5xl font-bold font-mono mb-4">
              OLED Burn-in <span className="text-lime">Fix Tool</span>
            </h1>
            <p className="text-muted text-lg max-w-2xl mb-4 leading-relaxed">
              Rapidly cycle random pixels across your screen to refresh stuck or degraded OLED pixels. Fullscreen recommended for best results.
            </p>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-2 text-sm text-red-300 font-mono">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-200 mb-1">Warning: Flashing content</p>
                  <p>This tool displays rapidly flashing colors and random pixel patterns. Do not use if you are sensitive to flashing lights or have photosensitive epilepsy.</p>
                </div>
              </div>
            </div>
            <div className="bg-lime/10 border border-lime/30 rounded-lg p-4 text-sm font-mono space-y-1">
              <p className="text-lime flex items-center gap-2"><Maximize className="w-4 h-4 flex-shrink-0" /> Use fullscreen mode for maximum screen coverage.</p>
              <p className="text-lime flex items-center gap-2"><CheckCircle className="w-4 h-4 flex-shrink-0" /> For better results, turn your screen brightness to maximum before starting.</p>
              <p className="text-lime flex items-center gap-2"><CheckCircle className="w-4 h-4 flex-shrink-0" /> Longer sessions (30-60 min) yield better results for image retention.</p>
              <p className="text-lime flex items-center gap-2"><CheckCircle className="w-4 h-4 flex-shrink-0" /> Severe, long-standing burn-in may not respond to pixel refresh.</p>
            </div>
          </div>
        </div>
      )}

      <div
        id="fix-tool-container"
        className={`relative bg-black ${isFullscreen ? 'fixed inset-0 z-50' : 'max-w-5xl mx-auto px-4 mb-8'}`}
      >
        <div className={`relative rounded-xl overflow-hidden ${isFullscreen ? '' : 'border border-border'}`}>
          <canvas
            ref={canvasRef}
            className="w-full block"
            style={{ height: isFullscreen ? '100vh' : '500px' }}
          />

          {!running && !isFullscreen && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-void/80 backdrop-blur-sm">
              <Zap className="w-16 h-16 text-lime mb-4 animate-pulse-glow" />
              <h2 className="text-2xl font-bold font-mono text-white mb-2">Ready to Start</h2>
              <p className="text-muted mb-6 text-center px-8">Press Start to begin the pixel refresh cycle. Fullscreen mode will activate automatically.</p>
              <button
                onClick={handleStart}
                className="bg-lime text-void px-10 py-4 rounded-lg font-bold text-lg hover:bg-lime-hover transition-all animate-pulse-glow hover:scale-105 flex items-center gap-2"
              >
                <Play className="w-5 h-5" /> Start
              </button>
            </div>
          )}

          <div
            className={`absolute top-0 left-0 right-0 transition-opacity duration-300 ${
              showControls || !running ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="bg-gradient-to-b from-black/70 to-transparent p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-lime font-mono font-bold text-lg">
                    {formatTime(elapsed)}
                  </span>
                  <span className="text-muted text-sm font-mono">
                    Pixel Refresh
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {running ? (
                    <>
                      <button
                        onClick={handlePause}
                        className="bg-white/10 backdrop-blur-sm p-2 rounded-lg hover:bg-white/20 transition-colors"
                        aria-label="Pause"
                      >
                        <Pause className="w-5 h-5 text-white" />
                      </button>
                      <button
                        onClick={handleStop}
                        className="bg-white/10 backdrop-blur-sm p-2 rounded-lg hover:bg-white/20 transition-colors"
                        aria-label="Stop"
                      >
                        <Square className="w-5 h-5 text-white" />
                      </button>
                    </>
                  ) : elapsed > 0 ? (
                    <button
                      onClick={handleStart}
                      className="bg-lime/20 backdrop-blur-sm p-2 rounded-lg hover:bg-lime/30 transition-colors"
                      aria-label="Resume"
                    >
                      <Play className="w-5 h-5 text-lime" />
                    </button>
                  ) : null}
                  <button
                    onClick={toggleFullscreen}
                    className="bg-white/10 backdrop-blur-sm p-2 rounded-lg hover:bg-white/20 transition-colors"
                    aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                  >
                    {isFullscreen ? (
                      <Minimize className="w-5 h-5 text-white" />
                    ) : (
                      <Maximize className="w-5 h-5 text-white" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {showBreak && (
            <div className="absolute inset-0 flex items-center justify-center bg-void/90 backdrop-blur-sm z-10">
              <div className="glass-card rounded-2xl p-8 text-center max-w-md mx-4">
                <h3 className="text-2xl font-bold font-mono text-lime mb-4">
                  &gt; Take a Break
                </h3>
                <p className="text-muted mb-6">
                  You&apos;ve been running the tool for {formatTime(elapsed)}. Consider giving your eyes and device a short rest.
                </p>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={() => setShowBreak(false)}
                    className="bg-lime text-void px-6 py-3 rounded-lg font-bold hover:bg-lime-hover transition-all"
                  >
                    Continue
                  </button>
                  <button
                    onClick={() => { handleStop(); setShowBreak(false); }}
                    className="bg-surface text-white px-6 py-3 rounded-lg font-bold border border-border hover:border-lime/50 transition-all"
                  >
                    Stop
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {!isFullscreen && (
        <div className="max-w-5xl mx-auto px-4 pb-20">
          {!running && (
            <PlayStoreButton size="small" className="w-full sm:w-auto mb-8" />
          )}

          <div className="glass-card rounded-xl p-6">
            <h2 className="text-xl font-bold font-mono mb-4 text-lime">&gt; How It Works</h2>
            <div className="grid sm:grid-cols-2 gap-8 text-muted">
              <div>
                <h3 className="text-white font-semibold font-mono text-sm mb-2">What does the Fix Tool do?</h3>
                <p className="text-sm leading-relaxed">
                  The tool rapidly cycles random pixel colors across your entire screen at maximum speed. This stimulates all OLED pixels equally, helping to normalize uneven pixel degradation that causes visible burn-in.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold font-mono text-sm mb-2">How long should I run it?</h3>
                <p className="text-sm leading-relaxed">
                  For best results, run for 30-60 minutes. Mild image retention may improve after just 15 minutes, while deeper burn-in may require longer sessions over multiple days. Use fullscreen mode for best coverage.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold font-mono text-sm mb-2">Tips for best results</h3>
                <p className="text-sm leading-relaxed">
                  Turn your screen brightness to maximum before starting. Use fullscreen mode for complete screen coverage. Longer sessions yield better results. Take breaks every 30 minutes. Severe or long-standing burn-in may not fully respond.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold font-mono text-sm mb-2">Want more control?</h3>
                <p className="text-sm leading-relaxed">
                  The full Android app includes Scan Mode to detect burn-in, Prevention Mode for custom overlays, and Screen Off Mode with anti-drift features.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Fix;
