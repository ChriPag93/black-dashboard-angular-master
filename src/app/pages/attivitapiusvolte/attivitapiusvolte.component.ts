import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {ActivecampaignService} from '../../services/activecampaign.service';

@Component({
  selector: 'app-attivitapiusvolte',
  templateUrl: './attivitapiusvolte.component.html',
  styleUrls: ['./attivitapiusvolte.component.scss']
})
export class AttivitapiusvolteComponent implements OnInit, OnDestroy  {
  dtOptions: DataTables.Settings={};
  dtTrigger: Subject<any>=new Subject<any>();
  constructor(private activecampain:ActivecampaignService) { }
attivitapiusvolte=[];
  ngOnInit(): void {
    this.dtOptions= {
      paging:true,
      columns:[
        {
          data: 'attivita'
        },
        {
          data: 'contatti'
        },
      ]};
     this.activecampain.attivitapiusvolte().subscribe(
       result=>{
         this.attivitapiusvolte=result;
         console.log(result);
         this.ordinapernumero();
      });
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe()
  }
  ordinapernumero(){
    this.attivitapiusvolte.sort(
      (a,b)=>b.contatti - a.contatti
    );
  }
}
