import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CardComponent} from "./card/card.component";
import {MainComponent} from "../mains/main/main.component";
import {CardPanComponent} from "./card-pan/card-pan.component";

const routes: Routes = [
      {
        path: '', component: MainComponent,
        children: [
          {
            path: '',
            component: CardComponent
          },
          {
            path: 'cardsPan',
            component: CardPanComponent
          },
        ]
      }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule {
}
