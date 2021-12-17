import { Component, OnInit } from '@angular/core';
import {ActivecampaignService} from '../../services/activecampaign.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-attivitacontatto',
  templateUrl: './attivitacontatto.component.html',
  styleUrls: ['./attivitacontatto.component.scss']
})
export class AttivitacontattoComponent implements OnInit {

  constructor(private activecampain:ActivecampaignService, public route: ActivatedRoute) { }
  attivitacontatto;
  contattocorrente;
  cardattivita=0;
  datiattivita;
  datiattivitalink;
  ngOnInit(): void {
    const parametri =this.route.snapshot.paramMap;
    this.contattocorrente=parametri.get("id");

    this.activecampain.attivitacontatto(this.contattocorrente).subscribe(
      result=>{
        console.log(result);
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
  chiamapostgenerale(url){
    this.activecampain.chiamapost(url).subscribe(
      result=>{
        console.log("siamo qui");
        console.log(result);

        if(result.log!==null && result.log!==undefined){
          this.activecampain.chiamapost(result.log.links.message).subscribe(
            resultlog=>{
              console.log(resultlog);
              this.cardattivita=1;
              this.datiattivita=resultlog.message;

            }
          )
        }
        if(result.linkDatum!==null && result.linkDatum!==undefined) {
          this.activecampain.chiamapost(result.linkDatum.links.message).subscribe(
            resultlinkdatum => {
              console.log(resultlinkdatum);
              this.cardattivita=2;
              this.datiattivita=resultlinkdatum.message;
            }
          );
          this.activecampain.chiamapost(result.linkDatum.links.link).subscribe(
            resultlinkdatum => {
              console.log(resultlinkdatum);
              this.datiattivitalink=resultlinkdatum.link;
            }
          );
        }
        if(result.trackingLog!==null && result.trackingLog!==undefined){
          this.cardattivita=3;
          this.datiattivita=result.trackingLog;
        }
      }
    )
  }

}
