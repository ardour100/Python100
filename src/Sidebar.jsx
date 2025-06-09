import React from 'react';
import { Link } from 'react-router-dom';  // ✅ 修复导入方式

const steps = [
  "1 - 基本语法",
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
    <div className="w-64 min-h-screen border-r px-4 py-6 text-left">
      <div className="text-2xl font-semibold mb-6 flex items-center space-x-2">
        <span>🏠</span>
        <span>Python 100</span>
      </div>
      <nav className="space-y-2">
        <ul>
          {steps.map((step, idx) => (
            <li key={idx}>
              <Link
                to={`/step/${idx + 1}`}
                className={`block p-2 rounded cursor-pointer ${
                  currentStep === idx + 1
                    ? 'bg-rose-300 text-white'
                    : 'text-black hover:bg-rose-200'
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
