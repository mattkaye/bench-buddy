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

enum Modality {
  powerlifting = "powerlifting",
  strength = "strength",
  stretching = "stretching",
  cardio = "cardio",
  "olympic weightlifting" = "olympic weightlifting",
  strongman = "strongman",
  plyometrics = "plyometrics",
}

type MuscleGroup =
  | "abdominals"
  | "abductors"
  | "adductors"
  | "biceps"
  | "calves"
  | "chest"
  | "forearms"
  | "glutes"
  | "hamstrings"
  | "lats"
  | "lower back"
  | "middle back"
  | "neck"
  | "quadriceps"
  | "shoulders"
  | "traps"
  | "triceps"
  | "null";

type Equipment =
  | "medicine ball"
  | "dumbbell"
  | "body only"
  | "bands"
  | "kettlebells"
  | "foam roll"
  | "cable"
  | "machine"
  | "barbell"
  | "exercise ball"
  | "e-z curl bar"
  | "other"
  | null;

type Level = "beginner" | "intermediate" | "expert";
type Mechanic = "compound" | "isolation" | "null";
