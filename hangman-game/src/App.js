import React, { useState, useEffect } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import Keyboard from './components/Keyboard';
import WordDisplay from './components/WordDisplay';
import Message from './components/Message';

function App() {
    const [words, setWords] = useState([]);
    const [selectedWord, setSelectedWord] = useState('');
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [wrongGuesses, setWrongGuesses] = useState([]);
    const [showRules, setShowRules] = useState(false);  // State to toggle rules modal

    // Load words from dictionary.txt
    useEffect(() => {
        fetch('/dictionary.txt')
            .then(response => response.text())
            .then(text => {
                const wordArray = text.split('\n').map(word => word.trim().toUpperCase());
                setWords(wordArray);
                setSelectedWord(wordArray[Math.floor(Math.random() * wordArray.length)]);
            });
    }, []);

    const handleGuess = (letter) => {
        if (selectedWord.includes(letter)) {
            setGuessedLetters(current => [...current, letter]);
        } else {
            setWrongGuesses(current => [...current, letter]);
        }
    };

    const hasWon = selectedWord.split('').every(letter => guessedLetters.includes(letter));
    const hasLost = wrongGuesses.length >= 11;

    const resetGame = () => {
        setSelectedWord(words[Math.floor(Math.random() * words.length)]);
        setGuessedLetters([]);
        setWrongGuesses([]);
    };

    const toggleRules = () => {
        setShowRules(!showRules);
    };

    return (
        <div className="App">
            <h1>Hangman Game</h1>
            <button onClick={toggleRules}>Show Rules</button>  // Button to toggle rules
            {showRules && (
                <div>
                    <h2>Game Rules</h2>
                    <p>Guess the word by selecting letters. You have 11 wrong attempts before you lose.</p>
                    <button onClick={toggleRules}>Close</button>
                </div>
            )}
            <GameBoard wrongGuesses={wrongGuesses} />
            <WordDisplay word={selectedWord} guessedLetters={guessedLetters} />
            <Keyboard onGuess={handleGuess} guessedLetters={guessedLetters} wrongGuesses={wrongGuesses} />
            <Message hasWon={hasWon} hasLost={hasLost} />
            {(hasWon || hasLost) && (
                <button onClick={resetGame}>Restart Game</button>
            )}
        </div>
    );
}

export default App;