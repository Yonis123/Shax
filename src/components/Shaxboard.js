import React from 'react';
import './Shaxboard.css';
import Node from './Node.js';
import Popup from './Popup';

class Shaxboard extends React.Component {
  constructor() {
    super();
    // Initialize the state of the board and game variables
    this.state = {
      board: this.initializeBoard(),
      info: "Player 1's turn to place a piece.",
      gamePhase: "I", // "I" for initial placement, "II" for removing pieces, "III" for moving pieces
      player1Moves: 0,
      player2Moves: 0,
      player1Nodes: 0,
      player2Nodes: 0,
      currentPlayer: 1,
      firstMillPlayer: null,
      showPopup: false,
      popupMessage: '',
      removePiece: false,
      firstRemovalDone: false, // Track if the first removal in phase 2 is done
    };
  }

  // Initialize the board with 24 positions
  initializeBoard() {
    const board = [];
    for (let i = 0; i < 24; i++) {
      board.push({ position: this.getPosition(i), controllingPlayer: 0 });
    }
    return board;
  }

  // Get the next player in turn
  getNextPlayer(player) {
    return player === 1 ? 2 : 1;
  }

  // Check if a mill (three pieces in a row) is formed
  millIsFormed(index) {
    const board = this.state.board;
    const player = board[index].controllingPlayer;
    const positionsToCheck = [
      [2, 4, 10, 12, 18, 20], // Mid positions in a row
      [0, 8, 16], // Left column positions
      [6, 14, 22], // Right column positions
    ];

    // Check horizontal and vertical mills
    if (index % 2 === 0) {
      if (positionsToCheck[0].includes(index)) {
        if ((board[index - 1]?.controllingPlayer === player && board[index - 2]?.controllingPlayer === player) ||
            (board[index + 1]?.controllingPlayer === player && board[index + 2]?.controllingPlayer === player)) {
          return true;
        }
      } else if (positionsToCheck[1].includes(index)) {
        if ((board[index + 1]?.controllingPlayer === player && board[index + 2]?.controllingPlayer === player) ||
            (board[index + 6]?.controllingPlayer === player && board[index + 7]?.controllingPlayer === player)) {
          return true;
        }
      } else if (positionsToCheck[2].includes(index)) {
        if ((board[index - 1]?.controllingPlayer === player && board[index - 2]?.controllingPlayer === player) ||
            (board[index + 1]?.controllingPlayer === player && board[index - 6]?.controllingPlayer === player)) {
          return true;
        }
      }
    } else {
      if (![7, 15, 23].includes(index)) {
        if (board[index - 1]?.controllingPlayer === player && board[index + 1]?.controllingPlayer === player) {
          return true;
        }
      } else {
        if (board[index - 1]?.controllingPlayer === player && board[index - 7]?.controllingPlayer === player) {
          return true;
        }
      }
      if (index <= 7) {
        if (board[index + 8]?.controllingPlayer === player && board[index + 16]?.controllingPlayer === player) {
          return true;
        }
      } else if (index > 7 && index <= 15) {
        if (board[index - 8]?.controllingPlayer === player && board[index + 8]?.controllingPlayer === player) {
          return true;
        }
      } else if (index > 15 && index <= 23) {
        if (board[index - 8]?.controllingPlayer === player && board[index - 16]?.controllingPlayer === player) {
          return true;
        }
      }
    }
    return false;
  }

  // Handle player move
  playerMove(node) {
    const { board, currentPlayer, gamePhase, removePiece, firstMillPlayer, firstRemovalDone } = this.state;
    
    if (removePiece) {
      this.handleRemovePiece(node);
    } else if (board[node].controllingPlayer === 0) {
      if (gamePhase === "I") {
        this.handlePhaseI(node);
      } else if (gamePhase === "II") {
        this.setState({ info: "Second game phase not yet implemented" });
      } else if (gamePhase === "III") {
        this.setState({ info: "Third game phase not yet implemented" });
      }
    } else {
      this.showTemporaryInfo("Invalid placement!");
    }
  }

