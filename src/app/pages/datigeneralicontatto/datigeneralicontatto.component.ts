import { Component, OnInit } from '@angular/core';
import {ActivecampaignService} from '../../services/activecampaign.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-datigeneralicontatto',
  templateUrl: './datigeneralicontatto.component.html',
  styleUrls: ['./datigeneralicontatto.component.scss']
})
export class DatigeneralicontattoComponent implements OnInit {

  constructor(private activecampain:ActivecampaignService, public route: ActivatedRoute) { }
  contattocorrente;
  datigeneralicontatto;
  ngOnInit(): void {
    const parametri =this.route.snapshot.paramMap;
    this.contattocorrente=parametri.get("id");

    this.activecampain.datigeneralicontatto(this.contattocorrente).subscribe(
      result=>{
        this.datigeneralicontatto=result;
      }
    );
  }

}
