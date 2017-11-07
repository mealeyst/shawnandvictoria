import React from 'react'

import Lightbox from 'components/Lightbox'

import Thumbnail from './components/Thumbnail'
import styles from './styles.scss'

export default class Photos extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      photoList: [],
      lightbox: false,
      size: Math.ceil(window.innerWidth * .5)
    }

    this.setLightbox = this.setLightbox.bind(this)
    this.closeLightBox = this.closeLightBox.bind(this)
    this.nextImage = this.nextImage.bind(this)
    this.prevImage = this.prevImage.bind(this)
  }

  componentWillMount () {
    window.fetch(window.cl.url('engagement', {format: 'json', type: 'list'}))
    .then((response) => {
      return response.json()
    }).then(({resources}) => {
      this.setState({photoList: resources.map((photo) => {
        return photo.public_id
      })})
    })
    .catch((err) => {
      console.error(err)
    })
  }

  setLightbox ({target: { dataset: { imgindex } } }) {
    const { photoList } = this.state
    this.setState({lightbox: photoList[imgindex], index: imgindex})
  }

  closeLightBox () {
    this.setState({lightbox: false})
  }

  nextImage () {
    const { photoList, index } = this.state
    const length = photoList.length
    if (index < length - 1) {
      this.setState({lightbox: photoList[(parseInt(index) + 1)], index: (parseInt(index) + 1)})

    } else {
      this.setState({lightbox: photoList[0], index: 0})
    }
  }

  prevImage () {
    const { photoList, index } = this.state
    const length = photoList.length
    if (index > 0) {
      this.setState({lightbox: photoList[(parseInt(index) - 1)], index: (parseInt(index) - 1)})
    } else {
      this.setState({lightbox: photoList[(parseInt(length) - 1)], index: (parseInt(length) - 1)})

    }
  }

  render () {
    const { photoList, lightbox, size } = this.state
    console.log('render', lightbox)
    return (
      <article className={styles.Photos}>
        <div className={styles.thumbnailWrapper}>
          <h1 className={styles.title}>Photos</h1>
          {photoList.map((photo, index) => {
            return (<Thumbnail key={index} index={index} src={photo} onClick={this.setLightbox}/>)
          })}
        </div>
        {lightbox && <Lightbox onClose={this.closeLightBox} image={lightbox} size={size} next={this.nextImage} prev={this.prevImage} />}
      </article>
    )
  }
}
