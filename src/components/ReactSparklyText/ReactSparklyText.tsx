import { useEffect, useState } from "react";
import styled from "styled-components";

import { useReducedMotion } from "../../hooks/useReducedMotion";

const DEFAULT_SIZE = 30;

type TextElement = React.ReactElement<{ children: React.ReactNode }>;

type Props = {
  children: string | TextElement | Array<string | TextElement>;
  size?: number; // size in pixels
};

type SparkleSVGProps = {
  timeout?: number; // in ms
} & Pick<Props, "size">;

const StyledContainer = styled.span`
  position: relative;
  width: max-content;
  font-weight: bolder;
`;

const StyledSparkleSVG = styled.svg<{ animationScale: number }>`
  position: absolute;
  opacity: 0;
  animation: sparkle-animation-x 0.5s ease-in-out infinite alternate;

  @keyframes sparkle-animation-x {
    0% {
      opacity: 0;
      transform: scale(0.25);
    }
    100% {
      opacity: 1;
      transform: rotateZ(50deg) scale(${({ animationScale: transformScale }) => transformScale});
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
    transform: rotateZ(30deg) scale(1);
  }
`;

const SparkleSVG = ({ size, timeout = 1000 }: SparkleSVGProps) => {
  const [showSparkle, setShowSparkle] = useState(false);
  const [color, setColor] = useState("#8BE9FD");
  const { isReducedMotionEnabled } = useReducedMotion();

  useEffect(() => {
    if (isReducedMotionEnabled) {
      return;
    }

    const interval = setInterval(() => {
      setShowSparkle(!showSparkle);
      setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    }, timeout);

    return () => clearInterval(interval);
  }, [isReducedMotionEnabled, showSparkle, timeout]);

  if (!showSparkle) {
    return null;
  }

  return (
    <StyledSparkleSVG
      viewBox="0 0 1200 1200"
      fill={color}
      width={`${size}px`}
      height={`${size}px`}
      animationScale={1 + Math.random() * 0.5}
      style={{
        // generate random between -20 / 20
        top: `calc(${Math.floor(Math.random() * 41) - 20}px)`,
        // generate random between -20 / 120
        left: `calc(${Math.floor(Math.random() * 121) - 20}%)`,
      }}
    >
      <path d="m611.04 866.16c17.418-61.09 50.25-116.68 95.352-161.42 45.098-44.742 100.94-77.133 162.17-94.062l38.641-10.68-38.641-10.68c-61.227-16.93-117.07-49.32-162.17-94.062-45.102-44.738-77.934-100.33-95.352-161.42l-11.039-38.641-11.039 38.641c-17.418 61.09-50.25 116.68-95.352 161.42-45.098 44.742-100.94 77.133-162.17 94.062l-38.641 10.68 38.641 10.68c61.227 16.93 117.07 49.32 162.17 94.062 45.102 44.738 77.934 100.33 95.352 161.42l11.039 38.641z" />
    </StyledSparkleSVG>
  );
};

export const ReactSparklyText = ({ children, size = DEFAULT_SIZE }: Props) => {
  const generateRandomTimeout = () => Math.floor(Math.random() * (3200 - 2200) + 2200);

  return (
    <StyledContainer data-testid={`react-sparkly-text-${Date.now()}`}>
      {children}
      <SparkleSVG size={size} />
      <SparkleSVG size={size} timeout={generateRandomTimeout()} />
      <SparkleSVG size={size} timeout={generateRandomTimeout()} />
      <SparkleSVG size={size} timeout={generateRandomTimeout()} />
    </StyledContainer>
  );
};
