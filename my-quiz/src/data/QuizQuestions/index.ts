import { c } from './c'
import { react } from './react'
import { java } from './java'
import { python } from './python'
// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

type Choice = string
type CorrectAnswers = string[]

export type Question = {
  question: string
  choices: Choice[]
  type: 'MCQs' | 'MAQs' | 'boolean'
  correctAnswers: CorrectAnswers
  score: number
  code?: string
  image?: string
}

export type Topic = {
  topic: string
  level: string
  totalQuestions: number
  totalScore: number
  totalTime: number
  questions: Question[]
}

export const quiz: Record<string, Topic> = {
  C: c,
  React: react,
  JAVA: java,
  Python: python,
}
