import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Smartphone, CheckCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields');
      return;
    }
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('https://formspree.io/f/xjkzkdpp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', message: '' });
        }, 5000);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="bg-void min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-lime font-mono text-sm uppercase tracking-widest mb-2">
            &gt; Get in touch
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold font-mono mb-6">
            Contact <span className="text-lime">Us</span>
          </h1>
          <p className="text-muted text-lg mb-12">
            Have questions or feedback? We&apos;d love to hear from you.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <ScrollReveal>
            <div className="glass-card rounded-xl p-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-lime/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-lime" />
                </div>
                <div>
                  <h3 className="text-white font-mono font-semibold mb-1">Email Us</h3>
                  <a href="mailto:alimakhloufj.apps@gmail.com" className="text-lime hover:text-lime-hover transition-colors text-sm">
                    alimakhloufj.apps@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-lime/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-5 h-5 text-lime" />
                </div>
                <div>
                  <h3 className="text-white font-mono font-semibold mb-1">Support</h3>
                  <p className="text-muted text-sm">We typically respond within 24 hours</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-white font-mono font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.oledcare.oledburncare&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lime hover:text-lime-hover transition-colors text-sm"
                  >
                    Download on Google Play &rarr;
                  </a>
                </li>
                <li>
                  <Link to="/fix" className="text-lime hover:text-lime-hover transition-colors text-sm">
                    Try the Fix Tool &rarr;
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="text-lime hover:text-lime-hover transition-colors text-sm">
                    Privacy Policy &rarr;
                  </Link>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={200}>
          <div className="glass-card rounded-xl p-8">
            <h2 className="text-2xl font-bold font-mono mb-6">Send Us a Message</h2>

            {submitted ? (
              <div className="bg-lime/10 border border-lime rounded-xl p-8 text-center">
                <CheckCircle className="w-12 h-12 text-lime mx-auto mb-4" />
                <h3 className="text-white font-mono font-semibold text-xl mb-2">Message Sent!</h3>
                <p className="text-muted">We&apos;ll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-400 text-sm">
                    {error}
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-white font-mono font-semibold text-sm mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-void border border-border rounded-lg px-4 py-3 text-white focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime/30 transition-all"
                    placeholder="Your name"
                    disabled={submitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-mono font-semibold text-sm mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-void border border-border rounded-lg px-4 py-3 text-white focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime/30 transition-all"
                    placeholder="your.email@example.com"
                    disabled={submitting}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white font-mono font-semibold text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-void border border-border rounded-lg px-4 py-3 text-white focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime/30 transition-all resize-none"
                    placeholder="How can we help you?"
                    disabled={submitting}
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-lime text-void px-6 py-4 rounded-lg font-bold text-lg hover:bg-lime-hover transition-all hover:shadow-[0_0_20px_rgba(205,255,0,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
};

export default Contact;