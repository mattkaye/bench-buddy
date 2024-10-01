import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaArrowLeft } from "react-icons/fa6";
import styles from "./styles.module.css";
function Exercise() {
    const { state } = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    if (state === null) {
        navigate("/");
        return;
    }
    else {
        return (_jsxs("section", { className: styles.componentWrapper, children: [_jsxs(Link, { to: '/', children: [_jsx(IconContext.Provider, { value: { className: styles.svgIcon }, children: _jsx(FaArrowLeft, {}) }), "Back To Exercises"] }), _jsxs("div", { children: [_jsx("div", { className: styles.imageWrapper, children: state.images.map((image, index) => (_jsx("img", { src: `/images/exercises/${image}`, alt: `${state.name} ${index === 0 ? "starting" : "ending"} position`, loading: 'lazy' }, index))) }), _jsxs("article", { children: [_jsx("h1", { children: state.name }), _jsxs("ul", { children: [_jsxs("li", { children: ["Effort Level: ", _jsx("span", { children: state.level })] }), _jsxs("li", { children: ["Primary Muscles: ", _jsx("span", { children: state.primaryMuscles.join(", ") })] }), state.secondaryMuscles.length ? (_jsxs("li", { children: ["Secondary Muscles:", " ", _jsx("span", { children: state.secondaryMuscles.join(", ") })] })) : null, _jsxs("li", { children: ["Modality: ", _jsx("span", { children: state.mechanic })] }), _jsxs("li", { children: ["Equipment: ", _jsx("span", { children: state.equipment })] }), _jsxs("li", { children: ["Category: ", _jsx("span", { children: state.category })] })] }), _jsxs("div", { className: styles.instructions, children: [_jsx("h2", { children: "Instructions" }), state.instructions.map((line, index) => (_jsx("p", { children: line }, index)))] })] })] })] }));
    }
}
export default Exercise;
