import React, { useState} from "react";
import './WoodenBox.css'


const WoodenBox = () => {
  const [pieces, setPieces] = useState(Array(10).fill(true)); // Manage the state of pieces

  const removePiece = index => {
    const newPieces = pieces.map((piece, idx) => idx === index ? false : piece);
    setPieces(newPieces);
  };

  return (
    <div className="box">
      {pieces.map((piece, index) => (
        piece && <div key={index} className="piece" onClick={() => removePiece(index)}></div>
      ))}
    </div>
  );
};

export default WoodenBox
