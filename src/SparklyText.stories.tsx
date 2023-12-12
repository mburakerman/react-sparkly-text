import type { Meta, StoryObj } from "@storybook/react";

import { SparklyText } from "./SparklyText";
import styled from "styled-components";

const meta = {
  title: "Example/SparklyText",
  component: SparklyText,
} satisfies Meta<typeof SparklyText>;

export default meta;
type Story = StoryObj<typeof meta>;

const StyledText = styled.span`
  color: red;
`;

export const Default: Story = {
  args: {
    children: <StyledText>Lorem</StyledText>,
  },
};

export const WithSize: Story = {
  args: {
    children: <StyledText>İpsum</StyledText>,
    size: 60,
  },
};
