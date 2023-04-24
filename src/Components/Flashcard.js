import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Flashcard() {
  const facts = [
    "Start with the basics: learn about data types, variables, and control structures.",
    "Practice writing simple programs to build your understanding of the language.",
    "Use online resources like tutorials and forums to supplement your learning.",
    "Get comfortable with the command line and compiling your code.",
    "Debugging is a crucial skill to develop. Learn how to use debugging tools like gdb.",
    "Get familiar with Object-Oriented Programming concepts and how they are implemented in C++.",
    "Learn how to use C++ libraries like STL and Boost to make your code more efficient.",
    "Read other people's code to learn new techniques and best practices.",
    "Experiment with different IDEs and text editors to find one that works for you.",
    "Don't be afraid to ask for help or seek out a mentor. Learning from others can be extremely valuable.",
  ];

  const [factIndex, setFactIndex] = useState(0);

  const previousFact = () => {
    if (factIndex === 0) {
      setFactIndex(facts.length - 1);
    } else {
      setFactIndex(factIndex - 1);
    }
  };

  const nextFact = () => {
    if (factIndex === facts.length - 1) {
      setFactIndex(0);
    } else {
      setFactIndex(factIndex + 1);
    }
  };

  const randomFact = () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setFactIndex(randomIndex);
  };

  return (
    <div className="container-fluid bg-light h-100">
      <div className="row h-100 align-items-center justify-content-center">
        <div className="col-md-4">
          <div className="card border-0 shadow rounded-lg">
            <div className="card-body p-4">
              <h2 className="card-title text-center mb-4">
                {facts[factIndex]}
              </h2>
              <div className="d-flex justify-content-between">
                <button className="btn btn-primary" onClick={previousFact}>
                  Previous
                </button>
                <button className="btn btn-primary" onClick={randomFact}>
                  Random
                </button>
                <button className="btn btn-primary" onClick={nextFact}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
