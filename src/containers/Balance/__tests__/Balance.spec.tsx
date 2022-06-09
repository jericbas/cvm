import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Balance from "../Balance";
import App from "test/TestApp";

describe("Balance", () => {
  it("should renders Balance: 0.00", () => {
    render(
      <App>
        <Balance />
      </App>
    );
    const linkElement = screen.getByText(/Balance:/i);
    expect(linkElement).toBeInTheDocument();

    const valueElement = screen.getByText(/0\.00/i);
    expect(valueElement).toBeInTheDocument();
  });

  it("should have denomination list", () => {
    render(
      <App>
        <Balance />
      </App>
    );
    expect(screen.getByText(/0\.10¢/i)).toBeInTheDocument();
    expect(screen.getByText(/0\.20¢/i)).toBeInTheDocument();
    expect(screen.getByText(/0\.50¢/i)).toBeInTheDocument();
    expect(screen.getByText(/\$1\.00/i)).toBeInTheDocument();
    expect(screen.getByText(/\$2\.00/i)).toBeInTheDocument();
  });

  it("should update the Balance after clicking 0.10¢", async () => {
    render(
      <App>
        <Balance />
      </App>
    );

    await fireEvent.click(screen.getByRole("button", { name: "0.10¢" }));

    expect(screen.getByTestId("balance")).toHaveTextContent("0.10¢");
  });

  it("should update the Balance after clicking 0.20¢", async () => {
    render(
      <App>
        <Balance />
      </App>
    );

    await fireEvent.click(screen.getByRole("button", { name: "0.20¢" }));

    expect(screen.getByTestId("balance")).toHaveTextContent("0.20¢");
  });

  it("should update the Balance after clicking 0.50¢", async () => {
    render(
      <App>
        <Balance />
      </App>
    );

    await fireEvent.click(screen.getByRole("button", { name: "0.50¢" }));

    expect(screen.getByTestId("balance")).toHaveTextContent("0.50¢");
  });

  it("should update the Balance after clicking $1.00", async () => {
    render(
      <App>
        <Balance />
      </App>
    );

    await fireEvent.click(screen.getByRole("button", { name: "$1.00" }));

    expect(screen.getByTestId("balance")).toHaveTextContent("$1.00");
  });
  it("should update the Balance after clicking $2.00", async () => {
    render(
      <App>
        <Balance />
      </App>
    );

    await fireEvent.click(screen.getByRole("button", { name: "$2.00" }));

    expect(screen.getByTestId("balance")).toHaveTextContent("$2.00");
  });
});
