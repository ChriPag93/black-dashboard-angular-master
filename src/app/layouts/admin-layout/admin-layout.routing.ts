import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import {UovoComponent} from '../../pages/uovo/uovo.component';
import {ImpostazioniaccountComponent} from '../../pages/impostazioniaccount/impostazioniaccount.component';
import {ListaautomazioniComponent} from '../../pages/listaautomazioni/listaautomazioni.component';
import {BlocksComponent} from '../../pages/blocks/blocks.component';
import {ContattiComponent} from '../../pages/contatti/contatti.component';
import {RiepilogoComponent} from '../../pages/riepilogo/riepilogo.component';
import {ScoreComponent} from '../../pages/score/score.component';
import {Utility1Component} from '../../pages/utility1/utility1.component';
import {RiepilogoordiniComponent} from '../../pages/riepilogoordini/riepilogoordini.component';
import {HomeComponent} from '../../pages/home/home.component';
import {ListacontattiattivitamancantiComponent} from '../../pages/listacontattiattivitamancanti/listacontattiattivitamancanti.component';
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "uovo", component: UovoComponent },
  { path: "home", component: HomeComponent },
  { path: "impostazioniaccount", component: ImpostazioniaccountComponent},
  { path: "listaautomazioni", component: ListaautomazioniComponent},
  { path: "blocks", component: BlocksComponent },
  { path: "contatti", component: ContattiComponent},
  { path: "score", component: ScoreComponent},
  { path: "riepilogo/:id", component: RiepilogoComponent},
  { path: "utility1", component: Utility1Component},
  { path: "listacontattiattivitamancanti", component: ListacontattiattivitamancantiComponent},
  { path: "riepilogoordini/:id", component: RiepilogoordiniComponent},
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  // { path: "rtl", component: RtlComponent }
];
