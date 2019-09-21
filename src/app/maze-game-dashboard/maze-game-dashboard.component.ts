import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Square } from "../utils/Square";
import { randomNo } from "../utils/utility";
@Component({
  selector: 'app-maze-game-dashboard',
  templateUrl: './maze-game-dashboard.component.html',
  styleUrls: ['./maze-game-dashboard.component.css']
})
export class MazeGameDashboardComponent implements OnInit {

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    //up
    if (event.key == 'w') {
      this.square.moveUp()
    }
    //down
    else if (event.key == 's') {
      this.square.moveDown()
    }
    //left
    else if (event.key == 'a') {
      this.square.moveLeft()

    }
    //right
    else if (event.key == 'd') {
      this.square.moveRight();
    }
  }

  myGamePiece: any;
  square: any;
  @ViewChild('canvas')
  canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D
  constructor() { }
  squares: Square[] = [];
  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(100, 150, 10, 10);
    for (var i = 0; i < 10; i++) {
      this.randomObstacle();
    }
    this.square = new Square(this.ctx);
    this.square.moveUp();
  }

  randomObstacle() {
    let x = randomNo(599);
    let y = randomNo(299);
    this.ctx.fillRect(x, y, 10, 10);
  }


}
