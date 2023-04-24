import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Flashcard from "./Flashcard";

describe("Flashcard", () => {
  test("displays first fact on load", () => {
    render(<Flashcard />);
    expect(
      screen.getByText(
        "Start with the basics: learn about data types, variables, and control structures."
      )
    ).toBeInTheDocument();
  });

  test("displays next fact on Next button click", () => {
    render(<Flashcard />);
    fireEvent.click(screen.getByText("Next"));
    expect(
      screen.getByText(
        "Practice writing simple programs to build your understanding of the language."
      )
    ).toBeInTheDocument();
  });

  test("displays previous fact on Previous button click", () => {
    render(<Flashcard />);
    fireEvent.click(screen.getByText("Previous"));
    expect(
      screen.getByText(
        "Don't be afraid to ask for help or seek out a mentor. Learning from others can be extremely valuable."
      )
    ).toBeInTheDocument();
  });

  test("displays random fact on Random button click", () => {
    render(<Flashcard />);
    fireEvent.click(screen.getByText("Random"));
    expect(
      screen.getByText(
        "Start with the basics: learn about data types, variables, and control structures.",
        "Practice writing simple programs to build your understanding of the language.",
        "Use online resources like tutorials and forums to supplement your learning.",
        "Get comfortable with the command line and compiling your code.",
        "Debugging is a crucial skill to develop. Learn how to use debugging tools like gdb.",
        "Get familiar with Object-Oriented Programming concepts and how they are implemented in C++.",
        "Learn how to use C++ libraries like STL and Boost to make your code more efficient.",
        "Read other people's code to learn new techniques and best practices.",
        "Experiment with different IDEs and text editors to find one that works for you.",
        "Don't be afraid to ask for help or seek out a mentor. Learning from others can be extremely valuable."
      )
    ).toBeInTheDocument();
  });
});
