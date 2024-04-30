import {Component, Input} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {ICatalog} from "../../state/catalog/catalog.reduser";
import {setProductsList} from "../../state/products/products.actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'catalog-button-container',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './catalog-button-container.component.html',
  styleUrl: './catalog-button-container.component.scss'
})
export class CatalogButtonContainer {
  @Input() catalogList: ICatalog[]|null = [];

  constructor(private readonly store: Store) {}

  buttonClick(event: number){
    this.store.dispatch(setProductsList({productList: event}));
  }
}
