import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HeaderComponent } from './components/header/header.component';
import { PipesExampleComponent } from './components/pipes-example/pipes-example.component';
import { JokesComponent } from './components/jokes/jokes.component';
import { AComponent } from './components/a/a.component';
import { B1Component } from './components/b1/b1.component';
import { B2Component } from './components/b2/b2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserProfileComponent,HeaderComponent, PipesExampleComponent, JokesComponent, AComponent, B1Component, B2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-ng-app';

  recivedData(event:{name:string,status:string,specie:string}){
    console.log( event.specie + " from child compoenent " + this.title)
  }
}
