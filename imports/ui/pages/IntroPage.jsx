import React from 'react';

import IntroSlide1 from '../components/intro/IntroSlide1.jsx';
import IntroSlide2 from '../components/intro/IntroSlide2.jsx';
import IntroSlide3 from '../components/intro/IntroSlide3.jsx';

export default class IntroPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1
    };
  }

  introPrev() {
    let page = this.state.page;
    switch (page) {
      case 1:
        // Do nothing if on first page
        break;
      case 2:
        this.setState({ page: --page });
        break;
      case 3:
        this.setState({ page: --page });
        break;
    }
  }

  introNext() {
    let page = this.state.page;
    switch (page) {
      case 1:
        this.setState({ page: ++page });
        break;
      case 2:
        this.setState({ page: ++page });
        break;
      case 3:
        // Do nothing if on last page
        break;
    }
  }

  render() {
    switch (this.state.page) {
      case 1:
        return <IntroSlide1 introPrev={this.introPrev.bind(this)} introNext={this.introNext.bind(this)} />
        break;
      case 2:
        return <IntroSlide2 introPrev={this.introPrev.bind(this)} introNext={this.introNext.bind(this)} />
        break;
      case 3:
        return <IntroSlide3 introPrev={this.introPrev.bind(this)} introNext={this.introNext.bind(this)} />
        break;
    }
  }
}
