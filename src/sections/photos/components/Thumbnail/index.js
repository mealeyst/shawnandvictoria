import React from 'react'

import Image from 'components/Image'

import styles from './styles.scss'

type Props = {
  src: String,
  index: Number
}

export default class Thumbnail extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      src: ''
    }
  }

  componentWillMount () {
    const { src } = this.props
    this.setState({src: window.cl.url(src, {width: 150, height: 150, gravity: "faces", crop: "fill"})})
  }

  render () {
    const { onClick, src: orig, index } = this.props
    const { src } = this.state
    return (
      <div className={styles.thumnailWrapper}>
        <Image
          data-imgindex={index}
          className={styles.Thumbnail}
          src={src}
          onClick={onClick}
          callback={this.imageWait} />
      </div>
    )
  }
}
