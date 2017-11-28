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

  startLoading() {
    let img = new window.Image();
    img.onload = this.onLoad;
    img.src = this.props.src;
  }

  handleVisible(e, {calculations}) {
    if(calculations.onScreen === true && this.state.loaded === false) this.startLoading();
    this.setState({ visibility: calculations.onScreen });
  }

  render() {
    const { props, state } = this;
    const { loaded, visibility } = state;

    return (
      <Visibility fireOnMount onUpdate={this.handleVisible}>
        {/*Do not remove this 'useless' div.  It helps the Visibility Element to calculate as it gives height
          to an otherwise 'display:none' img element until image is loaded and provides height.
        */}
        {visibility === true ? '' : <div style={{}}>Image load not started</div>}
        <ElementFader visible={loaded && visibility}>
          <img {...props} alt="" />
        </ElementFader>
      </Visibility >
    );
  }
}