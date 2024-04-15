import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavContainerComponent } from './project/web/container/nav-conteiner.component/nav-container.component';
import { MainContainerComponent } from './project/web/container/main-container/main-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavContainerComponent,
    MainContainerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dz';
}
