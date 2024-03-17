import { Component } from '@angular/core';
import { movie } from '../../models/movie';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.css'
})
export class NgforComponent {
  city=["Pune","Mumbai","SambhajiNagar","Delhi"];

  movies:movie[]=[
    {title:'Animal',director:'xyz',cast:'ranbeer',releasedate:'2-nov-2023'},
    {title:'DDLJ',director:'ABC',cast:'sharukh',releasedate:'25-mar-2000'},
    {title:'Heropanti',director:'PQR',cast:'Tiger Shroff',releasedate:'1-jan-2023'}
  ]

}
