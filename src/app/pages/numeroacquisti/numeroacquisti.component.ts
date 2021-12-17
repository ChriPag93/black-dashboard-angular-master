import { Component, OnInit } from '@angular/core';
import {ActivecampaignService} from '../../services/activecampaign.service';

@Component({
  selector: 'app-numeroacquisti',
  templateUrl: './numeroacquisti.component.html',
  styleUrls: ['./numeroacquisti.component.scss']
})
export class NumeroacquistiComponent implements OnInit {
numeroacquisti;
  constructor(private activecampain:ActivecampaignService) { }

  ngOnInit(): void {
    this.activecampain.numeroacquisti().subscribe(
      result=>{
      this.numeroacquisti=result;
  });
  }

}
