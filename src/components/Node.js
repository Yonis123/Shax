import React from 'react';

class Node extends React.Component {
  onNodeClick() {
    this.props.nodeIsClicked(this.props.nodeNumber);
  }

  render() {
    const { position, controllingPlayer, className } = this.props;
    let playerStyle = {};
    
    if (controllingPlayer === 0) {
      playerStyle.width = 20;
      playerStyle.height = 20;
      playerStyle.bkg = "#D3D3D3"; // Light Gray for empty nodes
    } else if (controllingPlayer === 1) {
      playerStyle.width = 30;
      playerStyle.height = 30;
      playerStyle.bkg = "#CCEDEF"; // Light Blue for Player 1
    } else if (controllingPlayer === 2) {
      playerStyle.width = 30;
      playerStyle.height = 30;
      playerStyle.bkg = "#2F4F4F"; // Dark Slate Gray for Player 2
    }
    
    const style = {
      left: position.xPos + '%',
      top: position.yPos + '%',
      width: playerStyle.width + 'px',
      height: playerStyle.height + 'px',
      backgroundColor: playerStyle.bkg,
    };

    return (
      <div className={`node ${className}`} style={style} onClick={this.onNodeClick.bind(this)} />
    );
  }
}

export default Node;