import styles from "../app/page.module.css";
import { Dispatch, SetStateAction } from "react";
type cellprops = {
  key: number;
  id: number;
  cells: string[];
  go: string;
  setGo: Dispatch<SetStateAction<string>>;
  setcells: Dispatch<SetStateAction<string[]>>;
  cell: string;
  winningMessage: string;
  resetStyle: boolean;
};

const Cell = ({
  cells,
  go,
  setGo,
  setcells,
  cell,
  winningMessage,
  id,
  resetStyle,
}: cellprops) => {
  let notToken = !cells[id];
  //console.log("child componerent rerender");
  if (resetStyle) {
  }
  const handleChange = (role: string) => {
    //console.log(cells, "cells form cell comp");
    let celToCopy = [...cells];
    celToCopy[id] = role;
    setcells(celToCopy);
    role === "circle" ? setGo("cross") : setGo("circle");
  };
  const handleClick = (e: any) => {
    //console.log(winningMessage, "winM");
    if (winningMessage) return;
    // if(resetGame){

    // }
    if (notToken) {
      if (go === "circle") {
        //console.log(go, "omar");
        handleChange(go);
        e.target.style.backgroundColor = "#ff5252";
      } else if (go === "cross") {
        handleChange(go);
        e.target.style.backgroundColor = "#0885ff";
      }
    }
  };
  return (
    <div
      className={styles.cell}
      onClick={handleClick}
      style={
        cell === ""
          ? { backgroundColor: " #9df5bd" }
          : { backgroundColor: styles[`${cell}`] }
      }
    >
      <div className={styles[`${cell}`]}>
        {cell ? (cell === "circle" ? "o" : "x") : ""}
      </div>
    </div>
  );
};

export default Cell;
