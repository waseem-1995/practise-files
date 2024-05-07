import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import Button from "../Components/Button";
import Counter from "../Components/Counter";

describe("Check the basic structure", () => {
  it("Check if Button is present or not", () => {
    render(<Button />);
    screen.debug();
    const button = screen.getByText("Add");
    expect(button).toBeInTheDocument();
  });
  it("Check if Counter is present or not", () => {
    render(<App />);
    screen.debug();
    const counter = screen.getByText("Counter: 0");
    expect(counter).toBeInTheDocument();
  });
  it("Check if Counter is present or not", () => {
    render(<Counter />);
    screen.debug();
    const counter = screen.getByTestId("counter");
    expect(counter).toHaveTextContent("Counter: 0");
  });
  it("Check if Button is present in Counter or not", () => {
    render(<Counter />);
    screen.debug();
    const counter = screen.getByTestId("counter");
    expect(counter).toBeInTheDocument();
  });
  it("Check if Button is invoking a function or not", () => {
    const mockFn = jest.fn();
    render(<Button handleClick={mockFn} />);
    screen.debug();
    const button = screen.getByTestId("btn-comp");
    userEvent.click(button);
    userEvent.click(button);
    userEvent.click(button);
    expect(mockFn).toBeCalledTimes(3);
  });
  it("Check if the add is updating the values or not", () => {
    // const mockFn = jest.fn();
    render(<Counter />);
    screen.debug();
    const counter = screen.getByTestId("counter");
    const button = screen.getByTestId("btn-comp");
    expect(counter).toHaveTextContent("Counter: 0");
    userEvent.click(button);
    expect(counter).toHaveTextContent("Counter: 1");
  });
  it("Check if the reduce is updating the values or not", () => {
    // const mockFn = jest.fn();
    render(<Counter />);
    screen.debug();
    const counter = screen.getByTestId("counter");
    const button = screen.getByTestId("btn-reduce");
    userEvent.click(button);
    expect(counter).toHaveTextContent("Counter: -1");
    userEvent.click(button);
    expect(counter).toHaveTextContent("Counter: -2");
  });
});
