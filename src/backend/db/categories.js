import { v4 as uuid } from "uuid";

export const categories = [
  {
    _id: uuid(),
    categoryName: "vlogs",
    description:
      "Vlog stands for a video blog or video log, and refers to a type of blog where most or all of the content is in a video format.",
  },
  {
    _id: uuid(),
    categoryName: "comedy",
    description:
      "Comedy is a genre in which the goal is to make audiences laugh. Comedy is also a type of dramatic work which employs amusing and satirical tones with a cheerful ending.",
  },
  {
    _id: uuid(),
    categoryName: "lo-fi",
    description:
      "The production or reproduction of audio characterized by an unpolished or rough sound quality.",
  },
  {
    _id: uuid(),
    categoryName: "philosophy",
    description:
      "The study of the basic ideas about knowledge, right and wrong, reasoning, and the value of things."
  },
];
