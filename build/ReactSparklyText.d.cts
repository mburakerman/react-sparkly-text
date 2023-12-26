import * as react_jsx_runtime from 'react/jsx-runtime';

type TextElement = React.ReactElement<{
    children: React.ReactNode;
}>;
type Props = {
    children: string | TextElement | Array<string | TextElement>;
    size?: number;
};
declare const ReactSparklyText: ({ children, size }: Props) => react_jsx_runtime.JSX.Element;

export { ReactSparklyText };
