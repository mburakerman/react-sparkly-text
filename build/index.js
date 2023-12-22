import "./index.css";
import {jsx as $kRjEV$jsx, jsxs as $kRjEV$jsxs} from "react/jsx-runtime";
import {useState as $kRjEV$useState, useEffect as $kRjEV$useEffect} from "react";




const $9536c68a3822a2dc$var$DEFAULT_SIZE = 30;
const $9536c68a3822a2dc$var$SparkleSVG = ({ size: size, timeout: timeout = 1000 })=>{
    const [showSparkle, setShowSparkle] = (0, $kRjEV$useState)(false);
    const [color, setColor] = (0, $kRjEV$useState)("#8BE9FD");
    (0, $kRjEV$useEffect)(()=>{
        const interval = setInterval(()=>{
            setShowSparkle(!showSparkle);
            setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
        }, timeout);
        return ()=>clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (!showSparkle) return null;
    return /*#__PURE__*/ (0, $kRjEV$jsx)("svg", {
        className: "react-sparkly-text__sparkle-svg-x",
        viewBox: "0 0 1200 1200",
        fill: color,
        width: `${size}px`,
        height: `${size}px`,
        style: {
            // generate random between -20 / 20
            top: `calc(${Math.floor(Math.random() * 41) - 20}px)`,
            // generate random between -20 / 120
            left: `calc(${Math.floor(Math.random() * 121) - 20}%)`
        },
        children: /*#__PURE__*/ (0, $kRjEV$jsx)("path", {
            d: "m611.04 866.16c17.418-61.09 50.25-116.68 95.352-161.42 45.098-44.742 100.94-77.133 162.17-94.062l38.641-10.68-38.641-10.68c-61.227-16.93-117.07-49.32-162.17-94.062-45.102-44.738-77.934-100.33-95.352-161.42l-11.039-38.641-11.039 38.641c-17.418 61.09-50.25 116.68-95.352 161.42-45.098 44.742-100.94 77.133-162.17 94.062l-38.641 10.68 38.641 10.68c61.227 16.93 117.07 49.32 162.17 94.062 45.102 44.738 77.934 100.33 95.352 161.42l11.039 38.641z"
        })
    });
};
const $9536c68a3822a2dc$export$beb01f343ad03708 = ({ children: children, size: size = $9536c68a3822a2dc$var$DEFAULT_SIZE })=>{
    const generateRandomTimeout = ()=>Math.floor(Math.random() * 1000 + 2200);
    return /*#__PURE__*/ (0, $kRjEV$jsxs)("span", {
        className: "react-sparkly-text__container-x",
        "data-testid": `sparkly-text-${children.toString()}`,
        children: [
            children,
            /*#__PURE__*/ (0, $kRjEV$jsx)($9536c68a3822a2dc$var$SparkleSVG, {
                size: size
            }),
            /*#__PURE__*/ (0, $kRjEV$jsx)($9536c68a3822a2dc$var$SparkleSVG, {
                size: size,
                timeout: generateRandomTimeout()
            }),
            /*#__PURE__*/ (0, $kRjEV$jsx)($9536c68a3822a2dc$var$SparkleSVG, {
                size: size,
                timeout: generateRandomTimeout()
            }),
            /*#__PURE__*/ (0, $kRjEV$jsx)($9536c68a3822a2dc$var$SparkleSVG, {
                size: size,
                timeout: generateRandomTimeout()
            })
        ]
    });
};


export {$9536c68a3822a2dc$export$beb01f343ad03708 as SparklyText};
//# sourceMappingURL=index.js.map
