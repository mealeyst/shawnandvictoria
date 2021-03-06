import React from 'react'

import FullWidth, { Header, Body, Footer } from 'layouts/FullWidth'
import Section from 'components/Section'
import Sections from 'sections'
import Image from 'components/Image'

export default class App extends React.Component {
  render () {
    return (
      <FullWidth>
        <Header />
        <Body>
          {Object.keys(Sections).map((name, index) => {
            const CurrentSection = Sections[name]
            return (
              <Section key={index} name={name}>
                <CurrentSection />
              </Section>
            )
          })}
        </Body>
        <Footer>
          <span>Made with love by: Shawn Mealey </span>
        </Footer>
      </FullWidth>
    )
  }
}
