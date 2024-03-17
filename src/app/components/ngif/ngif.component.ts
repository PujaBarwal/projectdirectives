import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrl: './ngif.component.css'
})
export class NgifComponent {
  active:boolean=false;
  count:number=3;

  changeState(){
    this.active=!this.active;
  }

}
