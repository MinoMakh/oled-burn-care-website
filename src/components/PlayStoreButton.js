import React from 'react';

const PlayStoreButton = ({ className = '', size = 'default' }) => {
  const isSmall = size === 'small';

  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.oledcare.oledburncare&pcampaignid=web_share"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 bg-lime text-void font-bold rounded-lg transition-all hover:bg-lime-hover hover:shadow-[0_0_20px_rgba(205,255,0,0.4)] hover:scale-105 ${
        isSmall ? 'px-4 py-2.5 text-sm' : 'px-8 py-4 text-lg'
      } ${className}`}
    >
      <img
        src="/google-play-store-icon.svg"
        alt="Download OLED Burn Care on Google Play Store"
        className={isSmall ? 'w-5 h-5' : 'w-6 h-6'}
      />
      <span>Get Android App</span>
    </a>
  );
};

export default PlayStoreButton;