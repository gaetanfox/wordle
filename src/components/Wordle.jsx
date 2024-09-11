import { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";

const Wordle = ({ solution }) => {
  const { currentGuess, handleKeyUp } = useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp); // Allows to not have a ton of event listeners, it will clean it and attach it again when needed
  }, [handleKeyUp]);
  return <div>current guess - {currentGuess}</div>;
};

export default Wordle;
