import { Component, Input, Output } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Store } from '@ngrx/store';
import { Products } from '../../state/products/products.reduser';
import { getActiveProductsList } from '../../state/products/products.selectors';
import { CardComponent } from '../../../ui/components/card/card.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'cardListContainer',
  standalone: true,
  imports: [MatGridListModule, CardComponent, AsyncPipe],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.scss'
})
export class CardListContainer {

  products$ = this.store$.select(getActiveProductsList);

  constructor(private store$: Store<Products>) {
  }
}
