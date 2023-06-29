import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  showParagraph: boolean = false;

  countClicks = [];
  count = 0;

  onClickButton(){
    this.showParagraph = !this.showParagraph;
    this.countClicks.push(new Date());
  }

}
