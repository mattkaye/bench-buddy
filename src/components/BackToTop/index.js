import { jsx as _jsx } from "react/jsx-runtime";
import { IconContext } from "react-icons";
import { FaCircleChevronUp } from "react-icons/fa6";
import styles from "./styles.module.css";
const backToTop = () => {
    return (_jsx(IconContext.Provider, { value: { className: styles.backToTopIcon }, children: _jsx("a", { href: '#', className: styles.backToTop, children: _jsx(FaCircleChevronUp, {}) }) }));
};
export default backToTop;
