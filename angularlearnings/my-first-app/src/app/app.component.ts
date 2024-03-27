import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private number:number = 9848990126;
  secondNumber: number = 10;
  numbers: number[] = [0];

  get counter():number{
    return this.number;
  }

  set counter(value:number){
    this.number = value;
  }

  increment(){
    this.counter++
  }

  decrement(){
    this.counter--
  }

  add(){
    /* Just upading the array never changes the memory location as so OnChnage hook in child compoennt will notice as a saviour the OnDoCheck hook gets executes */
    this.numbers.push( this.numbers[this.numbers.length-1] + 1)

    /* By cloning the array the childs class OnChanges hook will rerun as the parent component is updated */
   // this.numbers = [...this.numbers, (this.numbers.length-1)+1 ]
  }
}
