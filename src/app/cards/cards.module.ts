import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CardsRoutingModule} from './cards-routing.module';
import {CardComponent} from "./card/card.component";

import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {ReactiveFormsModule} from "@angular/forms";
import {LoadingComponent} from "../mains/loading/loading.component";
import {MainsModule} from "../mains/mains.module";
import {NzNotificationService} from "ng-zorro-antd/notification";
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CardPanComponent } from './card-pan/card-pan.component';
import {NzGridModule} from "ng-zorro-antd/grid";

@NgModule({
  declarations: [
    CardComponent,
    CardPanComponent,
  ],
    imports: [
        CommonModule,
        CardsRoutingModule,
        SweetAlert2Module,
        ReactiveFormsModule,
        MainsModule,
        NzInputModule,
        NzButtonModule,
        NzMenuModule,
        NzGridModule
    ],

  providers: [
    NzNotificationService
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class CardsModule {
}
