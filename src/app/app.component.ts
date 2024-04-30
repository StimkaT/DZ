import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutContainer } from './project/web/container/layout-container/layout-container.component';
import { NavContainerComponent } from './project/web/container/nav-conteiner.component/nav-container.component';
import { CardListContainer } from './project/web/container/card-container/card-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LayoutContainer,
    NavContainerComponent,
    CardListContainer,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dz';

}
