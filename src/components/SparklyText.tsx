import { useEffect, useState } from "react";
import "./sparkly-text.css";

const DEFAULT_SIZE = 30;

type TextElement = React.ReactElement<{ children: React.ReactNode }>;

type Props = {
  children: string | TextElement | Array<string | TextElement>;
  size?: number; // Size in pixels
};

type SparkleSVGProps = {
  timeout?: number; // in ms
} & Pick<Props, "size">;

const SparkleSVG = ({ size, timeout = 1000 }: SparkleSVGProps) => {
  const [showSparkle, setShowSparkle] = useState(false);
  const [color, setColor] = useState("#8BE9FD");

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSparkle(!showSparkle);
      setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    }, timeout);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!showSparkle) {
    return null;
  }
  return (
    <svg
      className="sparkly-text__sparkle-svg-x"
      viewBox="0 0 1200 1200"
      fill={color}
      width={`${size}px`}
      height={`${size}px`}
      style={{
        // generate random between -20 / 20
        top: `calc(${Math.floor(Math.random() * 41) - 20}px)`,
        // generate random between -20 / 120
        left: `calc(${Math.floor(Math.random() * 121) - 20}%)`,
      }}
    >
      <path d="m611.04 866.16c17.418-61.09 50.25-116.68 95.352-161.42 45.098-44.742 100.94-77.133 162.17-94.062l38.641-10.68-38.641-10.68c-61.227-16.93-117.07-49.32-162.17-94.062-45.102-44.738-77.934-100.33-95.352-161.42l-11.039-38.641-11.039 38.641c-17.418 61.09-50.25 116.68-95.352 161.42-45.098 44.742-100.94 77.133-162.17 94.062l-38.641 10.68 38.641 10.68c61.227 16.93 117.07 49.32 162.17 94.062 45.102 44.738 77.934 100.33 95.352 161.42l11.039 38.641z" />
    </svg>
  );
};

export const SparklyText = ({ children, size = DEFAULT_SIZE }: Props) => {
  return (
    <span
      className="sparkly-text__container-x"
      data-testid={`sparkly-text-${children.toString()}`}
    >
      {children}
      <SparkleSVG size={size} />
      <SparkleSVG size={size} timeout={2240} />
      <SparkleSVG size={size} timeout={2490} />
      <SparkleSVG size={size} timeout={2889} />
    </span>
  );
};