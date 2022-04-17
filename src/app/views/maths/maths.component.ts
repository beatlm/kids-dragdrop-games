import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-maths',
  templateUrl: './maths.component.html',
  styleUrls: ['./maths.component.css']
})
export class MathsComponent implements OnInit {
  ngOnInit(): void {
  }


  title = 'kids games';
  website = 'https://samorgill.com';

  todos = [
    {
      name: 'Angular',
      category: 'Web Development'
    },
    {
      name: 'Flexbox',
      category: 'Web Development'
    },
    {
      name: 'iOS',
      category: 'App Development'
    },
    {
      name: 'Java',
      category: 'Software development'
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

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }

}
