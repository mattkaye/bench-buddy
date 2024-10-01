import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    return (_jsx("header", { className: styles.componentWrapper, children: _jsxs("div", { onClick: () => navigate("/"), children: [_jsx("img", { src: '/images/logo.png', alt: 'BenchBuddy Logo' }), _jsxs("h1", { children: ["Bench", _jsx("span", { children: "Buddy" })] })] }) }));
};
export default Header;
