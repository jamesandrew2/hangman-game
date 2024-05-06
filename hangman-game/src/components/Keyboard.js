import React from 'react';

const Keyboard = ({ onGuess, guessedLetters, wrongGuesses }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

  return (
    <div>
      {letters.map(letter => (
        <button 
          key={letter} 
          onClick={() => onGuess(letter)}
          disabled={guessedLetters.includes(letter) || wrongGuesses.includes(letter)} // Consider both correct and incorrect guesses
          style={{ opacity: guessedLetters.includes(letter) || wrongGuesses.includes(letter) ? 0.3 : 1 }} // Fade out the button if guessed
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;