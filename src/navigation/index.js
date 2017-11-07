import React from 'react'

import MenuToggle from 'navigation/components/MenuToggle'
import MenuDrawer from 'navigation/components/MenuDrawer'

export default class SiteNavigation extends React.Component {
  props: Props
  constructor (props) {
    super(props)

    this.state = {
      menuOpen: false
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu () {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  render () {
    const { menuOpen } = this.state
    return (
      <navigation role='site-navigation'>
      <MenuToggle menuOpen={menuOpen} toggleMenu={this.toggleMenu} />
      <MenuDrawer menuOpen={menuOpen} toggleMenu={this.toggleMenu} />
      </navigation>
    )
  }
}
