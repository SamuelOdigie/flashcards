import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Flashcard from "./Flashcard";

describe("Flashcard", () => {
  test("displays first fact on load", () => {
    render(<Flashcard />);
    expect(
      screen.getByText(
        "Always use try-catch blocks to handle exceptions and errors in your code."
      )
    ).toBeInTheDocument();
  });

  test("displays next fact on Next button click", () => {
    render(<Flashcard />);
    fireEvent.click(screen.getByText("Next"));
    expect(
      screen.getByText("Use LINQ to simplify querying and manipulating data.")
    ).toBeInTheDocument();
  });

  test("displays previous fact on Previous button click", () => {
    render(<Flashcard />);
    fireEvent.click(screen.getByText("Previous"));
    expect(
      screen.getByText(
        "Use JSDoc comments to document your code and improve its readability."
      )
    ).toBeInTheDocument();
  });

  test("displays random fact on Random button click", () => {
    render(<Flashcard />);
    fireEvent.click(screen.getByText("Random"));
    expect(
      screen.getByText(
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
      )
    ).toBeInTheDocument();
  });
});
