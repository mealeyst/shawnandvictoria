import React from 'react'
import classNames from 'classnames'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import styles from './styles.scss'

const transitionStyles = {
  enter: styles['answer-enter'],
  exit:  styles['answer-exit']
}

type Props = {
  answer: String,
  id: Number,
  question: String,
  onQuestionClick: Function,
  open: Boolean
}

const Answer = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    classNames={transitionStyles}
    timeout={250}>
    {children}
  </CSSTransition>
)

export default class Question extends React.Component {
  props: Props
  render () {
    const { answer, id, question, open, onQuestionClick } = this.props
    return (
      <div className={styles.questionWrapper}>
        <div data-id={id} className={styles.question} onClick={onQuestionClick}>
        <svg className={styles.icon} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'>
            <line
              className={classNames(
                styles.iconLine,
                styles.iconPlus,
                {[styles.iconExpanded]: open}
              )}
              x1='60'
              x2='60'
              y1='60' />
            <line
              className={classNames(
                styles.iconLine,
                styles.iconPlus,
                {[styles.iconExpanded]: open}
              )}
              x1='60'
              y1='60'
              x2='60'
              y2='120' />
            <line
              className={styles.iconLine}
              y1='60'
              x2='120'
              y2='60' />
          </svg>
        {question}
        </div>
        <TransitionGroup>
          {open &&
            <Answer>
              <div
              className={styles.answer}
              dangerouslySetInnerHTML={{__html: answer}} />
            </Answer>
          }
        </TransitionGroup>
      </div>
    )
  }
}
