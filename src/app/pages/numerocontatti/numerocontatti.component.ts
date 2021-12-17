import { Component, OnInit } from '@angular/core';
import {ActivecampaignService} from '../../services/activecampaign.service';

@Component({
  selector: 'app-numerocontatti',
  templateUrl: './numerocontatti.component.html',
  styleUrls: ['./numerocontatti.component.scss']
})
export class NumerocontattiComponent implements OnInit {
numerocontatti;
  constructor(private activecampain:ActivecampaignService) { }

  ngOnInit(): void {
    this.activecampain.numerocontatti().subscribe(
      result=>{
        this.numerocontatti=result;
      });
  }
}
