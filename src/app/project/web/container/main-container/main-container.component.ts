import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Catalog } from '../../state/catalog/catalog.reduser';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { getCatalog } from '../../state/catalog/catalog.selector';
import { CardComponent } from '../../../ui/components/card/card.component';

@Component({
  selector: 'main-container',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, CommonModule, CardComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss'
})
export class MainContainerComponent {

  productList$ = this.store$.select(getCatalog);

  showFiller = false;

  constructor(private store$: Store<Catalog>) {
  }
}
