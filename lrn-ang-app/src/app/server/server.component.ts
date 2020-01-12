import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverName = 'Test Server'
  serverPID = 11;
  serverStatus = 'offline'
  serverStatusFlag = false;
  toggleButtonDisabled = true;

  constructor() { 
    setTimeout(() => {
      this.toggleButtonDisabled = false;
    }, 5000);
  }

  ngOnInit() {
  }

  toggoleServerStatus() {
    this.serverStatusFlag = !this.serverStatusFlag;
    if(this.serverStatusFlag) {
      this.serverStatus = 'online';
    } else {
      this.serverStatus = 'offline';
    }
  }

}
