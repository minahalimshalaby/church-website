import React, { Component } from 'react';
import './Cover.css';

class Cover extends Component {

  render() {
    return (
      <div className="Cover">
        <div className="Cover__media Cover__media--image Cover__media--staticImage"
          style={{ backgroundImage: `url(${ this.props.image })` }} />
        <div className="Cover__media Cover__media--image Cover__media--blurredImage"
          style={{ backgroundImage: `url(${ this.props.image })` }} />

        <div className="Cover__overlay Cover__overlay--gradient-top-bottom" />
        <div className="Cover__overlay Cover__overlay--gradient-diagonal" />
        <div className="Cover__overlay" />

        <div className="Cover__content-overlay">

          <div className="Cover__subtitle">Welcome to IPA Chicago</div>
          <div className="Cover__title">Let's worship together</div>

          <div className="Cover__buttons">
            <button className="Cover__button Cover__button--sermons">
              Sermons
            </button>
            <button className="Cover__button Cover__button--ministries">
              Get Involved
            </button>
          </div>

        </div>
      </div>
    );
  }

}

export default Cover;
