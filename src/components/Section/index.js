import React from 'react'
import classNames from 'classnames'

import styles from 'components/Section/styles.scss'

type Props = {
  name: String,
  children: Object
}

export default class Section extends React.Component {
  props: Props

  render () {
    const { name, children, grid } = this.props
    return (
      <section id={name} className={styles.Section}>{children}</section>
    )
  }
}
