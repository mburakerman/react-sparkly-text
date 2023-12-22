type TextElement = React.ReactElement<{
    children: React.ReactNode;
}>;
type Props = {
    children: string | TextElement | Array<string | TextElement>;
    size?: number;
};
export const ReactSparklyText: ({ children, size }: Props) => import("react/jsx-runtime").JSX.Element;

//# sourceMappingURL=index.d.ts.map
