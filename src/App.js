import React, { useEffect, useState } from "react";
import "./App.css";
import { FaCog } from "react-icons/fa";

function App() {
  const words = [
    "sigh",
    "tense",
    "airplane",
    "ball",
    "pies",
    "juice",
    "warlike",
    "bad",
    "north",
    "dependent",
    "steer",
    "silver",
    "highfalutin",
    "superficial",
    "quince",
    "eight",
    "feeble",
    "admit",
    "drag",
    "loving",
  ];
  var randomWord = words[Math.floor(Math.random() * words.length)];
  //var randomArrayWords = [];
  //randomArrayWords = [...randomArrayWords, randomWord];

  const [wordItem, setWordItem] = useState(randomWord);
  const [textInput, setTextInput] = useState("");
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(10);
  const [difficulty, setDifficulty] = useState("easy");
  const [showSettings, setShowSettings] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      time >= 1 && setTime(time - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [time]);

  if (textInput === wordItem) {
    setWordItem(words[Math.floor(Math.random() * words.length)]);
    setTextInput("");
    setScore(score + 1);
    if (difficulty === "easy") {
      setTime(time + 4);
    } else if (difficulty === "medium") {
      setTime(time + 3);
    } else if (difficulty === "hard") {
      setTime(time + 2);
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    setWordItem(words[Math.floor(Math.random() * words.length)]);
    setTextInput("");
    setScore(0);
    setTime(10);
  };

  return (
    <>
      <button className="settings-btn">
        <FaCog size={20} onClick={() => setShowSettings(!showSettings)} />
      </button>
      <div className={`settings ${showSettings ? "" : "hide"}`}>
        <form className="setting-form">
          <label>Difficulty </label>
          <select
            className="difficulty"
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </form>
      </div>
      {time !== 0 ? (
        <div className="container">
          <h1>Speed typer game</h1>
          <small>Type the following: </small>
          <h2 className="word">{wordItem}</h2>
          <input
            type="text"
            className="text"
            autoComplete="off"
            placeholder="Type the word here..."
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
          <p className="time-container">
            Time left: <span className="time">{time}s</span>
          </p>
          <p className="score-container">
            Score: <span className="score">{score}</span>
          </p>
        </div>
      ) : (
        <div className="container">
          <h2 className="word">Time out - Game over</h2>
          <small>Your final score is {score}</small>
          <button onClick={(e) => handleClick(e)}>Play again</button>
        </div>
      )}
    </>
  );
}

export default App;
