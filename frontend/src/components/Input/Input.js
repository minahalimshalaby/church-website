import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Input.css';

class Input extends Component {

  state={
    filled: false,
    focused: false,
  }

  handleClick = (event) => {
    if (event.target.className === 'Input__inputarea') {
      if (!this.state.focused)
        event.target.querySelector('.Input__input').focus();
    }
  }
  handleFocus = (event) => {
    this.setState({
      focused: true
    });
  }
  handleBlur = (event) => {
    this.setState({
      focused: false,
      filled: (event.target.value !== '')
    });
  }

  render() {
    const jsx = []

    if (this.props.type === 'textarea') {
      jsx.push(<textarea className="Input__input"></textarea>);      
    } else {
      jsx.push(<input type={ this.props.type || "text" } className="Input__input" />);
    }


    return (
      <div className="Input" 
        data-type={ this.props.type || "text" }
        data-focused={ this.state.focused }
        data-filled={ this.state.filled }
        onFocus={ this.handleFocus }
        onBlur={ this.handleBlur }
        onClick={ this.handleClick }
        >
        <div className="Input__placeholder">{ this.props.placeholder || "" }</div>
        <div className="Input__inputarea">
          { jsx }
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
