import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'property-event-exercise';
  numbersEven : number[] = [];
  numbersOdd: number[] = [];

  listeningNumber(number:any){
    if(number % 2 === 0){
      this.numbersEven.push(number);
    }else{
      this.numbersOdd.push(number);
    }
  }


}
