import { Component, OnInit } from '@angular/core';
import {ActivecampaignService} from '../../services/activecampaign.service';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.scss']
})
export class RevenueComponent implements OnInit {
revenue;
  constructor(private activecampain:ActivecampaignService) { }

  ngOnInit(): void {
    this.activecampain.revenue().subscribe(
      result=>{
        console.log(result);
        this.revenue=result;
      });
  }

}
