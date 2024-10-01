import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { RxOpenInNewWindow } from "react-icons/rx";
import { SiLevelsdotfyi } from "react-icons/si";
import { GiWeight } from "react-icons/gi";
import styles from "./styles.module.css";
const ExerciseCard = ({ data }) => {
    const navigate = useNavigate();
    return (_jsxs("div", { className: styles.componentWrapper, children: [_jsx("div", { className: styles.imageWrapper, children: data.images.map((image, index) => (_jsx("img", { src: `/images/exercises/${image}`, alt: `${data.name} ${index === 0 ? "starting" : "ending"} position`, loading: 'lazy' }, index))) }), _jsxs("div", { className: styles.infoWrapper, children: [_jsx("h1", { children: data.name }), _jsx(IconContext.Provider, { value: { className: styles.svgIcon }, children: _jsxs("div", { children: [_jsxs("p", { children: [_jsx(SiLevelsdotfyi, {}), _jsx("span", { children: data.level })] }), _jsxs("p", { children: [_jsx(GiWeight, {}), _jsx("span", { children: data.primaryMuscles })] })] }) }), _jsx("div", { className: styles.buttonWrapper, children: _jsx(IconContext.Provider, { value: { className: styles.showMeIcon }, children: _jsxs("button", { onClick: () => navigate(`/exercise/${data.id}`, { state: data }), children: ["Show Me ", _jsx(RxOpenInNewWindow, {})] }) }) })] })] }));
};
export default ExerciseCard;
