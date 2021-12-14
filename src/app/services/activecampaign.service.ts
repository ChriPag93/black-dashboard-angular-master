import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Contatto} from '../entities/contatto';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivecampaignService {
  token = "950f9d8b9c28330f70192f014674bca4d52ef5e8d3851dd7d4704e97e42cd0e1becd8606";
  urlbase = "http://192.168.1.66:8080/";

  constructor(public client: HttpClient) {
  }

  creaheader() {
    let header = new HttpHeaders({
      "Api-Token": this.token,
      "Accept": "application/json"
    });
    const httpoptions = {headers: header};
    return httpoptions;
  }

  creaheader2() {
    let header = new HttpHeaders({
      "Api-Token": this.token,
      "Accept": "text/plain"
    });
    const httpoptions = {headers: header};
    return httpoptions;
  }

  listaautomation() {
    return this.client.get<any>(this.urlbase + 'automazioni', this.creaheader());
  }

  blocksdiautomazione(id) {
    return this.client.get<any>(this.urlbase + 'automazioni/blocks/' + id, this.creaheader());
  }

  blockchildren(id) {
    return this.client.get<any>(this.urlbase + 'automazioni/blocks/children/' + id, this.creaheader());
  }

  goalsautomazione(id) {
    return this.client.get<any>(this.urlbase + 'automazioni/goals/' + id, this.creaheader());
  }

  goalblocks(id) {
    return this.client.get<any>(this.urlbase + 'automazioni/blocks/goal/' + id, this.creaheader());
  }

  listaemail() {
    return this.client.get<any>(this.urlbase + 'attivitaemail', this.creaheader());
  }

  contactdiemail(id) {
    return this.client.get<any>(this.urlbase + 'attivitaemail/contatti/' + id, this.creaheader());
  }

  dealdiemail(id) {
    return this.client.get<any>(this.urlbase + 'attivitaemail/deal/' + id, this.creaheader());
  }

  referencediemail(id) {
    return this.client.get<any>(this.urlbase + 'attivitaemail/reference/' + id, this.creaheader());
  }

  listaordini() {
    return this.client.get<any>(this.urlbase + 'ordini', this.creaheader());
  }

  customerdiordine(id) {
    return this.client.get<any>(this.urlbase + 'ordini/cliente/' + id, this.creaheader());
  }

  graficoordini() {
    return this.client.get<any>(this.urlbase + 'graficoordini', this.creaheader());
  }

  listacontacts(limit, offset) {
    return this.client.get<any>(this.urlbase + 'contattinuovo?limit=' + limit + '&offset=' + offset, this.creaheader());
  }

  luoghidicontatto(id) {
    return this.client.get<any>(this.urlbase + 'contacts/indirizzi/' + id, this.creaheader());
  }

  datigeneralicontatto(id) {
    return this.client.get<any>(this.urlbase + 'contacts/' + id, this.creaheader());
  }

  attivitacontatto(id) {
    return this.client.get<any>(this.urlbase + 'attivitac/' + id, this.creaheader());
  }
  chiamapost(url): Observable<any> {
    return this.client.post<any>(this.urlbase + 'chiamapost', url );
  }
}
