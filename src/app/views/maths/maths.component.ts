import { QuizModel } from './../../core/quiz.model';
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-maths',
  templateUrl: './maths.component.html',
  styleUrls: ['./maths.component.css']
})
export class MathsComponent implements OnInit {
  public initialQuiz: QuizModel[];
  title = 'kids games';

  ngOnInit(): void {
this.initialQuiz=[new  QuizModel("2", "+", "8", "10"), new QuizModel("3","-","1","2")];
console.log(this.initialQuiz);
  }


public validate(){
  this.initialQuiz[0].validation=true;
  this.initialQuiz[1].validation=false;
console.log(this.initialQuiz);
}

 

}
