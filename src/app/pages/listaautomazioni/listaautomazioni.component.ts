import { Component, OnInit } from '@angular/core';
import {ActivecampaignService} from '../../services/activecampaign.service';

@Component({
  selector: 'app-listaautomazioni',
  templateUrl: './listaautomazioni.component.html',
  styleUrls: ['./listaautomazioni.component.scss']
})
export class ListaautomazioniComponent implements OnInit {

listaautomazioni=[];
  constructor(private activecampain:ActivecampaignService) { }

  ngOnInit(): void {
      this.activecampain.listaautomation().subscribe(result=>
      {
        this.listaautomazioni=result.automations;
        console.log(result);
      });
  }

}
