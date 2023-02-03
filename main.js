document.addEventListener("DOMContentLoaded", function() {
    populateBoard(16);
  });
  
  let color = "black";
  
  function populateBoard(size) {
    let board = document.querySelector(".board");
  
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
    let amount = size * size;
  
    for (let i = 0; i < amount; i++) {
      let square = document.createElement("divx");
      square.style.backgroundColor = "white";
      square.addEventListener("mouseover", function() {
        chooseColor(square);
      });
      board.insertAdjacentElement("beforeend", square);
    }
  }
  
  function changeSize(input) {
    if (input >= 2 && input <= 100) {
      populateBoard(input);
    } else {
      console.log("too many squares");
    }
  }
  
  function setColor(colorChoice) {
    color = colorChoice;
  }
  
  function chooseColor(square) {
    square.style.backgroundColor = color;
  }
  
  function resetBoard(){
    let divs=document.querySelectorAll("divx")
    divs.forEach((div)=>div.style.backgroundColor="white");
  }
  
  
  