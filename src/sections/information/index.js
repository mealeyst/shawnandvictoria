import React from 'react'
import GoogleMapsLoader from 'google-maps'

import styles from './styles.scss'

export default class Information extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      map: null
    }
  }
  componentWillMount () {
    GoogleMapsLoader.KEY = 'AIzaSyBwd_GTQN2yrzPrunrlG2wx0wQb8DGTBdo'

    GoogleMapsLoader.load(function(google) {
      var grandview = {lat: 41.6979864, lng: -73.9399684}
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: grandview
      })
      var marker = new google.maps.Marker({
        position: grandview,
        map: map
      })
    })

  }
  render () {
    return (
      <article className={styles.informationCard}>
        <h1 className={styles.title}>Information</h1>
        <aside className={styles.mapWrapper}>
          <div className={styles.map} id='map'></div>
        </aside>
        <aside className={styles.details}>
          <h2>The Grandview</h2>
          <p>176 Rinaldi Blvd, Poughkeepsie, NY 12601</p>
          <hr />
          <p><b>Date:</b> July 15th, 2018</p>
          <p><b>From:</b> 4:30PM - 9:30PM</p>
          <p>The ceremony and reception will take place at the venue in the outdoor ballroom</p>
        </aside>
        <aside className={styles.questions}>
          <h2>Questions</h2>
          Accomodations
          Plus One
        </aside>
      </article>
    )
  }
}
