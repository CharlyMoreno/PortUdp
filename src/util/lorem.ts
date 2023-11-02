import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 5,
    min: 2,
  },
  wordsPerSentence: {
    max: 5,
    min: 2,
  },
});

export const getRandomText = () => {
    return lorem.generateSentences(1)
}