import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskcomponentComponent } from './taskcomponent/taskcomponent.component';
import { UsercomponentComponent } from './usercomponent/usercomponent.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TaskcomponentComponent,UsercomponentComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task Management';
}
