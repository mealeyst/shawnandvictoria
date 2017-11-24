import React from 'react'
import classNames from 'classnames'

import styles from './styles.scss'

export default class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      photoList: [],
      currentPhotoIndex: 0,
      exitClass: false
    }

    this.changePhoto = this.changePhoto.bind(this)
  }

  changePhoto () {
    const { photoList: { length }, currentPhotoIndex } = this.state
    if (currentPhotoIndex < length - 1) {
      this.setState({ currentPhotoIndex: (currentPhotoIndex + 1) })
    } else {
      this.setState({ currentPhotoIndex: 0 })
    }
  }

  componentWillMount () {
    window.fetch(window.cl.url('slider', {format: 'json', type: 'list'}))
    .then((response) => {
      return response.json()
    }).then(({resources}) => {
      const images = []
       resources.map((photo, index) => {
        images[index] = new Image()
        images[index].src = window.cl.url(photo.public_id, {width: window.innerWidth, height: window.innerHeight, gravity: "faces", crop: "fill"})
      })
      this.setState({photoList: images})
      console.log(images)
      window.setInterval(this.changePhoto, 7000)
    })
    .catch((err) => {
      console.error(err)
    })
  }

  render () {
    const { photoList, currentPhotoIndex } = this.state
    return (
      <article className={styles.fullBleed}>
        {photoList[currentPhotoIndex] &&
          <img className={styles.slider} key={currentPhotoIndex} src={photoList[currentPhotoIndex].src} />
        }
        <div className={styles.overlay}>
          <svg className={styles.overlayText} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 105 110'>
            <text className={styles.textLarge} transform='translate(0.76 32.78)'>Victoria</text>
            <text className={styles.textMedium} transform='translate(21.09 55.11)'>&amp;</text>
            <text className={styles.textLarge} transform='translate(35.43 67.78)'>Shawn</text>
            <text className={styles.textSmall} transform='translate(10 90)'>July 15th 2018</text>
          </svg>
        </div>
      </article>
    )
  }
}
