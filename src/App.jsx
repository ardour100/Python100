import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import PythonRunner from './PythonRunner.jsx';
import Sidebar from './Sidebar';
import './App.css'

function StepPage() {
  const { stepId } = useParams();
  const currentStep = parseInt(stepId) || 1;

  return (
    <div className="flex min-h-screen">
      <div className="basis-1/5">
        <Sidebar currentStep={currentStep} />
      </div>
  
      <div className="basis-4/5 px-6 py-4">
        <p className="mb-4">This is the content for step {currentStep}</p>
        <PythonRunner />
      </div>
    </div>
  );
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/step/1" />} />
        <Route path="/step/:stepId" element={<StepPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
