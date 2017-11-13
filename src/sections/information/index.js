import React from 'react'
import GoogleMapsLoader from 'google-maps'

import Question from './components/Question'

import styles from './styles.scss'

export default class Information extends React.Component {
  static defaultProps = {
    information: [
      {
        question: 'What time should I arrive?',
        answer: `<p>We would appreciate guests arriving at 4:00PM at the latest as
         the actual ceremony will start promptly at 4:30PM.</p>`
      },
      {
        question: 'Where should I park?',
        answer: '<p>Valet parking will be provided by the Grandview</p>'
      },
      {
        question: 'What should I wear?',
        answer: '<p>Formal / Black Tie optional.</p>'
      },
      {
        question: 'Can I bring a date?',
        answer: `<p>Please restrict the attendees in your party to those listed on
        your invitation. We wish we could accommodate all our friends and
        family, but resources restrict this. We hope that we are able to
        celebrate with others at a later date!</p>`
      },
      {
        question: 'I am coming from out of town. Where should I stay?',
        answer: `</p>There are block booked hotel rooms at both the Poughkeepsie
        Grand Hotel as well as the Holiday Inn in Poughkeepsie.</p>`
      },
      {
        question: 'Is there transportation being provided between reception and hotels?',
        answer: `<p>There is a trolly that runs between the Grandview and the
        Poughkeepsie Grand Hotel as well as the Holiday Inn in Poughkeepsie.</p>`
      },
      {
        question: 'What if I have a dietary restriction?',
        answer: `<p>Please contact either Victoria Lew or Shawn Mealey and we will
        make sure that the proper accomodations will be made with regards to
        your meal.</p>`
      },
      {
        question: 'I have a question not answered here; how do I contact you?',
        answer: `Feel free to either email us at
        <a href='mailto:lew.mealey@gmail.com'>lew.mealey@gmail.com</a> or call
          us at <a href='tel:585-880-8108'>585-880-8108</a>, and we will try our
           very best to answer any questions that you may have!`
      }
    ]
  }
  constructor(props) {
    super(props)
    this.state = {
      map: null,
      questionsOpen: []
    }
    this.onQuestionClick = this.onQuestionClick.bind(this)
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

  onQuestionClick ({target: {dataset: { id } } }) {
    const { questionsOpen } = this.state
    if (questionsOpen.includes(`${id}`)) {
      let index = questionsOpen.indexOf(id)
      this.setState({questionsOpen: [
        ...questionsOpen.splice(0, index),
        ...questionsOpen.splice(index + 1),
      ]})
    } else {
      this.setState({questionsOpen: [...questionsOpen, id]})
    }
  }

  render () {
    const { information } = this.props
    const { questionsOpen } = this.state
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
          <h2 className={styles.title}>Questions</h2>
          {information.map((info, index) => {
            return (
              <Question
                key={index}
                id={index}
                question={info.question}
                answer={info.answer}
                open={questionsOpen.includes(`${index}`)}
                onQuestionClick={this.onQuestionClick} />
            )
          })}
        </aside>
      </article>
    )
  }
}
