import { Component, Input } from '@angular/core';
import { IProduct } from '../../../web/state/products/products.reduser';

@Component({
  selector: 'card-component',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() card!: IProduct;
}
