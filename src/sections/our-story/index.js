import React from 'react'
import classNames from 'classnames'
import shawnStory from './shawn-story.md'
import vickyStory from './victoria-story.md'
import styles from './styles.scss'

export default class OurStory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      story: true
    }

    this.handleOnChange= this.handleOnChange.bind(this)
  }

  handleOnChange () {
    const { story } = this.state
    this.setState({story: !story})
  }

  render () {
    const hisStory = {
      __html: shawnStory
    }
    const herStory = {
      __html: vickyStory
    }
    const { story } = this.state
    const hisClasses = classNames(styles.text, {[styles.visible]: story})
    const herClasses = classNames(styles.text, {[styles.visible]: !story})

    return (
      <article className={styles.OurStory}>
        <header className={styles.header}>
          <label htmlFor='story'>
            <input
              className={styles.toggleInput}
              id='story'
              type='checkbox'
              onChange={this.handleOnChange}
              checked={story}
            />
          <span className={styles.hisStoryInput}>{'Shawn\'s Story'}</span>
            <span className={styles.herStoryInput}>{'Victoria\'s Story'}</span>
          </label>
        </header>
        <main className={styles.storyWrapper}>
          <div className={hisClasses} dangerouslySetInnerHTML={hisStory}/>
          <div className={herClasses} dangerouslySetInnerHTML={herStory}/>
        </main>
      </article>
    )
  }
}
