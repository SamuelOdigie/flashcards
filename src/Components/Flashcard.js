import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Flashcard() {
  const facts =  [
    "Always use try-catch blocks to handle exceptions and errors in your code.",
    "Use LINQ to simplify querying and manipulating data.",
    "Use string interpolation instead of string concatenation for cleaner and more readable code.",
    "Use the var keyword for implicit typing to reduce code clutter.",
    "Take advantage of lambda expressions for concise and efficient code.",
    "Use delegates to enable event handling and callback functions.",
    "Avoid using public fields and instead use properties for encapsulation.",
    "Use the IDisposable interface and the using statement to ensure resources are properly disposed of.",
    "Avoid using global variables and instead use local variables or parameters.",
    "Use the async and await keywords to write asynchronous code more easily.",
    "Utilize interfaces for flexibility and modularity in your code.",
    "Use extension methods to extend the functionality of existing classes without modifying them.",
    "Use the sealed keyword to prevent inheritance and increase security in your code.",
    "Use the static keyword to create shared methods and variables across all instances of a class.",
    "Use the nameof() operator to avoid hardcoding string literals and improve maintainability.",
    "Utilize the null-coalescing operator (??) to handle null values more efficiently.",
    "Use the ternary operator (?:) for concise and readable conditional statements.",
    "Use the is and as keywords for type checking and casting.",
    "Use the ref and out keywords for passing arguments by reference.",
    "Use JSDoc comments to document your code and improve its readability."
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
