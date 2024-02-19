import React from 'react';

const WordToGuess = ({ word, guessedLetters }) => {
    // Function to display word with guessed letters revealed
    const displayWord = () => {
        return word.split('').map((letter, index) => (
            <span key={index}>
                {guessedLetters.includes(letter) ? letter : '_'}
            </span>
        ));
    };

    // Render word with guessed letters
    return (
        <div>
            <p>{displayWord()}</p>
        </div>
    );
};

export default WordToGuess;