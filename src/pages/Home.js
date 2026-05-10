import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Shield, Zap, Moon, ChevronRight, ArrowRight, Monitor, AlertTriangle, Sun, CheckCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import HeroCanvas from '../components/HeroCanvas';
import PlayStoreButton from '../components/PlayStoreButton';

const causes = [
  {
    icon: Monitor,
    title: 'Static UI Elements',
    desc: 'Status bars, navigation buttons, and persistent overlays leave permanent shadows on OLED panels over time.',
  },
  {
    icon: Sun,
    title: 'High Brightness',
    desc: 'Running your display at maximum brightness accelerates pixel degradation, especially in hot climates.',
  },
  {
    icon: AlertTriangle,
    title: 'Extended Usage',
    desc: 'Long gaming sessions, always-on displays, and continuous app usage concentrate wear on repeated pixel areas.',
  },
];

const appFeatures = [
  {
    icon: Smartphone,
    title: 'Scan Mode',
    desc: 'Display solid colors across your screen to easily identify where burn-in has occurred.',
    highlights: ['Multiple test colors', 'Full screen coverage', 'Clear burn-in detection'],
  },
  {
    icon: Shield,
    title: 'Prevention Mode',
    desc: 'Create custom overlays to protect vulnerable screen areas from permanent burn-in caused by static UI elements.',
    highlights: ['Custom overlay creation', 'Target specific areas', 'Proactive protection'],
  },
  {
    icon: Zap,
    title: 'Fix Mode',
    desc: 'Rapidly cycle random pixels to stimulate and refresh degraded pixels, helping reduce visible burn-in.',
    highlights: ['Fast pixel cycling', 'Random pixel patterns', 'Restore uniformity'],
  },
  {
    icon: Moon,
    title: 'Screen Off Mode',
    desc: 'Black out your display while apps keep running, with floating bubble toggle, clock display, and anti burn-in drift.',
    highlights: ['Floating bubble toggle', 'Clock and battery display', 'Anti burn-in drift'],
  },
];

