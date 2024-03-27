import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges{
  // at decorators
  @Input() myCounter:string;
  @Input() mySecondNumber : string;
  @Input() numbers:number[];

  public changesLog:string[]=[];
  
  ngOnChanges(changes:SimpleChanges):void{
    
    console.log("onChnages")
  }

  ngOnInit():void{
    console.log("oninit : executes 1st time when the componet is loaded");
    this.changesLog.push("OnInit")
  }

  ngDoCheck():void{
    
    console.log( this.numbers, "ngDoCheck: exectes on change of (primative(int , bool) & non-primative(array,object)) of parent element")
  }
}
