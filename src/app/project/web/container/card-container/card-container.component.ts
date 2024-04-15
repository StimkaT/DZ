import { Component, Output } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'card',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.scss'
})
export class CardComponent {
  // @Output()
}
