import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Fix from './pages/Fix';
import Learn from './pages/Learn';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';
import Scan from './pages/Scan';

const BASE_URL = 'https://www.oledburncare.com';

const pageMeta = {
  '/': {
    title: 'OLED Burn-in: Fix, Prevent & Understand | OLED Burn Care',
    description: 'Free online pixel refresh tool to fix OLED burn-in, plus a burn-in scanner and comprehensive guides. Learn what causes screen burn and how to prevent it on any OLED display.',
    jsonLd: [{
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'OLED Burn Care — Free Burn-in Fix & Scan Tool',
      'description': 'Free online pixel refresh tool to fix OLED burn-in, plus a burn-in scanner and comprehensive guides.',
      'url': BASE_URL,
      'isPartOf': { '@type': 'WebSite', 'name': 'OLED Burn Care', 'url': BASE_URL },
      'breadcrumb': {
        '@type': 'BreadcrumbList',
        'itemListElement': [{ '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': BASE_URL }]
      }
    }],
  },
  '/fix': {
    title: 'Free OLED Burn-in Pixel Refresh Tool | Fix Screen Burn Online',
    description: 'Free online pixel refresh tool to reduce OLED burn-in. Rapidly cycles random pixels to refresh degraded OLED pixels. Fullscreen, timer, break reminders. No download required.',
    jsonLd: [{
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Free OLED Burn-in Fix Tool',
      'description': 'Free online pixel refresh tool to reduce OLED burn-in by rapidly cycling random pixels.',
      'url': `${BASE_URL}/fix`,
      'isPartOf': { '@type': 'WebSite', 'name': 'OLED Burn Care', 'url': BASE_URL },
      'breadcrumb': {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': BASE_URL },
          { '@type': 'ListItem', 'position': 2, 'name': 'Fix Tool', 'item': `${BASE_URL}/fix` }
        ]
      }
    }],
  },
  '/scan': {
    title: 'Free OLED Burn-in Scanner | Detect Screen Damage Online',
    description: 'Free online burn-in scanner. Display solid colors on your screen to detect ghost images, uneven patches, and burn-in damage on any OLED or AMOLED display. No download required.',
    jsonLd: [{
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Free OLED Burn-in Scanner',
      'description': 'Free online burn-in scanner to detect OLED screen damage by displaying solid test colors.',
      'url': `${BASE_URL}/scan`,
      'isPartOf': { '@type': 'WebSite', 'name': 'OLED Burn Care', 'url': BASE_URL },
      'breadcrumb': {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': BASE_URL },
          { '@type': 'ListItem', 'position': 2, 'name': 'Scan Tool', 'item': `${BASE_URL}/scan` }
        ]
      }
    }],
  },
  '/learn': {
    title: 'What Is OLED Burn-in? Causes, Prevention & Fixes',
    description: 'Learn what causes OLED burn-in, how it differs from image retention, prevention tips, and when to seek professional repair. Comprehensive guide for OLED and AMOLED displays.',
    jsonLd: [{
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'What Is OLED Burn-in? Causes, Prevention & Fixes',
      'description': 'Learn what causes OLED burn-in, how it differs from image retention, and how to prevent it.',
      'url': `${BASE_URL}/learn`,
      'isPartOf': { '@type': 'WebSite', 'name': 'OLED Burn Care', 'url': BASE_URL },
      'breadcrumb': {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': BASE_URL },
          { '@type': 'ListItem', 'position': 2, 'name': 'Learn', 'item': `${BASE_URL}/learn` }
        ]
      }
    }, {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Prevent OLED Burn-in',
      'description': 'Step-by-step guide to preventing OLED burn-in on your phone, TV, or monitor.',
      'totalTime': 'PT5M',
      'step': [
        { '@type': 'HowToStep', 'name': 'Reduce brightness', 'text': 'Keep your screen brightness below 50-60% to reduce pixel wear.' },
        { '@type': 'HowToStep', 'name': 'Use dark mode', 'text': 'OLED pixels are off when displaying black. Dark themes reduce pixel usage.' },
        { '@type': 'HowToStep', 'name': 'Shorten screen timeout', 'text': 'Set screen timeout to 30 seconds or less to give pixels rest.' },
        { '@type': 'HowToStep', 'name': 'Enable auto-brightness', 'text': 'Auto-brightness prevents unnecessary high brightness in dark environments.' },
        { '@type': 'HowToStep', 'name': 'Rotate wallpapers', 'text': 'Avoid static wallpapers with bright, fixed elements that concentrate pixel wear.' },
        { '@type': 'HowToStep', 'name': 'Use gesture navigation', 'text': 'Replace on-screen navigation buttons with gestures to prevent nav bar burn-in.' }
      ]
    }],
  },
  '/faq': {
    title: 'OLED Burn-in FAQ: Common Questions & Answers',
    description: 'Frequently asked questions about OLED burn-in. Learn whether burn-in is permanent, how to fix it, prevention tips, warranty coverage, and more.',
    jsonLd: [{
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Is burn-in the same as image retention?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'No. Image retention is temporary — a faint ghost image that fades within minutes to hours. Burn-in is permanent uneven pixel wear that persists regardless of what is displayed. Both can be improved with pixel refresh, but burn-in takes longer to address and may not fully resolve.' }
        },
        {
          '@type': 'Question',
          'name': 'Can OLED burn-in actually be fixed?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Mild burn-in and image retention can often be reduced with pixel refresh techniques like our free Fix Tool, which rapidly cycles random pixels to stimulate equal wear. Deep, long-standing burn-in may be permanent, but pixel refresh can still make it less noticeable.' }
        },
        {
          '@type': 'Question',
          'name': 'How does the pixel refresh Fix Tool work?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'The Fix Tool displays rapidly cycling random pixel colors across your entire screen. This stimulates all OLED pixels equally, helping to normalize the uneven degradation that causes visible burn-in.' }
        },
        {
          '@type': 'Question',
          'name': 'Does dark mode really help prevent burn-in?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, significantly. In OLED technology, black pixels are completely off — they emit no light and experience no degradation. Dark mode means fewer pixels are active, which directly reduces uneven wear.' }
        },
        {
          '@type': 'Question',
          'name': 'Should I be worried about burn-in on a new phone?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Modern OLED panels have improved significantly in burn-in resistance. Most users will never notice burn-in during a typical 2-3 year device lifespan if they follow basic prevention tips.' }
        },
        {
          '@type': 'Question',
          'name': 'Is OLED burn-in covered under warranty?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'It varies by manufacturer and region. Some consider burn-in normal wear. Others have been known to replace screens with severe burn-in within the warranty period. Check your specific warranty terms.' }
        },
        {
          '@type': 'Question',
          'name': 'What is the difference between the web Fix Tool and the Android app?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'The web Fix Tool offers a pixel refresh mode and a burn-in scanner that work in your browser. The Android app adds Scan Mode to detect burn-in, Prevention Mode for custom overlays, and Screen Off Mode with anti-drift protection.' }
        },
        {
          '@type': 'Question',
          'name': 'Will running the Fix Tool damage my screen?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'The Fix Tool exercises pixels at high intensity, similar to built-in pixel refresh features. It will not damage your screen, but we recommend taking breaks every 30 minutes.' }
        },
        {
          '@type': 'Question',
          'name': 'What is the best brightness level for preventing burn-in?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Keep brightness between 30-60% for daily use. Below 30% can stress pixels, while above 70% accelerates aging. Auto-brightness is ideal.' }
        },
        {
          '@type': 'Question',
          'name': 'Can burn-in happen on TVs and monitors too?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Any OLED display can experience burn-in — phones, tablets, TVs, and monitors. The same prevention principles apply.' }
        },
        {
          '@type': 'Question',
          'name': 'How do I know if I have burn-in or just image retention?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Display a solid white or gray screen and look for faint ghost images. If the ghost disappears within minutes to hours, it is image retention. If it persists for days, it is burn-in. Our Scan Tool can help you check.' }
        }
      ]
    }, {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': BASE_URL },
        { '@type': 'ListItem', 'position': 2, 'name': 'FAQ', 'item': `${BASE_URL}/faq` }
      ]
    }],
  },
  '/contact': {
    title: 'Contact Us — OLED Burn Care',
    description: 'Get in touch with the OLED Burn Care team. Report issues, ask questions, or send feedback about our burn-in fix tools and guides.',
    jsonLd: [{
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'name': 'Contact OLED Burn Care',
      'url': `${BASE_URL}/contact`,
      'isPartOf': { '@type': 'WebSite', 'name': 'OLED Burn Care', 'url': BASE_URL },
      'breadcrumb': {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': BASE_URL },
          { '@type': 'ListItem', 'position': 2, 'name': 'Contact', 'item': `${BASE_URL}/contact` }
        ]
      }
    }],
  },
  '/privacy-policy': {
    title: 'Privacy Policy — OLED Burn Care',
    description: 'Read the privacy policy for OLED Burn Care. Learn how we handle your data, advertising partners, and your privacy rights.',
    jsonLd: [{
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Privacy Policy — OLED Burn Care',
      'url': `${BASE_URL}/privacy-policy`,
      'isPartOf': { '@type': 'WebSite', 'name': 'OLED Burn Care', 'url': BASE_URL },
    }],
  },
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const DocumentMeta = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = pageMeta[pathname] || pageMeta['/'];
    document.title = meta.title;

    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement('meta');
      desc.name = 'description';
      document.head.appendChild(desc);
    }
    desc.content = meta.description;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${BASE_URL}${pathname}`;

    let prevLdScripts = document.querySelectorAll('script[data-dynamic-ld]');
    prevLdScripts.forEach(s => s.remove());

    if (meta.jsonLd) {
      meta.jsonLd.forEach((ld) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-dynamic-ld', 'true');
        script.textContent = JSON.stringify(ld);
        document.head.appendChild(script);
      });
    }
  }, [pathname]);

  return null;
};

const App = () => (
  <Router>
    <ScrollToTop />
    <DocumentMeta />
    <div className="min-h-screen bg-void">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fix" element={<Fix />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;