export type Exercise = {
  id: string;
  collection: string;
  data: {
    name: string;
    force: string;
    level: string;
    mechanic: string;
    equipment: string;
    primaryMuscles: string[];
    secondaryMuscles: string[];
    instructions: string[];
    category: string[];
    images: string[];
    id: string;
  };
};

export const EFFORT_LEVEL: Record<string, any> = {
  beginner: {
    color: "green",
    emoji: "😅",
  },

  intermediate: {
    color: "orange",
    emoji: "😓",
  },

  expert: {
    color: "red",
    emoji: "🥵",
  },
};

export const MUSCLE_GROUPS = [
  "abdominals",
  "abductors",
  "adductors",
  "biceps",
  "calves",
  "chest",
  "forearms",
  "glutes",
  "hamstrings",
  "lats",
  "lower back",
  "middle back",
  "neck",
  "quadriceps",
  "shoulders",
  "traps",
  "triceps",
];

export const TRAINING_MODALITIES = [
  "powerlifting",
  "strength",
  "stretching",
  "cardio",
  "olympic weightlifting",
  "strongman",
  "plyometrics",
];

export const EQUIPMENT = [
  "medicine ball",
  "dumbbell",
  "body only",
  "bands",
  "kettlebells",
  "foam roll",
  "cable",
  "machine",
  "barbell",
  "exercise ball",
  "e-z curl bar",
  "other",
];
