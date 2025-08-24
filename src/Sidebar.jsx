import React from 'react';
import { Link } from 'react-router-dom';

const steps = [
  "1 - Print something",
  "2 - Using lists and tuples",
  "3 - New Functions",
  "4 - Doing Python with Class"
];

export default function Sidebar({ currentStep }) {
  return (
    <div>
      <div className="text-2xl font-semibold mb-6">
        <span>🏠</span>
        <span>Python 100</span>
      </div>
      <nav className="space-y-2">
        <ul>
          {steps.map((step, idx) => (
            <li key={idx}>
              <Link
                to={`/step/${idx + 1}`}
                className={`block p-2 text-black rounded cursor-pointer ${
                  currentStep === idx + 1
                    ? 'bg-yellow-200'
                    : 'hover:bg-yellow-100'
                }`}
              >
                {step}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
