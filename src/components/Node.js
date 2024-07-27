import React from 'react';

class Node extends React.Component {
  // Use class properties to avoid binding in render
  onNodeClick = () => {
    this.props.nodeIsClicked(this.props.nodeNumber);
  }

  render() {
    const { position, controllingPlayer, className } = this.props;
    const playerStyles = [
      { width: 20, height: 20, bkg: "#5C3317" }, // Empty node
      { width: 30, height: 30, bkg: "#CCEDEF" }, // Player 1
      { width: 30, height: 30, bkg: "#2F4F4F" }  // Player 2
    ];
    
    const playerStyle = playerStyles[controllingPlayer] || playerStyles[0];
    
    const hitboxSize = 30; // Increase hitbox size to 40x40px
    const style = {
      left: `${position.xPos}%`,
      top: `${position.yPos}%`,
      width: `${hitboxSize}px`,
      height: `${hitboxSize}px`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'translate(-50%, -50%)',
    };

    const nodeStyle = {
      width: `${playerStyle.width}px`,
      height: `${playerStyle.height}px`,
      backgroundColor: playerStyle.bkg,
      borderRadius: '50%',

    };

    return (
      <div 
        className={`node ${className}`} 
        style={style} 
        onClick={this.onNodeClick}
      >
        <div style={nodeStyle} />
      </div>
    );
  }
}

export default Node;