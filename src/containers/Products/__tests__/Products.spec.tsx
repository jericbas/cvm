import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";

import Products from "../Products";
import App, { createTestStore } from "test/TestApp";
import { addBalance } from "slices/vendingSlice";

describe("Products", () => {
  it("should render product", () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <Products />
      </Provider>
    );
    expect(screen.getByText("Caramel - $2.50")).toBeInTheDocument();
    expect(screen.getByText("Hazelnut - $3.10")).toBeInTheDocument();
    expect(screen.getByText("Organic Raw - $2.00")).toBeInTheDocument();
  });

  it("should render enable Organic Raw button if balance is 2.00", () => {
    const store = createTestStore();
    store.dispatch(addBalance(2));

    render(
      <Provider store={store}>
        <Products />
      </Provider>
    );
    expect(screen.getByLabelText("Select Caramel")).toBeDisabled();
    expect(screen.getByLabelText("Select Hazelnut")).toBeDisabled();
    expect(screen.getByLabelText("Select Organic Raw")).toHaveProperty(
      "disabled",
      false
    );
  });

  it("should render select Organic Raw button if balance is 2.00", async () => {
    const store = createTestStore();
    store.dispatch(addBalance(2));

    render(
      <Provider store={store}>
        <Products />
      </Provider>
    );
    await fireEvent.click(screen.getByLabelText("Select Organic Raw"));
    expect(store.getState().vendingMachine).toEqual({ balance: 0 });

    expect(screen.getByText(/Yey! You got/i)).toBeInTheDocument();

    await fireEvent.click(screen.getByTestId("CloseIcon"));

    expect(screen.queryByText(/Yey! You got/i)).toBe(null);
  });
});
