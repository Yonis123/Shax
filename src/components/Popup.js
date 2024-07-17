import React from 'react';
import './Popup.css';

class Popup extends React.Component {
  render() {
    return (
      <div className="popup-overlay">
        <div className="popup">
          <h2>{this.props.message}</h2>
          {this.props.gameOver ? (
            <button onClick={this.props.onReset}>Reset Game</button>
          ) : (
            <button onClick={this.props.onClose}>Close</button>
          )}
        </div>
      </div>
    );
  }
}

export default Popup;