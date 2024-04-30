import { Component } from '@angular/core';
import { Catalog } from '../../state/catalog/catalog.reduser';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { getCatalog } from '../../state/catalog/catalog.selectors';
import { LayoutComponent } from '../../../ui/components/layout/layout.component';
import { CardListContainer } from '../card-container/card-container.component';
import { CatalogButtonContainer } from "../catalog-button/catalog-button-container.component";

@Component({
  selector: 'layout-container',
  standalone: true,
  imports: [CommonModule, LayoutComponent, CardListContainer, CatalogButtonContainer],
  templateUrl: './layout-container.component.html',
  styleUrl: './layout-container.component.scss'
})
export class LayoutContainer {
  catalogList$ = this.store$.select(getCatalog);

  constructor(private store$: Store<Catalog>) {
  }
}
