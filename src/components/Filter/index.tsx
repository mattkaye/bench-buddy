import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { ExerciseFilter } from "../../types";

const Filter = ({
  data,
  programExercises,
  setProgramExercises,
}: {
  data: ExerciseFilter;
  programExercises: { label: string; value: string }[];
  setProgramExercises: { label: string; value: string }[];
}) => {
  const [exerciseDimension, setDimension] = useState([]);

  const customValueRenderer = (
    selected: { label: string; value: string }[],
    _options: { label: string; value: string }[]
  ) => {
    return selected.length ? `${selected.length} selected` : data.type;
  };

  return (
    <MultiSelect
      key={data.type}
      valueRenderer={customValueRenderer}
      options={data.options}
      value={exerciseDimension}
      onChange={setDimension}
      labelledBy={`Select ${data.type}`}
    />
  );
};

export default Filter;
