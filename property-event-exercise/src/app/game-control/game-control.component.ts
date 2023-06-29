import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  interval :any;
  number:number = 0;
  @Output() numberEmit = new  EventEmitter<any>();

  constructor() { }
  ngOnInit(): void {
  }

  onStart(){
   this.interval= setInterval(()=>{
      this.numberEmit.emit(this.number+1);
      this.number++;
    },1000)
  }

  onPause(){
    clearInterval(this.interval);
  }

}
