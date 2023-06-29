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
  serverName:string = "Two Way Binding";
  serverCreated =false;
  servers = ['Testserver','TestServer 2'];

  constructor(){
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);

    this.serverStatus = Math.random() > 0.5? 'online' : 'offline'
  }

  getServerStatus(){
    return this.serverStatus;
  }

  turnOnServer(){
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverStatus = "online";
  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }

  getColor(){
    return this.serverStatus ==='online' ? 'green':'red';
  }
}
