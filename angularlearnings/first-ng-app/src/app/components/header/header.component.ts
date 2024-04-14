import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() title:string = "";
  @Input({alias:"user", transform:(value:string)=> value+"google.com"}) userName = ""

  login:boolean = true;

  setPageTiele(title:string){
    this.title = title;
  }

  getPageTitle(){
    return this.title;
  }

  setInOutstatus(){
    this.login = !this.login
  }

}
