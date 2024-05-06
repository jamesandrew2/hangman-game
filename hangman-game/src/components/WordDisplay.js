import React from 'react';

// WordDisplay component shows the current state of the guessed word
const WordDisplay = ({ word, guessedLetters }) => {
  return (
    <div>
      {word.split('').map((letter, index) => (
        <span key={index} style={{ margin: '0 10px' }}>
          {guessedLetters.includes(letter) ? letter : '_'}
        </span>
      ))}
    </div>
  );
};

export default WordDisplay;