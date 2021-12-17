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
import { ScoreComponent } from './pages/score/score.component';
import { ProfilocontattoComponent } from './pages/profilocontatto/profilocontatto.component';
import { LuoghicontattoComponent } from './pages/luoghicontatto/luoghicontatto.component';
import { DatigeneralicontattoComponent } from './pages/datigeneralicontatto/datigeneralicontatto.component';
import { AttivitacontattoComponent } from './pages/attivitacontatto/attivitacontatto.component';
import { GraficoordiniComponent } from './pages/graficoordini/graficoordini.component';
import { GraficoautomazioniComponent } from './pages/graficoautomazioni/graficoautomazioni.component';
import { GraficoemailComponent } from './pages/graficoemail/graficoemail.component';
import { GraficolistaordiniComponent } from './pages/graficolistaordini/graficolistaordini.component';
import { Utility1Component } from './pages/utility1/utility1.component';
import { RiepilogoordiniComponent } from './pages/riepilogoordini/riepilogoordini.component';
import { HomeComponent } from './pages/home/home.component';
import { NumeroacquistiComponent } from './pages/numeroacquisti/numeroacquisti.component';
import { NumerocontattiComponent } from './pages/numerocontatti/numerocontatti.component';
import { RevenueComponent } from './pages/revenue/revenue.component';
import { AttivitapiusvolteComponent } from './pages/attivitapiusvolte/attivitapiusvolte.component';
import { TabellasuggerimentiComponent } from './pages/tabellasuggerimenti/tabellasuggerimenti.component';
import { ListacontattiattivitamancantiComponent } from './pages/listacontattiattivitamancanti/listacontattiattivitamancanti.component';

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
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, UovoComponent, ImpostazioniaccountComponent, ListaautomazioniComponent, BlocksComponent, ContattiComponent, RiepilogoComponent, ScoreComponent, ProfilocontattoComponent, LuoghicontattoComponent, DatigeneralicontattoComponent, AttivitacontattoComponent, GraficoordiniComponent, GraficoautomazioniComponent, GraficoemailComponent, GraficolistaordiniComponent, Utility1Component, RiepilogoordiniComponent, HomeComponent, NumeroacquistiComponent, NumerocontattiComponent, RevenueComponent, AttivitapiusvolteComponent, TabellasuggerimentiComponent, ListacontattiattivitamancantiComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
