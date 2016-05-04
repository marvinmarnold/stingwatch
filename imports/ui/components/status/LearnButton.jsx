import React from 'react';

export default class LearnButton extends React.Component {
  handleClick() {
      window.open("https://www.stingraymappingproject.org", "_system");
  }

  render() {
    const url = "https://www.stingraymappingproject.org";

    return (
      <a href={url} className="btn btn-secondary btn-lg btn-block"
        onClick={this.handleClick}>

        <i className="fa fa-graduation-cap"></i>&nbsp;&nbsp;Learn
      </a>
    );
  }
}
