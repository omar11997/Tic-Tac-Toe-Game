"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Cell from "../components/cell";

const winProabilities = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
export default function Home() {
  const [cells, setcells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinMessage] = useState("");
  const [resetGame, setRest] = useState(0);
  const [resetStyle, setStyle] = useState(false);
  useEffect(() => {
    //console.log(cells, "home comp");
    winProabilities.forEach((propability) => {
      let circleWin = propability.every((i) => cells[i] === "circle");
      let crossWin = propability.every((i) => cells[i] === "cross");
      if (circleWin) {
        setWinMessage("Circle Wins 🥇🥇🥇");
      }
      if (crossWin) {
        setWinMessage("Cross Wins 🥇🥇🥇");
      }
    });
  }, [cells, winningMessage, resetGame]); ///// use effect hook make like event listner on the useState data ande take inside the [] the data you want to listen to
  useEffect(() => {
    if (cells.every((c) => c !== "") && !winningMessage) {
      setWinMessage("Draw Case 🐱‍👤🐱‍👤");
    }
  }, [cells, winningMessage]);

  function reset() {
    setcells(["", "", "", "", "", "", "", "", ""]);
    setGo("circle");
    setWinMessage("");
    setRest(resetGame + 1);
    setStyle(true);
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.text}> Welcome to Tic Tac Toe Game</h1>
      <div className={styles.card}>
        <div className={styles.bg}>
          {cells.map((cell, index) => (
            <Cell
              key={index}
              id={index}
              cells={cells}
              go={go}
              setGo={setGo}
              setcells={setcells}
              cell={cell}
              winningMessage={winningMessage}
              resetStyle={resetStyle}
            />
          ))}
        </div>
        <div className={styles.blob}></div>
      </div>
      <div className={styles.turn}>{winningMessage}</div>
      {!winningMessage && (
        <div className={styles.turn}>
          {" "}
          {` it is ${go} ${go === "circle" ? "⭕" : "❌"}  turn!`}
        </div>
      )}
      <button onClick={reset} className={styles.comicbutton}>
        NEW GAME
      </button>
    </main>
  );
}
