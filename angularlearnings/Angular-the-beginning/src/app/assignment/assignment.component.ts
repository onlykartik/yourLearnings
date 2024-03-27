import { Component } from "@angular/core";

@Component({
    selector:"app-assignment",
    templateUrl:"./assignment.component.html",
    styleUrl:"./assignment.component.css"
})
export class AssignmentComponent{
    public username :string ="";
    public buttonDisability:boolean = true;
    constructor(){

    }

    onUsernameChange(event:any){
        console.log(event, event.length)
        if(event.length){
            this.buttonDisability = false;
        }else{
            this.buttonDisability =true
        }
    }

    onBtnClick(){
        this.username = ""
        this.buttonDisability = true;
    }
}