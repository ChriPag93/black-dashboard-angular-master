import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { UovoComponent } from './pages/uovo/uovo.component';
import { ImpostazioniaccountComponent } from './pages/impostazioniaccount/impostazioniaccount.component';
import { ListaautomazioniComponent } from './pages/listaautomazioni/listaautomazioni.component';
import { BlocksComponent } from './pages/blocks/blocks.component';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { RiepilogoComponent } from './pages/riepilogo/riepilogo.component';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    DataTablesModule,
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, UovoComponent, ImpostazioniaccountComponent, ListaautomazioniComponent, BlocksComponent, ContattiComponent, RiepilogoComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
