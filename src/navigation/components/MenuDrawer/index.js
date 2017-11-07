import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

import Portal from 'components/Portal'
import MenuLink from 'navigation/components/MenuLink'

import styles from 'navigation/components/MenuDrawer/styles.scss'

const transitionNames = {
  enter: styles.drawerOpen,
  leave: styles.drawerClose
}

type Props = {
  menuOpen: Boolean
}

export default class MenuDrawer extends React.Component {
  props: Props
  static defaultProps = {
    links: [
      {text: 'Home'},
      {text: 'Our Story'},
      {text: 'Wedding Party'},
      {text: 'Photos'},
      {text: 'Information'},
      {text: 'Registry'}
    ]
  }

  componentDidMount () {

  }
  render () {
    const { menuOpen, links, ...props } = this.props
    return (
      <CSSTransitionGroup
        transitionName={transitionNames}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
        {menuOpen &&
          <aside className={styles.MenuDrawer}>
            {links.map((link, index) => {
              return (<MenuLink key={index} text={link.text} delay={1 + (index * .25)  } {...props} />)
            })}
          </aside>
        }
      </CSSTransitionGroup>
    )
  }
}
