// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const react: Topic = {
  topic: 'React',
  level: 'Beginner',
  totalQuestions: 6,
  totalScore: 60,
  totalTime: 360,
  questions: [
    {
      question: 'Which of the following is the correct name of React.js?',
      choices: ['React',
      'React.js',
      'ReactJS',
      'All of the above'],
      type: 'MCQs',
      correctAnswers: ['All of the above'],
      score: 10,
    },
    {
      question: 'In which country is this historical place located?',
      choices: ['China', 'Greece', 'India', 'Egypt'],
      type: 'MCQs',
      correctAnswers: ['China'],
      score: 10,
    },
    {
      question: 'Which of the following are the advantages of React.js?',
      choices: ['React.js can increase the application\'s performance with Virtual DOM.',
      'React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library.',
      'React.js can render both on client and server side.',
      'All of the above'],
      type: 'MCQs',
      correctAnswers: ['All of the above'],
      score: 10,
    },
    {
      question: 'Which of the following is not a disadvantage of React.js?',
      choices: ['React.js has only a view layer. We have put your code for Ajax requests, events and so on.',
      'The library of React.js is pretty large.',
      'The JSX in React.js makes code easy to read and write.',
      'The learning curve can be steep in React.js.'],
      type: 'MCQs',
      correctAnswers: ['The JSX in React.js makes code easy to read and write.'],
      score: 10,
    },
    {
      question: 'What of the following is used in React.js to increase performance?',
      choices: ['Original DOM',
      'Virtual DOM',
      'Both A and B.',
      'None of the above.'],
      type: 'MCQs',
      correctAnswers: ['Virtual DOM'],
      score: 10,
    },
    {
      question: 'Which of the following acts as the input of a class-based component?',
      choices: [
        'Class',
        'Factory',
        'Render',
        'Props',
      ],

      type: 'MCQs',
      correctAnswers: ['Props'],
      score: 10,
    },
  ],
}
