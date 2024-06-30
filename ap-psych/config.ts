import type { Config } from "../llm/config"

export const config: Config = {
  version: 1,
  subjectName: "AP Psychology",
  unitNames: [
    "Unit 1: Scientific Foundations of Psychology",
    "Unit 2: Biological Bases of Behavior",
    "Unit 3: Sensation and Perception",
    "Unit 4: Learning",
    "Unit 5: Cognitive Psychology",
    "Unit 6: Developmental Psychology",
    "Unit 7: Motivation, Emotion, and Personality",
    "Unit 8: Clinical Psychology",
    "Unit 9: Social Psychology",
  ],
  stimuli: {
    systemText:
      "You are a high school psychology teacher employed by the collegeboard to create stimuli for questions on the AP Psychology exam.",
    descriptions: {
      text: "The plain text content of the stimulus, this must be a hypothetical situation you create to test the application of an AP Psychology term. The text that you CREATE should be relatively short, at most 2 sentences. You should describe the events without directly stating the term and give enough detail to determine the right answer. You also have the option to describe a photograph or graph in this field, if you do, set the 'image' field to TRUE.",
      attribution: "",
    },
    stimuliPerUnit: 3,
    doubleUnitCount: 20,
    tripleUnitCount: 5,
  },
  mcqs: {
    systemText:
      "You are a high school history teacher employed by the collegeboard to create multiple choice questions for the AP Psychology exam.",
    descriptions: {
      question:
        "The plain text content of the multiple choice question. This should ask which AP Psychology term is most relevant to the given stimulus. DO NOT ask questions about which term is from which unit. The unit SHOULD NOT be included in the question and the question SHOULD NOT ask anything about which term from unit ___ fits best. DO NOT use escape characters in your prompt.",
    },
    questionsPerStimulus: 3,
    doubleAnswerCount: 20,
  },
  frqs: {
    systemText:
      "You are a high school history teacher employed by the collegeboard to create free response questions for the AP Psychology exam.",
    descriptions: {
      question:
        "The plain text question content of the free response question. Start by saying: 'You have 50 minutes to answer BOTH of the following questions. It is not enough to answer a question by merely listing facts. You should present a cogent argument based on your critical analysis of the questions posed, using appropriate psychological terminology.' Then list SEVEN UNIQUE psychology terms and grade based on whether or not they (1) defined the term and (2) correctly applied it to this situation.",
    },
    questionsPerStimulus: 4,
  },
}
