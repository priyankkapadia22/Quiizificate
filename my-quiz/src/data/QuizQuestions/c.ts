// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const c: Topic = {
  topic: 'C',
  level: 'Beginner',
  totalQuestions: 6,
  totalScore: 60,
  totalTime: 160,
  questions: [
    {
      question: "Which of the following is not a valid C variable name?",
      choices: ["int number", "float rate", "int variable_count", "int $main"],
      type: 'MCQs',
      correctAnswers: ['int $main'],
      score: 10,
    },
    {
      question: "All keywords in C are in ____________",
      choices: ["LowerCase letters",
      "UpperCase letters",
      "CamelCase letters",
      "None of the mentioned"],
      type: 'MCQs',
      correctAnswers: ['LowerCase letters'],
      score: 10,
    },
    {
      question: "Which of the following is true for variable names in C?",
      choices: ["They can contain alphanumeric characters as well as special characters",
      "It is not an error to declare a variable to be one of the keywords(like goto, static)",
      "Variable names cannot start with a digit",
      "Variable can be of any length"],
      type: 'MCQs',
      correctAnswers: ['Variable names cannot start with a digit'],
      score: 10,
    },
    {
      question: "Which of the following cannot be a variable name in C?",
      choices: ["volatile",
      "true",
      "friend",
      "export",],
      type: 'MCQs',
      correctAnswers: ['volatile'],
      score: 10,
    },
    {
      question: 'What is an example of iteration in C?',
      choices: ['for', 'while', 'do-while', 'all of the mentioned'],
      type: 'MCQs',
      correctAnswers: ['all of the mentioned'],
      score: 10,
    },
    {
      question: ' Which is valid C expression?',
      choices: [
        'int my_num = 100,000;',
        'int my_num = 100000;',
        'int my num = 1000;',
        'int $my_num = 10000;',
      ],

      type: 'MCQs',
      correctAnswers: ['int my_num = 100000;'],
      score: 10,
    },
  ],
}
