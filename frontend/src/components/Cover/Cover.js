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
      media.push(<div className="Cover__media Cover__media--image" style={{ backgroundImage: `url(${ image })` }} />);
      
    }

    return (
      <div className="Cover">
        { media }
        <div className="Cover__overlay Cover__overlay--gradient-top-bottom" />
        <div className="Cover__overlay Cover__overlay--gradient-diagonal" />
        <div className="Cover__overlay" />
        {/* <div className="Cover__action">
          <button>Play w/ sound</button>
        </div> */}
      </div>
    );
  }

}

export default Cover;