  handleRemovePiece(node) {
    const board = [...this.state.board];
    const { firstMillPlayer, firstRemovalDone, currentPlayer } = this.state;
    const opponentPlayer = this.getNextPlayer(currentPlayer);
    const opponentPlayerKey = currentPlayer === 1 ? 'player2Nodes' : 'player1Nodes';

    if (board[node].controllingPlayer !== 0 && board[node].controllingPlayer !== currentPlayer) {
      board[node].controllingPlayer = 0;
      this.setState(prevState => ({
        board,
        removePiece: false,
        info: `Player ${firstMillPlayer}'s turn to move a piece.`,
        [opponentPlayerKey]: prevState[opponentPlayerKey] - 1,
        currentPlayer: firstMillPlayer,
      }), () => {
        if (!firstRemovalDone) {
          // Allow the opponent to remove a piece
          this.setState({
            info: `Player ${opponentPlayer} removes an opponent's piece.`,
            removePiece: true,
            currentPlayer: opponentPlayer,
            firstRemovalDone: true,
          });
        } else {
          // Transition to phase III
          this.setState({
            gamePhase: "III",
            info: `Game Phase III: Start moving pieces.`,
            removePiece: false,
            firstRemovalDone: false, // Reset for future removals
          });
        }
      });
    } else {
      this.showTemporaryInfo("Invalid removal! You must remove an opponent's piece.");
    }
  }

  // Handle the first phase of the game where players place their pieces
  handlePhaseI(node) {
    const board = [...this.state.board];
    board[node].controllingPlayer = this.state.currentPlayer;
    const playerKey = this.state.currentPlayer === 1 ? 'player1Nodes' : 'player2Nodes';
    const moveKey = this.state.currentPlayer === 1 ? 'player1Moves' : 'player2Moves';

    this.setState(prevState => ({
      board,
      [playerKey]: prevState[playerKey] + 1,
      [moveKey]: prevState[moveKey] + 1,
    }), () => {
      if (this.millIsFormed(node)) {
        const nextPlayer = this.getNextPlayer(this.state.currentPlayer);
        this.setState({
          info: `Player ${this.state.currentPlayer} formed a mill!`,
          firstMillPlayer: this.state.firstMillPlayer || this.state.currentPlayer, // Store the first mill player
          showPopup: true,
          popupMessage: 'Mill formed!',
          currentPlayer: nextPlayer,
        }, () => {
          this.setState({
            info: `Player ${nextPlayer}'s turn to place a piece.`,
          });

          // Hide the popup after 2 seconds
          setTimeout(() => {
            this.setState({ showPopup: false });
          }, 2000);
        });
      } else {
        const nextPlayer = this.getNextPlayer(this.state.currentPlayer);
        if (this.state.player2Moves + 1 === 13) {
          // Move to phase II if all pieces have been placed
          const firstMillPlayer = this.state.firstMillPlayer || 2;
          this.setState({
            gamePhase: "II",
            info: `Game Phase II: Player ${firstMillPlayer} removes an opponent's piece.`,
            removePiece: true,
            currentPlayer: firstMillPlayer,
          });
        } else {
          this.setState({
            currentPlayer: nextPlayer,
            info: `Player ${nextPlayer}'s turn to place a piece.`,
          });
        }
      }
    });
  }

  // Show temporary info messages
  showTemporaryInfo(message) {
    const previousInfo = this.state.info;
    this.setState({ info: message });
    setTimeout(() => this.setState({ info: previousInfo }), 1500);
  }

  // Calculate the position of a node on the board
  getPosition(index) {
    const positions = [
      [0, 0], [50, 0], [100, 0],
      [100, 50], [100, 100], [50, 100], [0, 100], [0, 50],
      [16.66, 16.66], [50, 16.66], [83.33, 16.66],
      [83.33, 50], [83.33, 83.33], [50, 83.33], [16.66, 83.33], [16.66, 50],
      [33.33, 33.33], [50, 33.33], [66.66, 33.33],
      [66.66, 50], [66.66, 66.66], [50, 66.66], [33.33, 66.66], [33.33, 50],
    ];
    return { xPos: positions[index][0], yPos: positions[index][1] };
  }
   // Close the popup
   closePopup = () => {
    this.setState({ showPopup: false, popupMessage: '' });
  }

  // Render the game board and nodes
  render() {
    const nodes = this.state.board.map((node, i) => {
      const additionalClass = node.controllingPlayer === 0 ? 'unclicked-node' : '';
      return (
        <Node
          key={i}
          nodeNumber={i}
          controllingPlayer={node.controllingPlayer}
          position={node.position}
          nodeIsClicked={this.playerMove.bind(this)}
          className={additionalClass}
        />
      );
    });

    // Conditionally apply pointer events to the app container based on popup visibility
    const appClassName = this.state.showPopup ? 'app disabled' : 'app';

    return (
      <div className={appClassName}>
        <div className="board bi-2">
          {nodes}
          <div className="info-div bi-3">{this.state.info}</div>
          {[...Array(4)].map((_, i) => <div className="quarter bi-2" key={i} />)}
          <div className="inner1 bi-4" />
          <div className="inner2 bi-4" />
        </div>
        {this.state.showPopup && (
          <Popup 
            message={this.state.popupMessage}
            onClose={this.closePopup}
          />
        )}
      </div>
    );
  }
}

export default Shaxboard;