import { Component, OnInit } from '@angular/core';
import {ActivecampaignService} from '../../services/activecampaign.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profilocontatto',
  templateUrl: './profilocontatto.component.html',
  styleUrls: ['./profilocontatto.component.scss']
})
export class ProfilocontattoComponent implements OnInit {
  contattocorrente;
  datigeneralicontatto;
  constructor(private activecampain:ActivecampaignService, public route: ActivatedRoute) { }

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
