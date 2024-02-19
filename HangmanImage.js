import React from 'react';

const HangmanImage = ({ wrongGuessCount }) => {
    // Array of hangman images
    const hangmanImages = [
        '/images/hangman-0.png',
        '/images/hangman-1.png',
        '/images/hangman-2.png',
        '/images/hangman-3.png',
        '/images/hangman-4.png',
        '/images/hangman-5.png',
        '/images/hangman-6.png',
    ];

    // Render hangman image based on wrong guess count
    return (
        <div>
            <img src={hangmanImages[wrongGuessCount]} alt={`Hangman Step ${wrongGuessCount}`} />
        </div>
    );
};

export default HangmanImage;