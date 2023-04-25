import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId:number = 10;
  serverStatus:string = "offline";
  allowNewServer: boolean = false;
  serverName:string = "Two Way Binding"
  constructor(){
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
  }

  getServerStatus(){
    return this.serverStatus;
  }

  turnOnServer(){
    this.serverStatus = "online";
  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }
}
