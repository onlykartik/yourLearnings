import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus:string = "No server was created!";
  serverName ='';

  constructor(){
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created! with the Name: "+ this.serverName;
  }
  onUpdateServerName(event:any){
    this.serverName = event.target.value;
  }
}
