import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <main className="bg-void min-h-screen pt-28 pb-20 px-4">
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-6xl sm:text-8xl font-bold font-mono text-lime mb-4">404</h1>
      <h2 className="text-2xl sm:text-3xl font-bold font-mono text-white mb-6">
        Page Not Found
      </h2>
      <p className="text-muted text-lg mb-8 leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist. It may have been moved or the URL may be incorrect.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-lime text-void px-8 py-4 rounded-lg font-bold text-lg hover:bg-lime-hover transition-all hover:scale-105"
        >
          Back to Home
        </Link>
        <Link
          to="/fix"
          className="inline-flex items-center gap-2 bg-surface text-white px-8 py-4 rounded-lg font-bold text-lg border border-border hover:border-lime/50 transition-all"
        >
          Try Fix Tool
        </Link>
      </div>
    </div>
  </main>
);

export default NotFound;