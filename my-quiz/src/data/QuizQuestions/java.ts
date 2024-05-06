// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const java: Topic = {
  topic: 'java',
  level: 'Beginners',
  totalQuestions: 6,
  totalScore: 60,
  totalTime: 360,
  questions: [
    {
      question: 'Which component is used to compile, debug and execute the java programs?',
      choices: ['JRE',
      'JIT',
      'JDK',
      'JVM'],
      type: 'MCQs',
      correctAnswers: ['JDK'],
      score: 10,
    },
    {
      question:
        'Which one of the following is not a Java feature?',
      choices: ["Object-oriented",
      "Use of pointers",
      "Portable",
      "Dynamic and Extensible"],
      type: 'MCQs',
      correctAnswers: ['Use of pointers'],
      score: 10,
    },
    {
      question: 'Which of the following is not an OOPS concept in Java?',
      choices: [
      "Polymorphism",
      "Inheritance",
      "Compilation",
      "Encapsulation",
      ],
      type: 'MCQs',
      correctAnswers: ['Compilation'],
      score: 10,
    },
    {
      question: 'Which of the following is a superclass of every class in Java?',
      choices: [
      "ArrayList",
      "Abstract class",
      "Object class",
      "String",
      ],
      type: 'MCQs',
      correctAnswers: ['Abstract class'],
      score: 10,
    },
    {
      question: 'Which environment variable is used to set the java path?',
      choices: [
      "MAVEN_Path",
      "JavaPATH",
      "JAVA",
      "JAVA_HOME"],
      type: 'MCQs',
      correctAnswers: ['JAVA_HOME'],
      score: 10,
    },
    {
      question: 'What is Truncation in Java?',
      choices: [
      "Floating-point value assigned to a Floating type",
      "Floating-point value assigned to an integer type",
      "Integer value assigned to floating type",
      "Integer value assigned to floating type"
      ],
      type: 'MCQs',
      correctAnswers: ['Floating-point value assigned to an integer type'],
      score: 10,
    },
  ],
}
