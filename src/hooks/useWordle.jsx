import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]); // each guess in an array
  const [history, setHistory] = useState([]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);

  // format a guess into an array of letter objects
  // [{key: 'a', color:'yellow'}]
  const formatGuess = () => {};

  //add a new guess to the guesses state
  //update the isCorrect state if the guess is correct
  //add one to the turn state
  const addNewGuess = () => {};
  // handle keyUp event and track current guess
  // if user presses enter, add the new guess
  const handleKeyUp = () => {};

  return { turn, currentGuess, guesses, isCorrect, handleKeyUp };
};

export default useWordle;
