import { Component, OnInit } from '@angular/core';
import {ActivecampaignService} from '../../services/activecampaign.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-riepilogo',
  templateUrl: './riepilogo.component.html',
  styleUrls: ['./riepilogo.component.scss']
})
export class RiepilogoComponent implements OnInit {

  contattocorrente;

  listaluoghi = [];
  datigeneralicontatto;
  attivitacontatto;
  constructor(private activecampain:ActivecampaignService, public route: ActivatedRoute) { }


  ngOnInit(): void {
    const parametri =this.route.snapshot.paramMap;
    this.contattocorrente=parametri.get("id");

    this.activecampain.luoghidicontatto(this.contattocorrente).subscribe(
      result=>{
        this.listaluoghi = result;
      }
    );
    this.activecampain.datigeneralicontatto(this.contattocorrente).subscribe(
      result=>{
        this.datigeneralicontatto=result;
      }
    );
    this.activecampain.attivitacontatto(this.contattocorrente).subscribe(
      result=>{
        this.attivitacontatto=result;
        this.ordinaperdata();
      }
    )
  }
ordinaperdata(){
    this.attivitacontatto.sort(
      (a,b)=>new Date (b.tstamp).getTime()-new Date (a.tstamp).getTime()
    );
}
}
