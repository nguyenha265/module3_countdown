import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
 private setTheTime: number = 0;
 private runTime: number = 0;
 private setInterval;

  onchange(value) {
    this.setTheTime = value;

  }

  run() {
    if(this.runTime <1){
      this.stop()
    }else {
      this.runTime = this.runTime - 1;
    }
  }

  start() {
    if(this.setTheTime <0){
      this.setTheTime = 0;
    }else {
      this.runTime = this.setTheTime;
      this.setInterval = setInterval(() => this.run(), 1000)
    }
  }

  stop() {
    clearInterval(this.setInterval)
  }
  reset(){
  this.setTheTime = 0;
  this.runTime = 0;
  this.stop()
  }

  constructor() {
  }

  ngOnInit() {
  }

}
