import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IconContext } from "react-icons";
import { PiBarbellThin } from "react-icons/pi";
import styles from "./styles.module.css";
const NoSearchResults = () => {
    return (_jsxs("div", { className: styles.componentWrapper, children: [_jsx("h1", { children: "Use The Filters To Find Your Exercises And Build Your Bench!" }), _jsx(IconContext.Provider, { value: { className: styles.svgIcon }, children: _jsx(PiBarbellThin, {}) })] }));
};
export default NoSearchResults;
