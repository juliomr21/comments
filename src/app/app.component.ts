import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as data from '../assets/users.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  title = 'readJson';

  public contentfile:string='';

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    
  }

  public firstWay():void{
    console.log(data);    
  }

  public secondWay():void{
    this.httpClient.get("assets/users.json").subscribe(data =>{
      console.log(data);      
    })
  }
}