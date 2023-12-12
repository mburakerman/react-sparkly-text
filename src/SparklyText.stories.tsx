import type { Meta, StoryObj } from "@storybook/react";

import { SparklyText } from "./SparklyText";
import styled from "styled-components";

const meta = {
  title: "Components/SparklyText",
  component: SparklyText,
} satisfies Meta<typeof SparklyText>;

export default meta;

type Story = StoryObj<typeof SparklyText>;

const StyledText = styled.span`
  color: purple;
`;

const TextWithSparklyText = () => {
  return (
    <p>
      Lorem ipsum dolor sit amet, consectetur{" "}
      <SparklyText>adipisicing</SparklyText> elit.
    </p>
  );
};

export const Default: Story = {
  args: {
    children: <StyledText>Lorem</StyledText>,
  },
};

export const WithText: Story = {
  render: () => <TextWithSparklyText />,
};

export const WithSizeProp: Story = {
  args: {
    children: <StyledText>İpsum</StyledText>,
    size: 15,
  },
};
