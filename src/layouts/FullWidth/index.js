import React from 'react'

import SiteNavigation from 'navigation/'

import styles from 'layouts/FullWidth/styles.scss'

type Props = {
  children: Object
}

class FullWidth extends React.Component {
  props: Props
  render () {
    const { children } = this.props
    return (
      <main className={styles.FullWidthLayout}>
        {children}
      </main>
    )
  }
}

class Header extends React.Component {
  props: Props

  render () {
    const { children } = this.props
    return (
      <header className={styles.Header}>
        <SiteNavigation />
        {children}
      </header>
    )
  }
}

class Body extends React.Component {
  props: Props
  render () {
    const { children } = this.props
    return (
      <article id='body'>
        {children}
      </article>
    )
  }
}

class Footer extends React.Component {
  props: Props
  render () {
    const { children } = this.props
    return (
      <footer className={styles.Footer}>
        {children}
      </footer>
    )
  }
}

export default FullWidth
export { Header, Body, Footer }
