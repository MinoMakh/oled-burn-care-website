import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import Accordion from '../components/Accordion';

const faqs = [
  {
    question: 'Is burn-in the same as image retention?',
    answer: 'No. Image retention is temporary — a faint ghost image that fades within minutes to hours. It happens when pixels briefly "remember" a previous image. Burn-in is permanent uneven pixel wear that persists regardless of what\'s displayed. Both can be improved with pixel refresh, but burn-in takes longer to address and may not fully resolve.',
  },
  {
    question: 'Can OLED burn-in actually be fixed?',
    answer: 'It depends on severity. Mild burn-in and image retention can often be significantly reduced with pixel refresh techniques like our Fix Tool, which rapidly cycles random pixels to stimulate equal wear. Deep, long-standing burn-in may be permanent, but even then, pixel refresh can make it less noticeable. The earlier you address it, the better your chances.',
  },
  {
    question: 'How does the pixel refresh Fix Tool work?',
    answer: 'The Fix Tool displays rapidly cycling random pixel colors across your entire screen. This stimulates all OLED pixels equally, helping to normalize the uneven degradation that causes visible burn-in. Each pixel is driven at maximum intensity in random colors, which can help "wear down" the brighter areas to match the overall pixel usage of the display.',
  },
  {
    question: 'How long should I run the Fix Tool?',
    answer: 'For mild image retention, 15-30 minutes may be sufficient. For more visible burn-in, try 30-60 minute sessions over several days. Use fullscreen mode for best results, and take breaks every 30 minutes. The tool will remind you to take a break. Consistency matters more than a single marathon session.',
  },
  {
    question: 'Does dark mode really help prevent burn-in?',
    answer: 'Yes, significantly. In OLED technology, black pixels are completely off — they emit no light and experience no degradation. Dark mode means fewer pixels are active, which directly reduces uneven wear. Combined with lower brightness, dark mode is one of the most effective burn-in prevention strategies.',
  },
  {
    question: 'Should I be worried about burn-in on a new phone?',
    answer: 'Modern OLED panels have improved significantly in burn-in resistance. Most users will never notice burn-in during a typical 2-3 year device lifespan if they follow basic prevention tips. Enable auto-brightness, use dark mode, and avoid leaving static content displayed at max brightness for extended periods.',
  },
  {
    question: 'Is OLED burn-in covered under warranty?',
    answer: 'It varies by manufacturer and region. Some manufacturers consider burn-in normal wear and don\'t cover it. Others, like some Samsung and Google Pixel models, have been known to replace screens with severe burn-in within the warranty period. Check your specific warranty terms or contact the manufacturer.',
  },
  {
    question: 'What\'s the difference between the web tools and the Android app?',
    answer: 'The web tools offer a pixel refresh mode and a burn-in scanner that work in your browser — no download needed. The Android app adds Scan Mode to detect burn-in with multiple test colors, Prevention Mode for custom overlays that protect vulnerable areas, and Screen Off Mode with anti-drift protection. The app also runs in the background and integrates more deeply with your device.',
  },
  {
    question: 'Will running the Fix Tool damage my screen?',
    answer: 'The Fix Tool works by exercising pixels at high intensity, which is the same principle as built-in pixel refresh features. It won\'t damage your screen, but it does push pixels to maximum output. We recommend using it at moderate brightness levels and taking breaks every 30 minutes. Avoid running it for many hours continuously.',
  },
  {
    question: 'What\'s the best brightness level for preventing burn-in?',
    answer: 'Keep your brightness between 30-60% for daily use. Below 30% can actually reduce the lifespan of OLED pixels due to voltage stress at very low levels, while above 70% accelerates pixel aging exponentially. Auto-brightness is ideal because it adjusts to your environment dynamically.',
  },
  {
    question: 'Can burn-in happen on TVs and monitors too?',
    answer: 'Yes. Any OLED display can experience burn-in — phones, tablets, TVs, and monitors. TVs are particularly vulnerable if you watch the same channel with a persistent logo (like a news network). Monitors can burn in from static desktop elements like taskbars. The same prevention principles apply: reduce brightness, use dark themes, and vary content.',
  },
  {
    question: 'How do I know if I have burn-in or just image retention?',
    answer: 'Display a solid white or solid gray screen and look for faint ghost images. If the ghost disappears within a few minutes to a few hours, it\'s image retention. If it persists for days or is always visible, it\'s burn-in. Our Android app\'s Scan Mode can help you detect burn-in by displaying solid test colors across your full screen.',
  },
];

const Faq = () => (
  <main className="bg-void">
    <section className="pt-28 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="text-lime font-mono text-sm uppercase tracking-widest mb-2">
            &gt; Frequently asked questions
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold font-mono mb-6">
            OLED Burn-in <span className="text-lime">FAQ</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Common questions about OLED burn-in — what it is, whether it can be fixed, how to prevent it, and how our tools can help.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="pb-20 px-4" aria-label="Frequently Asked Questions about OLED burn-in">
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, i) => (
          <ScrollReveal key={i} delay={i * 50}>
            <article>
              <Accordion question={faq.question} answer={faq.answer} />
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>

    <section className="py-16 px-4 bg-surface">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-2xl font-bold font-mono mb-4">
            Still have questions about OLED burn-in?
          </h2>
          <p className="text-muted mb-6">
            Learn more about what causes burn-in and how to prevent it, or try our free tools.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/learn"
              className="inline-flex items-center gap-2 bg-surface text-white px-6 py-3 rounded-lg font-bold border border-border hover:border-lime/50 transition-all"
            >
              Learn About Burn-in
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-surface text-white px-6 py-3 rounded-lg font-bold border border-border hover:border-lime/50 transition-all"
            >
              Contact Us
            </Link>
            <Link
              to="/fix"
              className="inline-flex items-center gap-2 bg-lime text-void px-6 py-3 rounded-lg font-bold hover:bg-lime-hover transition-all hover:shadow-[0_0_20px_rgba(205,255,0,0.4)]"
            >
              Try Fix Tool
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default Faq;