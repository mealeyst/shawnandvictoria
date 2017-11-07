import React from 'react'
import classNames from 'classnames'

import styles from 'navigation/components/MenuToggle/styles.scss'

type Props = {
  menuOpen: Boolean,
  toggleMenu: Function
}

export default class  extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      touched: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange () {
    const { toggleMenu } = this.props
    this.setState({
      touched: true,
    })
    toggleMenu()
  }

  render () {
    const { menuOpen } = this.props
    const { touched } = this.state
    const outerLineClasses = classNames(styles.outer, styles.line)
    const innerLineClasses = classNames(styles.inner, styles.line)
    const iconStyles = classNames(styles.icon, {
      [styles.animated]: touched
    })
    const topPoints = `M2,74.21H102c51.54,1.7,72.86-35.69,59.31-58.6S93.4-3.52,
    89.36,69.35L18.64,140.06`
    const bottomPoints = `M2,138.79H102c51.54-1.7,72.86,35.69,59.31,58.6s-67.91,
    19.13-72-53.74L18.64,72.94`
    return (
      <label htmlFor='menu-toggle'>
        <input
          className={styles.menuInput}
          id='menu-toggle'
          type='checkbox'
          checked={menuOpen}
          onChange={this.handleChange} />
        <svg
          className={iconStyles}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 167.29 210.66'>
          <path
            className={outerLineClasses}
            d={topPoints} />
          <line
            className={innerLineClasses}
            x1='52'
            y1='105.54'
            x2='2'
            y2='105.54' />
          <line
            className={innerLineClasses}
            x1='52'
            y1='105.54'
            x2='102'
            y2='105.54'/>
          <path
            className={outerLineClasses}
            d={bottomPoints} />
        </svg>
      </label>
    )
  }
}
