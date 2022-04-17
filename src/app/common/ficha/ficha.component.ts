import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent implements OnInit {
  public first: string;
  public operation: string;
  public second: string; 

  constructor() { 
    
  }

  ngOnInit() {
    this.first='1';
    this.operation='+';
    this.second='2';
  }

}
