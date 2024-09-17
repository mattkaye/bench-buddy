import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { ExerciseFilter } from "../../types";

const Filter = ({
  data,
  setFilteredExercises,
}: {
  setFilteredExercises: any;
  data: ExerciseFilter;
}) => {
  const [exerciseDimension, setDimension] = useState([]);

  const handleDimensionChange = (value: { label: string; value: string }[]) => {
    setDimension(value);
    setFilteredExercises((prev) => {
      return {
        ...prev,
        [data.jsonKey]: value,
      };
    });
  };

  const customValueRenderer = (
    selected: { label: string; value: string }[],
    _options: { label: string; value: string }[]
  ) => {
    return selected.length ? `${selected.length} selected` : data.label;
  };

  return (
    <MultiSelect
      key={data.jsonKey}
      valueRenderer={customValueRenderer}
      options={data.options}
      value={exerciseDimension}
      onChange={handleDimensionChange}
      labelledBy={`Select ${data.label}`}
    />
  );
};

export default Filter;
