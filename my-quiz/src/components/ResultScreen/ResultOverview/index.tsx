import { FC } from 'react'
import styled from 'styled-components'

import { useQuiz } from '../../../context/QuizContext'
import { device } from '../../../styles/BreakPoints'
import { HighlightedText } from '../../../styles/Global'
import { convertSeconds } from '../../../utils/helpers'
import { Result } from '../../../types'

const ResultOverviewStyle = styled.div`
  text-align: center;
  margin-bottom: 70px;
  @media ${device.md} {
    margin-bottom: 30px;
  }
  p {
    margin-top: 15px;
    font-weight: 500;
    font-size: 18px;
  }
`

interface ResultOverviewProps {
  result: Result[]
}

const calculateStatus = (obtainedScore: number, totalScore: number) => {
  if ((obtainedScore / totalScore) * 100 >= 60) {
    return 'Passed';
  } else {
    return 'Failed';
  }
}

const ResultOverview: FC<ResultOverviewProps> = ({ result }) => {
  const { quizDetails, endTime } = useQuiz()

  const totalQuestionAttempted = result.length

  const obtainedScore = result
    .filter((item) => item.isMatch && typeof item.score === 'number')
    .reduce((accumulator, currentValue) => accumulator + (currentValue.score || 0), 0)

  const calculateStatus = (obtainedScore: number, totalScore: number) => {
    if ((obtainedScore / totalScore) * 100 >= 60) {
      return 'Passed';
    } else {
      return 'Failed';
    }
  }

  const status = calculateStatus(obtainedScore, quizDetails.totalScore)

  return (
    <ResultOverviewStyle>
      <p>
        You attempted questions:{' '}
        <HighlightedText> {totalQuestionAttempted} </HighlightedText>/{' '}
        {quizDetails.totalQuestions}
      </p>
      <p>
        Score secured:<HighlightedText> {obtainedScore} </HighlightedText>/{' '}
        {quizDetails.totalScore}
      </p>
      <p>
        Time Spent:<HighlightedText> {convertSeconds(endTime)} </HighlightedText>
      </p>
      <p>
        Status:<HighlightedText> {status}</HighlightedText>
      </p>
    </ResultOverviewStyle>
  )
}

export { ResultOverview, calculateStatus }