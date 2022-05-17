export class QuizModel {
  first: string;
  second: string;
  operation: string;
  result: string;
  user:string;
  validation:boolean;

  constructor(first:string, operation:string, second:string,  result:string){
    this.operation=operation;
    this.first = first;
    this.second = second;
    this.result = result;
    this.validation=null;
    this.user="";
  }
}

