import React from 'react';

// GameBoard component displays the current state of the hangman
const GameBoard = ({ wrongGuesses }) => {
    const imageNumber = Math.min(wrongGuesses.length, 10) + 1;  // Ensure it does not exceed the number of images
    const imageUrl = `/hangmandrawings/state${imageNumber}.GIF`;

    return (
        <div>
            <h2>Hangman Board</h2>
            {wrongGuesses.length > 0 && <img src={imageUrl} alt="Hangman" />}
        </div>
    );
};

export default GameBoard;