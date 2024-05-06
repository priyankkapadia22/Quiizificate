import { ReactNode } from 'react'
import { ReactComponent as CSS } from '../assets/icons/css-3.svg'
import { ReactComponent as JAVA } from '../assets/icons/java.svg'
import { ReactComponent as CPP } from '../assets/icons/cpp.svg'
import { ReactComponent as C } from '../assets/icons/c.svg'
import { ReactComponent as JavaScript } from '../assets/icons/javascript.svg'
import { ReactComponent as Python } from '../assets/icons/python.svg'
import { ReactComponent as ReactIcon } from '../assets/icons/react.svg'

type QuizTopic = {
  title: string
  icon: ReactNode
  disabled?: boolean
}

export const quizTopics: QuizTopic[] = [
  {
    title: 'JAVA',
    icon: <JAVA />,
  },
  {
    title: 'C',
    icon: <C />,
  },
  {
    title: 'Python',
    icon: <Python />,
  },
  {
    title: 'React',
    icon: <ReactIcon />,
  },
  {
    title: 'C++',
    icon: <CPP />,
    disabled: true,
  },
  {
    title: 'JavaScript',
    icon: <JavaScript />,
    disabled: true,
  },
  {
    title: 'CSS',
    icon: <CSS />,
    disabled: true,
  },
]
