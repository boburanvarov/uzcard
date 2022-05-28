import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainsRoutingModule } from './mains-routing.module';
import { MainComponent } from './main/main.component';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {LoadingComponent} from "./loading/loading.component";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {FormsModule} from "@angular/forms";
import {NzSwitchModule} from "ng-zorro-antd/switch";


@NgModule({
  declarations: [
    MainComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    MainsRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    SweetAlert2Module,
    FormsModule,
    NzSwitchModule,
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainsModule { }
