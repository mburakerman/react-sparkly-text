import { describe, it, expect } from "vitest";
import { ReactSparklyText } from "./ReactSparklyText";
import { render, screen } from "@testing-library/react";

describe("ReactSparklyText", () => {
  it("renders properly", () => {
    render(<ReactSparklyText>test</ReactSparklyText>);
    const element = screen.getByTestId((id) =>
      id.startsWith("react-sparkly-text")
    );
    expect(element).toBeInTheDocument();
  });
});
