import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/uovo",
    title: "Uovo",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-bar-32",
    class: ""
  },
  {
    path: "/impostazioniaccount",
    title: "Impostazioni account",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/listaautomazioni",
    title: "Lista automazioni",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-chart-bar-32",
    class: ""
  },
  {
    path: "/contatti",
    title: "Contatti",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-chart-bar-32",
    class: ""
  },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
