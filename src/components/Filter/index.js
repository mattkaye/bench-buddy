import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
const Filter = ({ data, setChosenFilters, }) => {
    const [ExerciseFilter, setExerciseFilter] = useState([]);
    const handleFilterChange = (value) => {
        setExerciseFilter(value);
        setChosenFilters((prev) => {
            return {
                ...prev,
                [data.jsonKey]: value,
            };
        });
    };
    const customValueRenderer = (selected, _options) => {
        return selected.length ? `${selected.length} selected` : data.label;
    };
    return (_jsx(MultiSelect, { valueRenderer: customValueRenderer, options: data.options, value: ExerciseFilter, onChange: handleFilterChange, labelledBy: `Select ${data.label}` }, data.jsonKey));
};
export default Filter;
