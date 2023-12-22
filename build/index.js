import "./index.css";
import {jsx as $3Qau6$jsx, jsxs as $3Qau6$jsxs} from "react/jsx-runtime";
import {useState as $3Qau6$useState, useEffect as $3Qau6$useEffect} from "react";




const $141021c3fc77ba72$var$DEFAULT_SIZE = 30;
const $141021c3fc77ba72$var$SparkleSVG = ({ size: size, timeout: timeout = 1000 })=>{
    const [showSparkle, setShowSparkle] = (0, $3Qau6$useState)(false);
    const [color, setColor] = (0, $3Qau6$useState)("#8BE9FD");
    (0, $3Qau6$useEffect)(()=>{
        const interval = setInterval(()=>{
            setShowSparkle(!showSparkle);
            setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
        }, timeout);
        return ()=>clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (!showSparkle) return null;
    return /*#__PURE__*/ (0, $3Qau6$jsx)("svg", {
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
        children: /*#__PURE__*/ (0, $3Qau6$jsx)("path", {
            d: "m611.04 866.16c17.418-61.09 50.25-116.68 95.352-161.42 45.098-44.742 100.94-77.133 162.17-94.062l38.641-10.68-38.641-10.68c-61.227-16.93-117.07-49.32-162.17-94.062-45.102-44.738-77.934-100.33-95.352-161.42l-11.039-38.641-11.039 38.641c-17.418 61.09-50.25 116.68-95.352 161.42-45.098 44.742-100.94 77.133-162.17 94.062l-38.641 10.68 38.641 10.68c61.227 16.93 117.07 49.32 162.17 94.062 45.102 44.738 77.934 100.33 95.352 161.42l11.039 38.641z"
        })
    });
};
const $141021c3fc77ba72$export$d9234916226e0cf4 = ({ children: children, size: size = $141021c3fc77ba72$var$DEFAULT_SIZE })=>{
    const generateRandomTimeout = ()=>Math.floor(Math.random() * 1000 + 2200);
    return /*#__PURE__*/ (0, $3Qau6$jsxs)("span", {
        className: "react-sparkly-text__container-x",
        "data-testid": `react-sparkly-text`,
        children: [
            children,
            /*#__PURE__*/ (0, $3Qau6$jsx)($141021c3fc77ba72$var$SparkleSVG, {
                size: size
            }),
            /*#__PURE__*/ (0, $3Qau6$jsx)($141021c3fc77ba72$var$SparkleSVG, {
                size: size,
                timeout: generateRandomTimeout()
            }),
            /*#__PURE__*/ (0, $3Qau6$jsx)($141021c3fc77ba72$var$SparkleSVG, {
                size: size,
                timeout: generateRandomTimeout()
            }),
            /*#__PURE__*/ (0, $3Qau6$jsx)($141021c3fc77ba72$var$SparkleSVG, {
                size: size,
                timeout: generateRandomTimeout()
            })
        ]
    });
};


export {$141021c3fc77ba72$export$d9234916226e0cf4 as ReactSparklyText};
//# sourceMappingURL=index.js.map
