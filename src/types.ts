export type Exercise = {
  id: string;
  name: string;
  force: string | null;
  level: string;
  mechanic: string | null;
  equipment: string | null;
  primaryMuscles: string[];
  secondaryMuscles: string[];
  category: string;
  instructions: string[];
  images: string[];
};

export type ExerciseFilter = {
  jsonKey: string;
  label: string;
  options: { label: string; value: string }[];
};
