import React from 'react';
import Button from './../components/button';
import Paper from './../components/paper';
import Rock from './../components/rock';
import Scissors from './../components/scissors';

export const getHousePick = (elemArr) => {
     const selected = elemArr[Math.floor(Math.random()*elemArr.length)];
     return selected;
} 

export const setWinner = (a, b) => {
      if (a.name === b.name) {
            a.verdict = "Draw"
      } else if ((a.name === "paper" && b.name === "rock") || 
             (a.name === "rock" && b.name === "scissors") || 
             (a.name === "scissors" && b.name === "paper")) {
                   a.winner = true;
                   a.verdict = "You win";
                   a.score++;
      } else {
            b.winner = true;
            a.verdict = "You Loose";
            a.score--;
      }

      localStorage.setItem("score", a.score);
}

export const renderChoice = (choice) => {
      let cType;
      if(choice === "rock") {
             cType = <Rock />
      } else if (choice === "paper") {
             cType = <Paper />
      } else cType = <Scissors />

      return cType;
}

export const isWinner  = (obj) => {
      return obj.winner ? "winner-badge p-relative" : "p-relative";
}

export const renderButton = (label, classes, onClick) => {
      return (
        <Button 
              label={label}
              classes={classes}
              onClick={onClick}
        />
      )
}