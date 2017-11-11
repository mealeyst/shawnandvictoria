import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Portal from 'components/Portal'
import MenuLink from 'navigation/components/MenuLink'

import styles from 'navigation/components/MenuDrawer/styles.scss'

const transitionStyles = {
  enter: styles['drawer-enter'],
  exit:  styles['drawer-exit']
};

type Props = {
  menuOpen: Boolean
}

const Drawer = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    classNames={transitionStyles} timeout={500}
  >
    {children}
  </CSSTransition>
);

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

  render () {
    const { menuOpen, links, ...props } = this.props
    return (
      <TransitionGroup>
        {menuOpen &&
          <Drawer>
            <aside className={styles.MenuDrawer}>
              {links.map((link, index) => {
                return (<MenuLink key={index} text={link.text} delay={1 + (index * .25)  } {...props} />)
              })}
            </aside>
          </Drawer>
        }
      </TransitionGroup>
    )
  }
}
