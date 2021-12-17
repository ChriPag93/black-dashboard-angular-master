import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivecampaignService} from '../../services/activecampaign.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-utility1',
  templateUrl: './utility1.component.html',
  styleUrls: ['./utility1.component.scss']
})
export class Utility1Component implements OnInit, OnDestroy {
listacontattichehannocomprato=[];
  dtOptions: DataTables.Settings={};
  dtTrigger: Subject<any>=new Subject<any>();
  constructor(private activecampain:ActivecampaignService, public route: ActivatedRoute, private router:Router) {
  }

  ngOnInit(): void {
    this.dtOptions= {
      paging:true,
      columns:[
        {
          data: "id"
        },
        {
          data: "customerid"
        },
        {
          data:"firstName"
        },
        {
          data:"lastName"
        },
        {
          data:"email"
        },
      ]};
    this.chiamapostgenerale("https://sidi.api-us1.com/api/3/ecomOrders?limit=100");
  }
  chiamapostgenerale(url) {
    this.activecampain.chiamapost(url).subscribe(
      result => {
        console.log("siamo qui");
        console.log(result);
        for(let i =0; i<100;i++){
          let risattuale = result.ecomOrders[i];
          if(risattuale !== undefined && risattuale !== null) {
            let urlsubscriber = risattuale.links.subscriberConversions;
            this.activecampain.chiamapost(urlsubscriber).subscribe(
              resultsubscriber => {
                let contactid = resultsubscriber.contactConversions[0].contact;
                this.activecampain.chiamapost('https://sidi.api-us1.com/api/3/contacts/' + contactid).subscribe(
                  resultcontact => {
                    resultcontact.customerid = risattuale.customerid;
                    this.listacontattichehannocomprato.push(resultcontact);
                  }
                )
              }
            )
          }
        }
      }
    )
  }
  vaiariepilogo(contatto){
    const id = contatto.contact.id;
    this.router.navigate(['/riepilogoordini' , id])
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe()
  }
}
