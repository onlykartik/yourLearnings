import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HeaderComponent } from './components/header/header.component';
import { PipesExampleComponent } from './components/pipes-example/pipes-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserProfileComponent,HeaderComponent, PipesExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-ng-app';

  recivedData(event:{name:string,status:string,specie:string}){
    console.log( event.specie + " from child compoenent " + this.title)
  }
}
