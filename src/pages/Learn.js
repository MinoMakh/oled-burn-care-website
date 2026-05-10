import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Sun, AlertTriangle, Shield, CheckCircle, X, Zap } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import PlayStoreButton from '../components/PlayStoreButton';

const preventionTips = [
  { title: 'Reduce Brightness', desc: 'Keep brightness below 50-60% when possible. Higher brightness accelerates pixel wear exponentially.' },
  { title: 'Use Dark Mode', desc: 'OLED pixels are off when displaying black. Dark themes drastically reduce pixel usage across your display.' },
  { title: 'Shorter Screen Timeout', desc: 'Set your screen timeout to 30 seconds or less. Every second the display is off saves pixel lifespan.' },
  { title: 'Enable Auto-Brightness', desc: 'Auto-brightness adjusts to ambient light, preventing unnecessary brightness in dark environments.' },
  { title: 'Change Wallpapers Regularly', desc: 'Rotate wallpapers with different colors and patterns. Avoid static wallpapers with bright, fixed elements.' },
  { title: 'Use Pixel Shifting', desc: 'If your device offers pixel shifting or screen shift, enable it. Small periodic movements prevent static image retention.' },
  { title: 'Hide Navigation Bar', desc: 'Use gesture navigation instead of on-screen buttons. The nav bar is a common burn-in culprit.' },
  { title: 'Take Breaks', desc: 'Give your display periodic rest. Long gaming or video sessions concentrate wear on specific pixel areas.' },
];

const myths = [
  {
    myth: 'Burn-in is permanent and cannot be fixed.',
    fact: 'Mild burn-in and image retention can often be reduced or eliminated with pixel refresh techniques. Only severe, long-standing burn-in may be permanent.',
  },
  {
    myth: 'OLED screens will always burn in eventually.',
    fact: 'Modern OLED panels have significantly improved lifespans. With proper care and prevention, most users will never notice noticeable burn-in during the device\'s typical lifespan.',
  },
  {
    myth: 'Burn-in and image retention are the same thing.',
    fact: 'Image retention is temporary — a faint ghost that fades quickly. Burn-in is permanent uneven pixel wear. The Fix Tool can help with both.',
  },
  {
    myth: 'Only cheap OLED screens get burn-in.',
    fact: 'Burn-in can affect any OLED display, regardless of price. It\'s an inherent property of OLED technology, though newer panels resist it better.',
  },
  {
    myth: 'Leaving the screen on all night will fix burn-in.',
    fact: 'Leaving your screen on static content will likely worsen burn-in. Pixel refresh tools need to actively cycle colors — not display static images.',
  },
];

