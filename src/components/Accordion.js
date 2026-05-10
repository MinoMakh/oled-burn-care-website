import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Accordion = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border rounded-lg overflow-hidden glass-card-hover">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-5 text-left hover:bg-lime/5 transition-colors"
        aria-expanded={open}
      >
        <h3 className="text-white font-mono font-semibold text-sm sm:text-base pr-4">
          {question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-lime flex-shrink-0 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-5 text-muted leading-relaxed text-sm sm:text-base">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Accordion;