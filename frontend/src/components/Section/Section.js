import React, { Component } from 'react';

import "./Section.css";

class Section extends Component {

  render() {
    
    return (
      <section className="Section" { ...this.props } >
        <div className="Section__wrapper">
          { this.props.children }
        </div>
      </section>
    );
  }

}

export default Section;
