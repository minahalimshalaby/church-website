import React, { Component } from 'react';
import './Cover.css';

class Cover extends Component {

  render() {

    const media = [];

    if (this.props.video !== undefined) {

      const video = this.props.video + '?rel=0&showinfo=0&controls=0&modestbranding=1&iv_load_policy=3&autoplay=1&loop=1&mute=1&start=14';
      media.push(<iframe className="Cover__media Cover__media--video" src={ video } title="cover-video" frameborder="0" allowfullscreen />);

    }

    else if (this.props.image !== undefined) {

      const image = this.props.image;
      media.push(<div className="Cover__media Cover__media--image Cover__media--staticImage" style={{ backgroundImage: `url(${ image })` }} />);
      media.push(<div className="Cover__media Cover__media--image Cover__media--blurredImage" style={{ backgroundImage: `url(${ image })` }} />);
      
    }

    return (
      <div className="Cover">
        { media }
        <div className="Cover__overlay Cover__overlay--gradient-top-bottom" />
        <div className="Cover__overlay Cover__overlay--gradient-diagonal" />
        <div className="Cover__overlay" />
        <div className="Cover__content-overlay">

          <div className="Cover__subtitle">
            Welcome to IPA Chicago
          </div>
          <div className="Cover__title">
            Let's worship together
          </div>
          <div className="Cover__buttons">
            <button
              className="Cover__button Cover__button--sermons">
              Sermons
            </button>
            <button
              className="Cover__button Cover__button--ministries">
              Get Involved
            </button>
          </div>

        </div>
        {/* <div className="Cover__action">
          <button>Play w/ sound</button>
        </div> */}
      </div>
    );
  }

}

export default Cover;
