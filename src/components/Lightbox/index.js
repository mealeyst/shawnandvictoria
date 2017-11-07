import React from 'react'

import Portal from 'components/Portal'
import Image from 'components/Image'

import styles from './styles.scss'

type Props = {
  children: Object,
  onClose: Function
}

export default class Lightbox extends React.Component {
  props: Props

  constructor (props) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    this.setState({loading: true})
  }

  onClick () {
    this.setState({open: false})
  }

  render () {
    const { image, size, onClose, next, prev } = this.props
    return (
      <Portal className={styles.portalWrapper} portalId='lightbox'>
        <div className={styles.Lightbox}>
          <header>
            <a className={styles.close} onClick={onClose}>
              <span>Close</span>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 90 90'>
                <line className={styles.closeLine} x1='5' y1='5' x2='85' y2='85'/>
                <line className={styles.closeLine} x1='85' y1='5' x2='5' y2='85'/>
              </svg>
            </a>
          </header>
          <article className={styles.LightboxContent}>
            <Image
              src={window.cl.url(image, { width: size, crop: 'fill'})}
              callback={this.imageLoaded} />
          </article>
          <footer>
            <div className={styles.navigation}>
              <a className={styles.changePhoto} onClick={prev}>
                <span>Previous</span>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 95 95'>
                  <circle cx='47.5' cy='47.5' r='47.5'/>
                  <polyline points='57.5 17.5 37.5 47.5 57.5 77.5'/>
                </svg>
              </a>
              <a className={styles.changePhoto} onClick={next}>
                <span>Next</span>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 95 95'>
                  <circle cx='47.5' cy='47.5' r='47.5'/>
                  <polyline points='42.5 17.5 62.5 47.5 42.5 77.5'/>
                </svg>
              </a>
            </div>
          </footer>
        </div>
      </Portal>
    )
  }
}
