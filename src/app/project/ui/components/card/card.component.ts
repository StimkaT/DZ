import { Component, Input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { IProduct } from '../../../web/state/catalog/catalog.reduser';

@Component({
  selector: 'card',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  // @Input() cardList: IProduct[]|null = [];
}