const Learn = () => (
  <main className="bg-void">
    <section className="pt-28 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-lime font-mono text-sm uppercase tracking-widest mb-2">
            &gt; Knowledge base
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold font-mono mb-6">
            Understanding OLED <span className="text-lime">Burn-in</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed max-w-2xl">
            Everything you need to know about how OLED burn-in happens, how to tell if you have it, and what you can do about it.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <article id="what-is-burnin" className="py-16 px-4 bg-surface">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono mb-8 flex items-center gap-3">
            <Monitor className="w-8 h-8 text-lime" />
            What Is OLED Burn-in?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="glass-card rounded-xl p-8 mb-8">
            <p className="text-muted leading-relaxed mb-4">
              OLED (Organic Light-Emitting Diode) displays create images using millions of individual pixels, each producing its own light. Unlike LCD panels that use a single backlight, OLED pixels age independently — and that&apos;s where burn-in comes from.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              When certain pixels are used more intensely or more frequently than others (like the always-visible status bar, navigation buttons, or a game HUD), they degrade unevenly. The result is a faint but persistent &quot;ghost&quot; image that&apos;s visible even when viewing other content.
            </p>
            <p className="text-muted leading-relaxed">
              Think of it like a path worn into grass — the more you walk the same route, the more visible the path becomes. Burn-in is the visible trail left by repeated pixel usage patterns.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="glass-card rounded-xl p-6 border-lime/30 mb-8">
            <h3 className="font-mono font-semibold text-lime mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Burn-in vs. Image Retention
            </h3>
            <p className="text-muted leading-relaxed">
              <strong className="text-white">Image retention</strong> is temporary — a faint ghost that fades within minutes or hours. It happens when pixels briefly &quot;remember&quot; a previous image. <strong className="text-white">Burn-in</strong> is permanent — uneven pixel wear that persists regardless of what&apos;s displayed. Both can be improved with pixel refresh techniques, but burn-in takes longer to address.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <div className="glass-card rounded-xl p-6">
            <h3 className="font-mono font-semibold text-white mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-lime" />
              OLED vs AMOLED
            </h3>
            <p className="text-muted leading-relaxed">
              Whether your device uses <strong className="text-white">OLED</strong> or <strong className="text-white">AMOLED</strong> (Active-Matrix OLED) technology, both are susceptible to burn-in. AMOLED adds a thin-film transistor backplane for faster response and lower power, but it doesn&apos;t prevent pixel aging. If you have either type of display, the same prevention and fix techniques apply — and our tools work for both.
            </p>
          </div>
</ScrollReveal>
       </div>
     </article>

     <article id="causes" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono mb-8 flex items-center gap-3">
            <Sun className="w-8 h-8 text-lime" />
            What Causes OLED Burn-in?
          </h2>
        </ScrollReveal>
        <div className="space-y-4">
          {[
            { title: 'Status Bars & Navigation', desc: 'The always-visible top and bottom of your screen display the same icons, time, and buttons for thousands of hours. These are the #1 cause of visible burn-in on smartphones.' },
            { title: 'Gaming HUDs', desc: 'Heads-up displays with health bars, minimaps, and scores remain in fixed positions during gaming sessions, creating concentrated pixel wear in those areas.' },
            { title: 'Always-On Display', desc: 'While modern AOD implementations shift the content slightly, older or static implementations can cause burn-in where the clock and icons persist.' },
            { title: 'High Brightness Usage', desc: 'Running at maximum brightness forces pixels to emit more light, accelerating their degradation. This is especially impactful combined with static content.' },
            { title: 'Extended Viewing Sessions', desc: 'Binge-watching shows or long work sessions with the same app mean the same pixels are active for extended periods, creating uneven wear patterns.' },
            { title: 'Keyboard Areas', desc: 'The keyboard region of your screen is illuminated far more than the content area during typing, potentially creating a faint burn-in line at the keyboard\'s top edge.' },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 50}>
              <div className="glass-card glass-card-hover rounded-xl p-5 flex gap-4">
                <div className="bg-lime/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lime font-mono font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <h3 className="text-white font-mono font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
</div>
       </div>
     </article>

     <article id="prevention" className="py-16 px-4 bg-surface">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono mb-8 flex items-center gap-3">
            <Shield className="w-8 h-8 text-lime" />
            Prevention Tips
          </h2>
          <p className="text-muted mb-8 leading-relaxed">
            The best burn-in treatment is prevention. These habits will significantly extend your display&apos;s lifespan:
          </p>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-4">
          {preventionTips.map((tip, i) => (
            <ScrollReveal key={tip.title} delay={i * 50}>
              <div className="glass-card glass-card-hover rounded-xl p-5">
                <h3 className="text-white font-mono font-semibold text-sm mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-lime flex-shrink-0" />
                  {tip.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{tip.desc}</p>
              </div>
            </ScrollReveal>
))}
         </div>
       </div>
     </article>

     <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono mb-8 flex items-center gap-3">
            <X className="w-8 h-8 text-lime" />
            Myths vs. Facts
          </h2>
        </ScrollReveal>
        <div className="space-y-4">
          {myths.map(({ myth, fact }, i) => (
            <ScrollReveal key={i} delay={i * 50}>
              <div className="glass-card rounded-xl overflow-hidden">
                <div className="bg-red-500/10 border-b border-red-500/20 p-5">
                  <p className="text-sm font-semibold text-red-400 flex items-start gap-2">
                    <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Myth: {myth}</span>
                  </p>
                </div>
                <div className="p-5">
                  <p className="text-sm text-muted leading-relaxed">
                    <strong className="text-lime">Fact:</strong> {fact}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 px-4 bg-surface">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="glass-card rounded-2xl p-8 sm:p-10 text-center border-lime/20 lime-glow">
            <div className="bg-void/50 rounded-xl p-4 inline-block mb-6">
              <Zap className="w-10 h-10 text-lime" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-mono mb-4">
              Take Action with <span className="text-lime">OLED Burn Care</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto mb-6 leading-relaxed text-left sm:text-center">
              Our free web tools help you diagnose and fix burn-in right in your browser. But for complete protection, the full Android app gives you everything:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 max-w-lg mx-auto mb-8 text-left">
              <div className="flex items-center gap-2 text-muted text-sm">
                <CheckCircle className="w-4 h-4 text-lime flex-shrink-0" />
                <span><strong className="text-white">Scan Mode</strong> — detect burn-in</span>
              </div>
              <div className="flex items-center gap-2 text-muted text-sm">
                <CheckCircle className="w-4 h-4 text-lime flex-shrink-0" />
                <span><strong className="text-white">Fix Mode</strong> — refresh pixels</span>
              </div>
              <div className="flex items-center gap-2 text-muted text-sm">
                <CheckCircle className="w-4 h-4 text-lime flex-shrink-0" />
                <span><strong className="text-white">Prevention Mode</strong> — custom overlays</span>
              </div>
              <div className="flex items-center gap-2 text-muted text-sm">
                <CheckCircle className="w-4 h-4 text-lime flex-shrink-0" />
                <span><strong className="text-white">Screen Off Mode</strong> — anti-drift</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/fix"
                className="inline-flex items-center gap-2 bg-surface text-white px-6 py-3 rounded-lg font-bold border border-border hover:border-lime/50 transition-all"
              >
                Try Free Tools
              </Link>
              <PlayStoreButton size="default" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="glass-card rounded-2xl p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold font-mono mb-4">
              When to Seek <span className="text-lime">Professional Repair</span>
            </h2>
            <div className="text-muted max-w-2xl mb-6 text-left space-y-3 leading-relaxed">
              <p>If you&apos;ve tried pixel refresh techniques and the burn-in remains clearly visible during normal use, it may be time to consider professional options:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-lime mt-1 flex-shrink-0" /> <span>Some manufacturers offer warranty replacement for severe burn-in within the first year</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-lime mt-1 flex-shrink-0" /> <span>Professional display calibration services can sometimes reduce visible effects</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-lime mt-1 flex-shrink-0" /> <span>Panel replacement is the only guaranteed fix for deep, permanent burn-in</span></li>
              </ul>
              <p className="text-lime font-mono font-semibold mt-4">&gt; Try our free Fix Tool first — many mild cases respond well to pixel refresh cycles.</p>
            </div>
            <Link
              to="/fix"
              className="inline-flex items-center gap-2 bg-lime text-void px-8 py-4 rounded-lg font-bold text-lg hover:bg-lime-hover transition-all hover:scale-105 animate-pulse-glow"
            >
              Try Fix Tool
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default Learn;