import React from "react";
import './Shaxboard.css'
import Node from './Node.js';

class Shaxboard extends React.Component{
    constructor() {
        super();
        let board = [];
        for (let i=0; i<24; i++) {
          board.push({"position": getPosition(i), "controllingPlayer":0});
        }
        this.state = {
          board: board,
          info: "Select a position for placement.",
          gamePhase: "I",
          removingPhase: false,
          player1Moves: 0,
          player2Moves: 0,
          player1Nodes: 0,
          player2Nodes: 0,
          currentPlayer: 1
        }
      }
    
      getNextPlayer(player) {
        if (player === 1) {
          return 2;
        } else {
          return 1;
        }
      }
    
      millIsFormed(index) {
        let board = this.state.board;
        const player = board[index].controllingPlayer;
        if ((index%2) == 0) {
          if (index == 2 || index == 4 || index == 10 || index == 12 || index == 18 || index == 20) {
            if ((board[index-1].controllingPlayer == player)&&(board[index-2].controllingPlayer == player)) {
              return true;
            } else if ((board[index+1].controllingPlayer == player)&&(board[index+2].controllingPlayer == player)) {
              return true;
            }
          } else if (index == 0 || index == 8 || index == 16) {
            if ((board[index+1].controllingPlayer == player)&&(board[index+2].controllingPlayer == player)) {
              return true;
            } else if ((board[index+6].controllingPlayer == player)&&(board[index+7].controllingPlayer == player)) {
              return true;
            }
          } else if (index == 6 || index == 14 || index == 22) {
            if ((board[index-1].controllingPlayer == player)&&(board[index-2].controllingPlayer == player)) {
              return true;
            } else if ((board[index+1].controllingPlayer == player)&&(board[index-6].controllingPlayer == player)) {
              return true;
            }
          }
        } else if ((index%2) == 1) {
          if (index!=7 && index !=15 && index!=23) {
            if ((board[index-1].controllingPlayer == player)&&(board[index+1].controllingPlayer == player)) {
              return true;
            }
          } else {
            if ((board[index-1].controllingPlayer == player)&&(board[index-7].controllingPlayer == player)) {
              return true;
            }
          }
          if (index<=7) {
            if ((board[index+8].controllingPlayer == player)&&(board[index+16].controllingPlayer == player)) {
              return true;
            }
          } else if (index>7 && index<=15) {
            if ((board[index-8].controllingPlayer == player)&&(board[index+8].controllingPlayer == player)) {
              return true;
            }
          } else if (index>15 && index<=23) {
            if ((board[index-8].controllingPlayer == player)&&(board[index-16].controllingPlayer == player)) {
              return true;
            }
          }
        }
      }

    
      playerMove(node) {
        if (this.state.removingPhase) {
          if (this.state.board[node].controllingPlayer !== 0 && this.state.board[node].controllingPlayer !== this.state.currentPlayer) {
            if (this.state.board[node].controllingPlayer === 1) {
              this.state.player1Nodes--;
            } else if (this.state.board[node].controllingPlayer === 2) {
              this.state.player2Nodes--;
            }
            this.state.board[node].controllingPlayer = 0;
            this.state.removingPhase=false;
            this.state.currentPlayer=this.getNextPlayer(this.state.currentPlayer);
            this.state.info="Select a position for placement.";
            this.forceUpdate();
          } else {
            const info = this.state.info;
            this.setState({info:"Invalid selection!"});
            setTimeout(function() {this.setState({info:info})}.bind(this), 1500);
          }
        } else if (!(this.state.removingPhase)) {
          if (this.state.gamePhase === "I") {
            if (this.state.board[node].controllingPlayer === 0) {
              this.state.board[node].controllingPlayer = this.state.currentPlayer;
              if (this.state.currentPlayer === 1) {
                this.state.player1Nodes++;
                this.state.player1Moves++;
              } else if (this.state.currentPlayer === 2) {
                this.state.player2Nodes++;
                this.state.player2Moves++;
              }
              if (this.millIsFormed(node)) {
                this.state.info="A mill was formed! Remove an opponent piece from the board.";
                this.state.removingPhase=true;
                this.forceUpdate();
              } else if (!(this.millIsFormed(node))) {
                this.state.currentPlayer=this.getNextPlayer(this.state.currentPlayer);
                this.forceUpdate();
              }
              if (this.state.player2Moves === 9) {
                this.state.gamePhase="II";
              }
            } else {
              const info = this.state.info;
              this.setState({info:"Invalid placement!"});
              setTimeout(function() {this.setState({info:info})}.bind(this), 1500);
            }
          } else {this.state.info="Second game phase not yet implemented";}
        }
      }
      getUnclickedNodes() {
        return this.state.board.filter(node => node.controllingPlayer === 0);
      }
    
      render() {
        let quarters = [];
        for (let i = 0; i < 4; i++) {
          let quarter = <div className="quarter bi-2" key={i} />;
          quarters.push(quarter);
        }
        let nodes = [];
        for (let i = 0; i < 24; i++) {
          const pos = this.state.board[i].position;
          const player = this.state.board[i].controllingPlayer;
          const additionalClass = player === 0 ? 'unclicked-node' : '';
          let node = (
            <Node
              nodeNumber={i}
              key={'cell' + i}
              controllingPlayer={player}
              position={pos}
              nodeIsClicked={this.playerMove.bind(this)}
              className={additionalClass}
            />
          );
          nodes.push(node);
        }
    
    
        return (
          <div className="board bi-2">
            {nodes}
            <div className="phase-div bi-3">Game Phase: <span className="black">{this.state.gamePhase}</span></div>
            <div className="player-div bi-3"> Player <span className="black">{this.state.currentPlayer}</span></div>
            <div className="info-div bi-3">{this.state.info}</div>
            {quarters}
            <div className="inner1 bi-4"/>
            <div className="inner2 bi-4"/>
            {/* <div className="lateral bi-3"><span className="white">Player 1 Pieces left: {this.state.player1Nodes}</span></div>
            <div className="lateral2 bi-3"><span className="black">Player 2 Pieces left: {this.state.player2Nodes}</span></div> */}
          </div>
        );
      }
    
    }
    
    let getPosition = function(index) {
      let xPos = 0;
      let yPos = 0;
      if (index == 0 || index == 1 || index == 2) {
        yPos = 0;
      } else if (index == 8 || index == 9 || index == 10) {
        yPos = 16.66;
      } else if (index == 16 || index == 17 || index == 18) {
        yPos = 33.33;
      } else if (index == 7 || index == 15 || index == 23 || index == 19 || index == 11 || index == 3) {
        yPos = 50;
      } else if (index == 22 || index == 21 || index == 20) {
        yPos = 66.66;
      } else if (index == 14 || index == 13 || index == 12) {
        yPos = 83.33;
      } else if (index == 6 || index == 5 || index == 4) {
        yPos = 100;
      }
      if (index == 0 || index == 7 || index == 6) {
        xPos = 0;
      } else if (index == 8 || index == 15 || index == 14) {
        xPos = 16.66;
      } else if (index == 16 || index == 23 || index == 22) {
        xPos = 33.33;
      } else if (index == 1 || index == 9 || index == 17 || index == 21 || index == 13 || index == 5) {
        xPos = 50;
      } else if (index == 18 || index == 19 || index == 20) {
        xPos = 66.66;
      } else if (index == 10 || index == 11 || index == 12) {
        xPos = 83.33;
      } else if (index == 2 || index == 3 || index == 4) {
        xPos = 100;
      }
    
      return { "xPos": xPos, "yPos": yPos};
    }
    
    export default Shaxboard;