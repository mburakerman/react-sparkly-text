import { describe, it, expect } from "vitest";
import { SparklyText } from "./SparklyText";
import { render, screen } from "@testing-library/react";

describe("SparklyText", () => {
  it("renders properly", () => {
    render(<SparklyText>test</SparklyText>);
    const element = screen.getByTestId((id) => id.startsWith("sparkly-text"));
    expect(element).toBeInTheDocument();
  });
});
