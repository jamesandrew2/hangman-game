import React from 'react';

const GameStatus = ({ word, guessedLetters, gameOver }) => {
    // Function to determine game status
    const getGameStatus = () => {
        if (gameOver) {
            return guessedLetters.join('') === word ? 'You Win!' : 'You Lose!';
        } else {
            return 'Keep Guessing...';
        }
    };

    // Render game status
    return (
        <div>
            <p>{getGameStatus()}</p>
        </div>
    );
};

export default GameStatus;