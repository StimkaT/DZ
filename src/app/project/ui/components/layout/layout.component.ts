import { Component, Input} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ICatalog } from '../../../web/state/catalog/catalog.reduser';

@Component({
  selector: 'layout',
  standalone: true,
  imports: [MatButtonModule, MatSidenavModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
