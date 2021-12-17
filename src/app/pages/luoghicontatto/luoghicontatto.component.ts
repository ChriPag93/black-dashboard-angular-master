import { Component, OnInit } from '@angular/core';
import {ActivecampaignService} from '../../services/activecampaign.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-luoghicontatto',
  templateUrl: './luoghicontatto.component.html',
  styleUrls: ['./luoghicontatto.component.scss']
})
export class LuoghicontattoComponent implements OnInit {

  constructor(private activecampain:ActivecampaignService, public route: ActivatedRoute) { }

  contattocorrente;
  listaluoghi = [];
  ngOnInit(): void {
    const parametri =this.route.snapshot.paramMap;
    this.contattocorrente=parametri.get("id");

    this.activecampain.luoghidicontatto(this.contattocorrente).subscribe(
      result=>{
        this.listaluoghi = result;
      }
    );
  }

}
