import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild, viewChild } from '@angular/core';
import { ShadowDirective } from '../../directives/shadow.directive';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, ShadowDirective],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  name = "karthik";
  status = "single";
  salary = 4000;
  isBtnDisable = true;
  marriedStatus = "married";
  girlFiendStatus = "None";

  @Output() myEvent = new EventEmitter<{name:string,status:string,specie:string}>()

  users:any[] =[
    {name:"karthik",
    isSingle:true,
    salary:55000,
    isBtnDisable:true,
    marriedStatus:"Not married",
    girlFriendStatus:"Yes"
    },
    {name:"Soumya",
    isSingle:true,
    salary:535000,
    isBtnDisable:true,
    marriedStatus:"Not married",
    girlFriendStatus:"Yes"
    },
    {name:"kasai",
    isSingle:true,
    salary:5000,
    isBtnDisable:false,
    marriedStatus:"Not married",
    girlFriendStatus:"Yes"
    },
  ]


  @ViewChild("send") button? :ElementRef
  @ViewChild("destoryExample") profileDiv? : ElementRef

  constructor(){

    console.log("constructor ",this.button);
  }

  ngOnInit(){
    console.log("ngOnInit The component is ready to syn with tempelate", this)
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit ',this.button?.nativeElement);

  }

  ngOnDestroy(e:ElementRef){
    // this is called when ever the entire user-profile component is destroyed from view 
    console.log("ngOnDestroy =>user-profile destroyed", e )
  }



  onInputFocused(e:Event){
    console.log("user typing", e)
  }

  onInputBlurred(e:Event){
    const value = (e.target as HTMLInputElement).value;

    console.log("on blurred", e)
  }

  onInputGF(e:Event){
    const value = (e.target as HTMLInputElement).value;
    this.girlFiendStatus = value
  }

  onInputMarried(e:Event){
    const value = (e.target as HTMLInputElement).value;
    this.marriedStatus = value
  }
  sendData(){
    this.myEvent.emit({
      name:this.name,
      status:this.status,
      specie:"white tiger"
    })
  }

}
