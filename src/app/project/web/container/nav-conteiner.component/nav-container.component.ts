import { Component } from '@angular/core';
import { NavComponent } from '../../../ui/components/nav/nav.component';


@Component({
  selector: 'nav-container',
  standalone: true,
  imports: [
    NavComponent,
  ],
  templateUrl: './nav-container.component.html',
  styleUrl: './nav-container.component.scss'
})
export class NavContainerComponent {

}
