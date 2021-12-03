import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  test("Render 'Number :0' ", () => {
    // Arrange
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    // Act...Nothing

    // Aserts
    const number = screen.getByText("0");
    expect(number).toBeInTheDocument();
  });
  test("Increment 'Number in 1' ", () => {
    // Arrange
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    // Act
    const buttonElement = screen.getByTestId("incrementButton");
    userEvent.click(buttonElement);

    // Aserts
    const numberIncrement = screen.getByText("1");
    expect(numberIncrement).toBeInTheDocument();
  });
  test("Reset 'Number to 0' ", () => {
    // Arrange
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    // Act
    const buttonElement = screen.getByTestId("resetButton");
    userEvent.click(buttonElement);

    // Aserts
    const numberIncrement = screen.getByText("0");
    expect(numberIncrement).toBeInTheDocument();
  });
  test("Decrement 'Number in -2' ", () => {
    // Arrange
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    // Act
    const buttonElement = screen.getByTestId("decrementButton");
    userEvent.click(buttonElement);
    userEvent.click(buttonElement);

    // Aserts
    const numberIncrement = screen.getByText("-2");
    expect(numberIncrement).toBeInTheDocument();
  });
});
