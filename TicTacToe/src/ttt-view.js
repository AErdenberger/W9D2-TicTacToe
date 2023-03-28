
class View {
  constructor(game, el) {
    console.log("setting up the board!");
    this.game = game;
    this.el = el;
    this.setupBoard();
    this.bindEvents();
  }

  setupBoard() {
    console.log("beep boop setting up");
    const ul = document.createElement("ul");
    for (let index = 1; index < 10; index++) {
      let li = document.createElement("li");
      li.setAttribute("id", `${index}`);
      ul.append(li);
    };
    ul.setAttribute("id","grid")
    this.el.append(ul);
  }
  
  bindEvents() {
    let grid = document.getElementById('grid');
    console.log(this,"This in bindEvents")
    grid.addEventListener('click', this.handleClick);  
  };

  makeMove(square) {
    console.log(this,"This in makeMove")
    const allPos = [[0,0], [0,1],[0,2], [1,0], [1,1],[1,2], [2,0], [2,1],[2,2]];
    const currentPos = allPos[parseInt(square.id) - 1];
    let mark = this.game.currentPlayer; // either a 'x' or a 'o'
    this.game.playMove(currentPos);
    square.style.backgroundColor = "white";
    square.innerText = mark.toUpperCase();
    if(mark === "x"){
      square.style.color = "red";
     
    }else {
      square.style.color = "blue";
    }
    square.style.fontSize = "250px";
    square.style.textAlign = "center";
    const helper = ()=> {
      if(this.game.winner()){
        alert(`${mark.toUpperCase()} has won!`)

      }
    }
    return setTimeout(helper.bind(this),100);
  };

  handleClick = (e)=> {
    let that = this;
    console.log(e.target.tagName,"target");
    if (e.target.tagName === "LI"){
      console.log(this, "this in handleClick")
      this.makeMove(e.target);
    };

  };

  

}

module.exports = View;
