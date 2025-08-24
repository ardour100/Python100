import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import PythonRunner from './PythonRunner.jsx';
import Sidebar from './Sidebar';
import './App.css'

function StepPage() {
  const { stepId } = useParams();
  const currentStep = parseInt(stepId) || 1;

  return (
    <>
      <div className="basis-1/5 border-r px-4 py-6">
          <Sidebar currentStep={currentStep} />
      </div>
      <div className="basis-4/5 px-6 py-4">

          <h4>This is the content for step {currentStep}</h4>

          A list is a versatile and mutable collection that can store an ordered series of elements, allowing modifications such as adding, removing, or changing items after its creation. In contrast, a tuple is an immutable sequence, meaning once defined, its contents cannot be altered. Both lists and tuples maintain the order of elements and can hold a mix of different data types, making them essential tools for organizing and managing data in Python programs.
          <PythonRunner />
      </div>
    </>

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
