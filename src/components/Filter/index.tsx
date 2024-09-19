import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { ExerciseFilter } from "../../types";

const Filter = ({
  data,
  setChosenFilters,
}: {
  setChosenFilters: any;
  data: ExerciseFilter;
}) => {
  const [ExerciseFilter, setExerciseFilter] = useState([]);

  const handleFilterChange = (value: { label: string; value: string }[]) => {
    setExerciseFilter(value);
    setChosenFilters((prev) => {
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
      value={ExerciseFilter}
      onChange={handleFilterChange}
      labelledBy={`Select ${data.label}`}
    />
  );
};

export default Filter;
