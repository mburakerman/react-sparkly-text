import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ReactSparklyText } from "./ReactSparklyText";

describe("ReactSparklyText", () => {
  it("renders properly", () => {
    render(<ReactSparklyText>test</ReactSparklyText>);
    const element = screen.getByTestId((id) => id.startsWith("react-sparkly-text"));
    expect(element).toBeInTheDocument();
  });
});
