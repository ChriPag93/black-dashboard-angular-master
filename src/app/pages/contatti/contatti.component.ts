import { Component, OnInit } from '@angular/core';
import {ActivecampaignService} from '../../services/activecampaign.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.scss']
})
export class ContattiComponent implements OnInit {
listacontatti=[];
dtOptions: DataTables.Settings={};

  constructor(private activecampain:ActivecampaignService, private router:Router) { }

  ngOnInit(): void {
    // @ts-ignore
    this.dtOptions={
      pagingType:"full_numbers",
      serverSide:true,
      processing:false,
      pageLength:10,
      paging:true,
      ajax:(parametri:any,callback)=>{
        console.log("siamo qui");
        console.log(parametri);
        this.activecampain.listacontacts(parametri.length,parametri.start).subscribe(result=>
        {
          this.listacontatti=result;
          console.log(result);
          callback({recordsTotal:11706, recordsFiltered:11706});
        });
      },
      columns:[
    {
      data:"id"
    },
    {
      data:"nome"
    },
    {
      data:"cognome"
    },
    {
      data:"email"
    },
    ]};
  }
  vaiariepilogo(contatto){
    const id = contatto.id;
    this.router.navigate(['/riepilogo' , id])
  }
}
