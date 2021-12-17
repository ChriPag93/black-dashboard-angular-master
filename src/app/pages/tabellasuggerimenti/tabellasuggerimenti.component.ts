import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivecampaignService} from '../../services/activecampaign.service';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tabellasuggerimenti',
  templateUrl: './tabellasuggerimenti.component.html',
  styleUrls: ['./tabellasuggerimenti.component.scss']
})
export class TabellasuggerimentiComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings={};
  dtTrigger: Subject<any>=new Subject<any>();
  constructor(private activecampain:ActivecampaignService, private router:Router) { }
  suggerimentoattivita=[];
  ngOnInit(): void {
    this.dtOptions= {
      paging:true,
      columns:[
        {
          data: "attivita"
        },
        {
          data: "contatti"
        },
      ]};
    this.activecampain.suggerimentoattivita().subscribe(
      result=>{
        this.suggerimentoattivita=result;
      });
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe()
  }
  vaiariepilogo(contatto){
    const id = contatto.attivita;
    this.router.navigate(['/listacontattiattivitamancanti' , id])
  }
}
