import { defineCollection } from "astro:content";

const exerciseCollection = defineCollection({
  type: "data",
});

export const collections = {
  exercise: exerciseCollection,
};
