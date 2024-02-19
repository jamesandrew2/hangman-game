import React from 'react';

const LettersGuessed = ({ guessedLetters, handleLetterSelect }) => {
    // Function to generate clickable letters for guessing
    const generateAlphabet = () => {
        return 'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => (
            <button
                key={letter}
                onClick={() => handleLetterSelect(letter)}
                disabled={guessedLetters.includes(letter)}
            >
                {letter}
            </button>
        ));
    };

    // Render alphabet buttons for guessing
    return (
        <div>
            <p>Guess a letter:</p>
            <div>{generateAlphabet()}</div>
        </div>
    );
};

export default LettersGuessed;