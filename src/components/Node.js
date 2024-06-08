import React from 'react';

class Node extends React.Component{

  onNodeClick() {
    this.props.nodeIsClicked(this.props.nodeNumber);
  }

  render() {
    const position = this.props.position;
    const player = this.props.controllingPlayer;
    let playerStyle = {};
    if (player == 0) {
      playerStyle.width = 20;
      playerStyle.height = 20;
      playerStyle.bkg = "#b79054";
    } else if (player == 1) {
      playerStyle.width = 30;
      playerStyle.height = 30;
      playerStyle.bkg = "#ffffff";
    } else if (player == 2) {
      playerStyle.width = 30;
      playerStyle.height = 30;
      playerStyle.bkg = "#666666";
    }
    const style = {left: position.xPos + '%', top: position.yPos + '%', width: playerStyle.width + 'px', height: playerStyle.height + 'px', backgroundColor: playerStyle.bkg};

    return (
      <div className="node" style={style} onClick={this.onNodeClick.bind(this)}/>
    );
  }
}

export default Node;