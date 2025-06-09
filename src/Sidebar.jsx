import React from 'react';

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

export default function Sidebar({ currentStep, onStepChange }) {
    return (
        <div className="w-64 min-h-screen border-r px-4 py-6 text-left">
            <div className="text-2xl font-semibold mb-6 flex items-center space-x-2">
                <span>🏠</span>
                <span>Python 100</span>
            </div>
            <nav className="space-y-2">
                <ul>
                    {steps.map((step) => (
                        <li
                            key={step}
                            onClick={() => onStepChange(step)}
                            className={`p-2 rounded cursor-pointer ${
                                currentStep === step
                                    ? 'bg-rose-300 text-white'
                                    : 'hover:bg-rose-200'
                            }`}
                        >
                            {step}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
