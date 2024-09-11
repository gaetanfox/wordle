import { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";

const Wordle = ({ solution }) => {
  const { currentGuess, handleKeyUp, guesses, isCorrect, turn, usedKeys } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    if (isCorrect) {
      console.log("You win");
      window.removeEventListener("keyup", handleKeyUp);
    }
    if (turn > 5) {
      console.log("You lost");
      window.removeEventListener("keyup", handleKeyUp);
    }
    return () => window.removeEventListener("keyup", handleKeyUp); // Allows to not have a ton of event listeners, it will clean it and attach it again when needed
  }, [handleKeyUp, isCorrect, turn]);

  return (
    <div>
      <div>current guess - {currentGuess}</div>
      <div>solution - {solution}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad usedKeys={usedKeys} />
    </div>
  );
};

export default Wordle;
