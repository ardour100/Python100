import React, { useState } from 'react';
import PythonRunner from './PythonRunner.jsx';
import Sidebar from './Sidebar';
import './App.css'

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="flex">
      <Sidebar currentStep={currentStep} onStepChange={setCurrentStep} />
      <main className="flex-1 p-6">
        <div>
            <p>This is the content for step {currentStep}.</p>
        </div>
        <PythonRunner />
      </main>
    </div>
  )
}

export default App
