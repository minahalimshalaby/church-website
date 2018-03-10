import React, { Component } from 'react';

class Section extends Component {

  render() {
    return (
      <section className="Section">
        { this.props.children }
      </section>
    );
  }

}

export default Section;
