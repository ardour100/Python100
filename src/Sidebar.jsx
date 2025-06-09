import React from 'react';
import { Link } from 'react-router-dom';

const steps = [
  "1 - Meet Karel",
  "2 - Programming",
  "3 - New Functions",
  "4 - Decomposition",
  "5 - For Loops",
  "6 - While Loops",
  "7 - Conditionals",
  "8 - Refinement",
  "9 - Extra Features",
  "10 - Reference",
  "11 - Code"
];

export default function Sidebar({ currentStep }) {
  return (
    <div className="w-64 min-h-screen bg-white border-r px-4 py-6">
      <div className="text-2xl font-semibold mb-6 flex items-center space-x-2">
        <span className="text-blue-600">🏠</span>
        <span>Karel</span>
      </div>
      <nav className="space-y-2">
        {steps.map((label, idx) => (
          <Link
            key={idx}
            to={`/step/${idx + 1}`} // or use your own routing logic
            className={`block px-3 py-2 rounded hover:bg-blue-100 ${
              currentStep === idx + 1 ? 'bg-blue-100 text-blue-600 font-semibold' : 'text-gray-700'
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}