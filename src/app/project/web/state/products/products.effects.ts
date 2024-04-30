import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { setProductsList } from './products.actions';
import { getActiveProductsList } from "./products.selectors";

@Injectable()
export class ProductsEffects {

  setActiveProductList$ = createEffect(() =>
    this.actions$.pipe(
      ofType( setProductsList ),
      concatLatestFrom(() => this.store.select( getActiveProductsList ),
      ),
      tap(([numberList, activeList]) => {
        console.log ('Пришло', activeList)
      })
    ), {dispatch: false}
  );



  constructor(
    private readonly store: Store,
    private actions$: Actions,
  ) {}

}
