import React from 'react';

class Node extends React.Component {
  // Use class properties to avoid binding in render
  onNodeClick = () => {
    this.props.nodeIsClicked(this.props.nodeNumber);
  }

  render() {
    const { position, controllingPlayer, className } = this.props;
    const playerStyles = [
      { width: 20, height: 20, bkg: "#D3D3D3" }, // Empty node
      { width: 30, height: 30, bkg: "#CCEDEF" }, // Player 1
      { width: 30, height: 30, bkg: "#2F4F4F" }  // Player 2
    ];
    
    const playerStyle = playerStyles[controllingPlayer] || playerStyles[0];
    
    const style = {
      left: `${position.xPos}%`,
      top: `${position.yPos}%`,
      width: `${playerStyle.width}px`,
      height: `${playerStyle.height}px`,
      backgroundColor: playerStyle.bkg,
    };

    return (
      <div 
        className={`node ${className}`} 
        style={style} 
        onClick={this.onNodeClick} 
      />
    );
  }
}

export default Node;