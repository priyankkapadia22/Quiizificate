// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const python: Topic = {
  topic: 'Python',
  level: 'Beginners',
  totalQuestions: 6,
  totalScore: 60,
  totalTime: 360,
  questions: [
    {
      question: 'In Python, strings are mutable objects.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['False'],
      score: 5,
    },
    {
      question:
        'Python supports multiple inheritance, allowing a class to inherit from multiple parent classes.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 5,
    },
    {
      question: 'What is the output of the following Python code?',
      code: 'print(list(filter(lambda x: x % 2 == 0, range(10))))',
      choices: [
        '[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]',
        '[0, 2, 4, 6, 8]',
        '[1, 3, 5, 7, 9]',
        '[0, 1, 2, 3, 4, 9]',
      ],
      type: 'MCQs',
      correctAnswers: ['[0, 2, 4, 6, 8]'],
      score: 10,
    },
    {
      question: 'What is the purpose of the "__init__" method in a Python class?',
      choices: [
        'To initialize the class attributes',
        'To define the constructor of the class',
        'To create a new instance of the class',
        'To define the destructor of the class',
      ],
      type: 'MCQs',
      correctAnswers: ['To define the constructor of the class'],
      score: 10,
    },
    {
      question: 'What is the output of the following Python code?',
      code: 'print(len({True: 1, False: 0, "True": 2}))',
      choices: ['0', '1', '2', '3'],
      type: 'MCQs',
      correctAnswers: ['2'],
      score: 10,
    },
    {
      question: 'What is the purpose of the "with" statement in Python?',
      choices: [
        'To define a context manager',
        'To handle exceptions',
        'To control the flow of a loop',
        'To create a new file',
      ],
      type: 'MCQs',
      correctAnswers: ['To define a context manager'],
      score: 10,
    },
  ],
}
