import Paddle from "./paddle";

export default class InputHandler {
  constructor(paddle) {
    document.addEventListener("keydown", (event) => {
      //alert(event.keyCode);
      switch (event.keyCode) {
        case 37:
          //alert("move left");
          paddle.moveLeft();
          break;

        case 39:
          //alert("move right");
          paddle.moveRight();
          break;

        default:
          break;
      }
    });
  }
}
