import React from 'react'
import classNames from 'classNames'

import scrollIt from 'scrollIt'

import styles from 'navigation/components/MenuLink/styles.scss'

type Props = {
  text: String,
  toggleMenu: Function
}

export default class MenuLink extends React.Component {
  props: Props

  constructor (props) {
    super(props)

    this.state = {
      show: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    const { toggleMenu } = this.props
    const { target: { href } } = e
    const index = href.indexOf('#')
    toggleMenu()
    if (index !== -1) {
      e.preventDefault()
      const element = document.getElementById(href.substring(index+1, href.length))
      scrollIt(
        element,
        300,
        'easeOutQuad',
        () => console.log('Just finished scrolling')
      )
    }
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
      this.setState({show: true})
    }, (1000 * this.props.delay))
  }

  componentWillUnMount () {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  render () {
    const { text, delay } = this.props
    const { show } = this.state
    const classes = classNames(styles.MenuLink, {
      [styles.show]: show
    })
    const style = {
      transform: `translateY(-${300*delay}%)`,
      sIndex: delay
    }
    return (
        <a
          ref={(elem => (this.link = elem))}
          className={classes}
          href={`#${text.toLowerCase().replace(/\s/g, '-')}`}
          style={style}
          onClick={this.handleClick}>
            {text}
        </a>
    )
  }
}
