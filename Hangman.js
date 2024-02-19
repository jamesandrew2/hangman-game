import React, { useState, useEffect } from 'react';
import WordToGuess from './WordToGuess';
import LettersGuessed from './LettersGuessed';
import HangmanImage from './HangmanImage';
import GameStatus from './GameStatus';

const Hangman = () => {
    // State variables
    const [word, setWord] = useState('');
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [wrongGuessCount, setWrongGuessCount] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    // useEffect to fetch a random word when component mounts
    useEffect(() => {
        fetchRandomWord();
    }, []);

    // Function to fetch a random word from an API
    const fetchRandomWord = async () => {
        try {
            const response = await fetch('https://api.example.com/words/random');
            const data = await response.json();
            setWord(data.word.toLowerCase());
        } catch (error) {
            console.error('Error fetching random word:', error);
        }
    };

    // Function to handle letter selection
    const handleLetterSelect = (letter) => {
        if (!gameOver && !guessedLetters.includes(letter)) {
            const updatedGuessedLetters = [...guessedLetters, letter];
            setGuessedLetters(updatedGuessedLetters);
            if (!word.includes(letter)) {
                setWrongGuessCount(wrongGuessCount + 1);
                if (wrongGuessCount === 5) {
                    setGameOver(true);
                }
            }
        }
    };

    // Render Hangman game components
    return (
        <div>
            <h1>Hangman Game</h1>
            <WordToGuess word={word} guessedLetters={guessedLetters} />
            <LettersGuessed guessedLetters={guessedLetters} handleLetterSelect={handleLetterSelect} />
            <HangmanImage wrongGuessCount={wrongGuessCount} />
            <GameStatus word={word} guessedLetters={guessedLetters} gameOver={gameOver} />
            <button onClick={() => window.location.reload()}>Restart Game</button>
        </div>
    );
};

export default Hangman;