import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.css']
})
export class EnglishComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  operaciones = [
    {
      first: '1',
      operation: '+',
      second: '2'
    },
    {
      first: '1',
      operation: '+',
      second: '3'
    },
    {
      first: '1',
      operation: '+',
      second: '4'
    },
    {
      first: '1',
      operation: '+',
      second: '5'
    }
  ];

  resultados = [
    {
      name: 'Android',
      value: '3'
    },
    {
      name: 'MongoDB',
      value: '4'
    },
    {
      name: 'ARKit',
      value: '7'
    },
    {
      name: 'React',
      value: '8'
    }
  ];


  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      
    }
  }
}
