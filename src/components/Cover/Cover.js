import React, { Component } from 'react';
import './Cover.css';

class Cover extends Component {

  render() {
    // const video = '';
    const video = this.props.video + '?rel=0&showinfo=0&controls=0&modestbranding=1&iv_load_policy=3&autoplay=1&loop=1';
    return (
      <div className="Cover">
        <iframe className="Cover__video" src={ video } frameborder="0" allowfullscreen />
        <div className="Cover__overlay Cover__overlay--gradient-top-bottom" />
        <div className="Cover__overlay Cover__overlay--gradient-diagonal" />
        <div className="Cover__overlay" />
        <div className="Cover__action">
          <button>Play w/ sound</button>        
        </div>
      </div>
    );
  }

}

export default Cover;
