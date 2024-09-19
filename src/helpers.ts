export const filterExerciseResults = (data, dimension, filterKeysFromState) => {
  return data.reduce((acc, curr) => {
    if (dataContainsKey(curr[dimension], filterKeysFromState)) {
      acc.push(curr);
    }
    return acc;
  }, []);
};

const dataContainsKey = (data, dimensionValues) => {
  // The JSON data is inconsistent. Sometimes it's an array and sometimes it's a string.
  if (Array.isArray(data)) {
    return data.some((item) => dimensionValues.includes(item));
  } else {
    return dimensionValues.includes(data);
  }
};
