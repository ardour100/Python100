import React, { useState } from 'react';
import PythonRunner from './PythonRunner.jsx';
import Sidebar from './Sidebar';
import './App.css'

function App() {
  const [currentStep, setCurrentStep] = useState(2);

  return (
    <div className="flex">
      <Sidebar currentStep={currentStep} />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold">Chapter {currentStep}</h1>
        <PythonRunner />
      </main>
    </div>
  )
}

export default App
