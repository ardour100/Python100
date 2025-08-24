import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import PythonRunner from './PythonRunner.jsx';
import Sidebar from './Sidebar';
import './App.css'

function StepPage() {
  const { stepId } = useParams();
  const currentStep = parseInt(stepId) || 1;
  const sectionDescriptions = [
    "Printing is the simplest way to display output in Python. Using the print() function, you can quickly show text, numbers, or variable values to the console, making it an essential tool for debugging and learning basic syntax.",
    "A list is a versatile and mutable collection that can store an ordered series of elements, allowing modifications such as adding, removing, or changing items. A tuple is similar but immutable, meaning its contents cannot be changed once created. Both maintain order and can hold mixed data types.",
    "Functions let you group reusable blocks of code under a single name. They help make your program more organized, easier to read, and efficient by avoiding repetition.",
    "Classes are the foundation of object-oriented programming in Python. They allow you to define reusable blueprints for objects, encapsulating both data (attributes) and behavior (methods).",
    "Python provides a vast ecosystem of libraries that extend its capabilities. Libraries let you reuse pre-written code for tasks like math, data analysis, web requests, or visualization—saving time and effort.",
    "Artificial intelligence in Python often relies on specialized libraries such as TensorFlow, PyTorch, or scikit-learn. These tools allow developers to train models, process data, and build intelligent applications like chatbots or recommendation systems.",
  ];

  return (
    <>
      <div className="basis-1/5 border-r px-4 py-6">
          <Sidebar currentStep={currentStep} />
      </div>
      <div className="basis-4/5 px-6 py-4">
        <h4>This is the content for section {currentStep}</h4>
        <p>{sectionDescriptions[currentStep - 1]}</p>
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
