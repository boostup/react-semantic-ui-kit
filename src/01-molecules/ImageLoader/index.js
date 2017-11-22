import React, { Component } from 'react'
import ElementFader from '../../00-atoms/ElementFader/'
import { Visibility } from 'semantic-ui-react'

export default class ImageLoader extends Component {

  constructor() {
    super();
    this.state = { loaded: false, visibility: false };
    this.onLoad = this.onLoad.bind(this);
    this.handleVisible = this.handleVisible.bind(this);
  }

  onLoad() {
    this.setState({ loaded: true });
  }

  componentDidMount() {
    let img = new window.Image();
    img.onload = this.onLoad;
    img.src = this.props.src;
  }

  handleVisible() {
    this.setState({ visibility: true });
  }

  render() {
    const { props, state } = this;
    const { loaded, visibility } = state;
    const renderedProps = visibility === true ? props : {};

    return (
      <Visibility onTopVisible={this.handleVisible}>
        <ElementFader visible={loaded && visibility}>
          <img {...renderedProps} alt="" />
        </ElementFader>
      </Visibility >
    );
  }
}