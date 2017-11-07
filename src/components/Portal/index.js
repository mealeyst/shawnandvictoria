import React from 'react'
import ReactDOM from 'react-dom'

type Props = {
  portalId: String,
  className: String,
  children: Object
}
export default class Portal extends React.Component {
  props: Props

  constructor (props) {
    super(props)

    this.portalElement = null
  }

  render () {
    return null
  }

  componentDidMount () {
    const { className } = this.props
    let p = this.props.portalId && document.getElementById(this.props.portalId)
    if (!p) {
      p = document.createElement('div')
      p.classList.add(className)
      p.id = this.props.portalId
      document.body.appendChild(p)
    }
    this.portalElement = p
    this.componentDidUpdate()
  }

  componentWillUnmount () {
    document.body.removeChild(this.portalElement)
  }

  componentDidUpdate () {
    const {children, className, ...props} = this.props

    delete props.portalId
    ReactDOM.render(<div {...props}>{children}</div>, this.portalElement)
  }
}
