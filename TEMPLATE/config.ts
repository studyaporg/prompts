import type { Config } from "../llm/config"

export const config: Config = {
  version: 1,
  subjectName: "**AP TEMPLATE (CHANGE) **",
  unitNames: [
    "Unit 1: ** CHANGE **",
    "Unit 2: ** CHANGE **",
    "Unit 3: ** CHANGE **",
    "Unit 4: ** CHANGE **",
    "Unit 5: ** CHANGE **",
    "Unit 6: ** CHANGE **",
    "Unit 7: ** CHANGE **",
    "Unit 8: ** CHANGE **",
    "Unit 9: ** CHANGE **",
  ],
  stimuli: {
    systemText:
      "You are a high school ** SUBJECT ** teacher employed by the collegeboard to create stimuli for questions on the ** AP ____ ** exam.",
    descriptions: {
      text: "** DESCRIBE THE STIMULUS IF IT NEEDS ONE **",
      attribution: "",
    },
    stimuliPerUnit: 3,
    doubleUnitCount: 20,
    tripleUnitCount: 5,
  },
  mcqs: {
    systemText:
      "You are a high school ** SUBJECT ** teacher employed by the collegeboard to create multiple choice questions for the ** AP ____ **  exam.",
    descriptions: {
      question:
        "** DESCRIBE THE MCQ QUESTION **",
    },
    questionsPerStimulus: 3,
    doubleAnswerCount: 20,
  },
  frqs: {
    systemText:
      "You are a high school history teacher employed by the collegeboard to create free response questions for the ** AP ____ ** exam.",
    descriptions: {
      question:
        "** DESCRIBE THE FRQ QUESTION **",
    },
    questionsPerStimulus: 4,
  },
}