const Home = () => (
  <main className="bg-void">
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <HeroCanvas />
      <div className="scan-lines absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void/50 to-void pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <ScrollReveal delay={100}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-mono leading-tight mb-6">
            Fix & Prevent{' '}
            <span className="text-lime drop-shadow-[0_0_20px_rgba(205,255,0,0.4)]">OLED Burn-in</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-muted text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed">
            Free online tools to fix screen burn-in and scan for damage. Learn what causes OLED burn-in, how to prevent it, and get the full Android app for complete protection.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/fix"
              className="inline-flex items-center gap-2 bg-lime text-void px-8 py-4 rounded-lg font-bold text-lg hover:bg-lime-hover transition-all animate-pulse-glow hover:scale-105"
            >
              <Zap className="w-5 h-5" />
              Free Fix & Scan Tools
            </Link>
            <PlayStoreButton size="default" />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={400}>
          <div className="mt-12 flex items-center gap-6 text-muted text-sm flex-wrap">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-lime" />
              <span>Free to use</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-lime" />
              <span>No sign-up required</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-lime font-mono text-sm uppercase tracking-widest mb-2 text-center">
            &gt; Diagnosis
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono mb-12 text-center">
            What is OLED Burn-in?
          </h2>
          <p className="text-muted text-center mb-8 max-w-2xl mx-auto" style={{ marginTop: '-32px' }}>
            Whether your phone, TV, or monitor uses OLED or AMOLED, burn-in is a risk. <Link to="/learn" className="text-lime hover:text-lime-hover">Learn more about what causes it</Link> and how to deal with it.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <p className="text-muted text-lg mb-6 leading-relaxed">
                OLED burn-in occurs when static images displayed for extended periods leave permanent ghost images on your screen. This happens because OLED pixels emit their own light and gradually degrade unevenly over time.
              </p>
              <p className="text-muted text-lg mb-6 leading-relaxed">
                Unlike temporary <span className="text-white font-medium">image retention</span>, true burn-in represents uneven pixel wear that persists even when the display is powered off. The good news? Mild cases can often be improved with targeted pixel refresh techniques.
              </p>
              <p className="text-lime font-semibold text-lg font-mono">
                &gt; Try our free Fix & Scan tools below →
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="glass-card rounded-xl p-8 space-y-5">
              {causes.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4 group">
                  <div className="bg-lime/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-lime/20 transition-colors">
                    <Icon className="w-6 h-6 text-lime" />
                  </div>
                  <div>
                    <h4 className="text-white font-mono font-semibold mb-1">{title}</h4>
                    <p className="text-muted text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-lime/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-lime font-mono text-sm uppercase tracking-widest mb-2">
              &gt; No download required
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono mb-6">
              Free Tools — <span className="text-lime">Right Here</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Our web tools help you diagnose and address burn-in directly in your browser — no app install needed.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
          <ScrollReveal delay={0}>
            <Link to="/fix?mode=fix" className="glass-card glass-card-hover rounded-2xl p-8 text-center block group">
              <div className="bg-void rounded-xl p-6 mb-5 relative overflow-hidden inline-block">
                <div className="scan-lines absolute inset-0 opacity-30" />
                <Zap className="w-12 h-12 text-lime relative z-10" />
              </div>
              <h3 className="text-xl font-bold font-mono mb-2 group-hover:text-lime transition-colors">
                Fix Tool
              </h3>
              <p className="text-muted text-sm mb-4">
                Rapidly cycle random pixels across your screen to refresh degraded OLED pixels and reduce visible burn-in.
              </p>
              <span className="text-lime text-sm font-mono flex items-center justify-center gap-1">
                Launch <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Link to="/scan" className="glass-card glass-card-hover rounded-2xl p-8 text-center block group">
              <div className="bg-void rounded-xl p-6 mb-5 relative overflow-hidden inline-block">
                <div className="scan-lines absolute inset-0 opacity-30" />
                <Smartphone className="w-12 h-12 text-lime relative z-10" />
              </div>
              <h3 className="text-xl font-bold font-mono mb-2 group-hover:text-lime transition-colors">
                Scan Tool
              </h3>
              <p className="text-muted text-sm mb-4">
                Display solid colors across your screen to identify where burn-in has occurred. Tap to hide the UI for a clean inspection.
              </p>
              <span className="text-lime text-sm font-mono flex items-center justify-center gap-1">
                Launch <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={200}>
          <div className="text-center">
            <p className="text-muted text-sm">
              Both tools are free, require no sign-up, and work on any device with a browser.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="py-20 px-4 bg-surface">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lime font-mono text-sm uppercase tracking-widest mb-2">
              &gt; Take full control
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono mb-4">
              The Full Android App
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              Our free web tools help you fix burn-in and scan for damage in your browser. For complete screen care on your Android device, the OLED Burn Care app adds Scan, Prevention, and Screen Off modes — with deeper device integration and more control.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {appFeatures.map(({ icon: Icon, title, desc, highlights }, i) => (
            <ScrollReveal key={title} delay={i * 100}>
              <div className="glass-card glass-card-hover rounded-xl p-7 h-full flex flex-col">
                <div className="bg-lime/10 w-14 h-14 rounded-lg flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-lime" />
                </div>
                <h3 className="text-xl font-bold font-mono mb-3">{title}</h3>
                <p className="text-muted text-sm mb-5 flex-grow">{desc}</p>
                <ul className="space-y-2">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-center text-muted text-sm">
                      <CheckCircle className="w-4 h-4 text-lime mr-2 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="text-center mt-12">
            <PlayStoreButton />
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-lime font-mono text-sm uppercase tracking-widest mb-2">
              &gt; Resources
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono">
              Learn More About Burn-in
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <ScrollReveal delay={0}>
            <Link to="/learn" className="glass-card glass-card-hover rounded-xl p-6 block text-center group">
              <div className="w-12 h-12 bg-lime/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-lime/20 transition-colors">
                <AlertTriangle className="w-6 h-6 text-lime" />
              </div>
              <h3 className="text-white font-mono font-semibold mb-2">How It Happens</h3>
              <p className="text-muted text-sm mb-4">Understand the science behind OLED degradation.</p>
              <span className="text-lime text-sm font-mono flex items-center justify-center gap-1">
                Learn more <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Link to="/learn#prevention" className="glass-card glass-card-hover rounded-xl p-6 block text-center group">
              <div className="w-12 h-12 bg-lime/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-lime/20 transition-colors">
                <Shield className="w-6 h-6 text-lime" />
              </div>
              <h3 className="text-white font-mono font-semibold mb-2">Prevention Tips</h3>
              <p className="text-muted text-sm mb-4">Actionable steps to protect your screen from burn-in.</p>
              <span className="text-lime text-sm font-mono flex items-center justify-center gap-1">
                Learn more <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Link to="/faq" className="glass-card glass-card-hover rounded-xl p-6 block text-center group">
              <div className="w-12 h-12 bg-lime/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-lime/20 transition-colors">
                <Smartphone className="w-6 h-6 text-lime" />
              </div>
              <h3 className="text-white font-mono font-semibold mb-2">FAQ</h3>
              <p className="text-muted text-sm mb-4">Common questions about burn-in and how to deal with it.</p>
              <span className="text-lime text-sm font-mono flex items-center justify-center gap-1">
                Read FAQ <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </main>
);

export default Home;
