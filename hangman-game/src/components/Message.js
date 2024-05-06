import React from 'react';

// Message component to show win or lose messages
const Message = ({ hasWon, hasLost }) => {
  return (
    <div>
      {hasWon && <p>Congratulations! You won!</p>}
      {hasLost && <p>Sorry! You lost! Try again!</p>}
    </div>
  );
};

export default Message;