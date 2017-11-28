import React, { Component } from 'react'
import { Transition } from 'semantic-ui-react'

export default class ElementFader extends Component {

  constructor() {
    super();
    this.state = { visible: false };
  }

  toggleVisibility() {
    this.setState({ visible: !this.state.visible });
  }

  componentDidMount() {
    this.toggleVisibility();
  }

  render() {
    const { props } = this;

    //Not ready to render
    if (!props) return null;

    const visible = props.visible === undefined
      ? this.state.visible
      : props.visible;

    return (
      <div>
        <Transition visible={visible} animation='fade' duration={props.duration || 1000}>
          {/*DO NOT REMOVE this wrapping DIV.  Without it, the Transition does not work... */}
          <div>
            {props.children}
          </div>
        </Transition>
      </div>
    )
  }
}