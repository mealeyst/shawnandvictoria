import React from 'react'
import classNames from 'classNames'

import styles from './styles.scss'

type Props = {
  src: String,
  callback: Function
}

export default class ImageComponent extends React.Component {
  props: Props
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
    this.handleLoad = this.handleLoad.bind(this)
  }

  handleLoad () {
    const { callback } = this.props
    this.setState({ loaded: true })
  }

  componentDidMount () {
    console.log('Are we being hit?')
    this.loadImage(this.props)
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ loaded: false })
    this.loadImage(nextProps)
  }

  loadImage (props) {
    const { src } = props
    const localState = this
    let downloadingImage = new Image()
    downloadingImage.addEventListener('load', function() {
      localState.setState({loaded: src})
    }, false)
    downloadingImage.src = src
  }


  render () {
    const { className: additionalClass, callback, ...props } = this.props
    const { loaded } = this.state
    if (loaded) {
      return (
        <img className={classNames(styles.Image, additionalClass)} {...props} src={loaded}/>
      )
    } else {
      return (
        <div className={classNames(styles.loaderWrapper, additionalClass)}>
          <svg className={styles.loader} {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 95 95'>
            <circle className={styles.loaderBackground} cx='47.5' cy='47.5' r='47.5'/>
            <circle className={styles.loaderSpinner} cx='47.5' cy='47.5' r='37.5'/>
          </svg>
        </div>
      )
    }
  }
}
