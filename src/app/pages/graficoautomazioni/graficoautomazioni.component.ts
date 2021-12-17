import { Component, OnInit } from '@angular/core';
import {ColorService} from '../../services/color.service';
import Chart from 'chart.js';
import {ActivecampaignService} from '../../services/activecampaign.service';
const gradientChartOptionsConfigurationWithTooltipRed: any = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },

  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest"
  },
  responsive: true,
  scales: {
    yAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.0)',
        zeroLineColor: "transparent",
      },
      ticks: {
        suggestedMin: 60,
        suggestedMax: 125,
        padding: 20,
        fontColor: "#9a9a9a"
      }
    }],

    xAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(233,32,16,0.1)',
        zeroLineColor: "transparent",
      },
      ticks: {
        padding: 20,
        fontColor: "#9a9a9a"
      }
    }]
  }
};

const gradientChartOptionsConfigurationWithTooltipBlue: any = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },

  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest"
  },
  responsive: true,
  scales: {
    yAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.0)',
        zeroLineColor: "transparent",
      },
      ticks: {
        suggestedMin: 60,
        suggestedMax: 125,
        padding: 20,
        fontColor: "#ffffff"
      }
    }],
    xAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.1)',
        zeroLineColor: "transparent",
      },
      ticks: {
        padding: 20,
        fontColor: "#ffffff"
      }
    }]
  }
};
const gradientChartOptionsConfigurationWithTooltipGreen: any = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },

  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest"
  },
  responsive: true,
  scales: {
    yAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.0)',
        zeroLineColor: "transparent",
      },
      ticks: {
        suggestedMin: 60,
        suggestedMax: 125,
        padding: 20,
        fontColor: "#ffffff"
      }
    }],
    xAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.1)',
        zeroLineColor: "transparent",
      },
      ticks: {
        padding: 20,
        fontColor: "#ffffff"
      }
    }]
  }
};
const gradientChartOptionsConfigurationWithTooltipPrimary: any = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },

  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest"
  },
  responsive: true,
  scales: {
    yAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.0)',
        zeroLineColor: "transparent",
      },
      ticks: {
        suggestedMin: 60,
        suggestedMax: 125,
        padding: 20,
        fontColor: "#ffffff"
      }
    }],
    xAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.1)',
        zeroLineColor: "transparent",
      },
      ticks: {
        padding: 20,
        fontColor: "#ffffff"
      }
    }]
  }
};

@Component({
  selector: 'app-graficoautomazioni',
  templateUrl: './graficoautomazioni.component.html',
  styleUrls: ['./graficoautomazioni.component.scss']
})
export class GraficoautomazioniComponent implements OnInit {
  public canvas: any;
  public ctx;

  colore = "red";
  idprova = 0;
  idblocco = 0;
  numeroautomazionedacercare=0;

  constructor(private coloreService: ColorService, private activecampain: ActivecampaignService) {
  }

  ngOnInit(): void {
    this.coloreService.coloregenerale.subscribe(
      result => {
        this.coloragrafici(result);
        this.colore = result;
        console.log(this.colore);
      }
    );
    this.colore = "red";
    this.coloragrafici("red");
  }

  coloragrafici(colore) {
    let coloreusato;
    var gradientStroke;
    var bordercolor;
    var pointBackgroundColor;
    var pointHoverBackgroundColor;

    if (colore === 'red') {
      coloreusato = gradientChartOptionsConfigurationWithTooltipRed;
      gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
      gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
      gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); //red colors

      bordercolor = '#ec250d';
      pointBackgroundColor = '#ec250d';
      pointHoverBackgroundColor = '#ec250d';
    }
    if (colore === 'blue') {
      coloreusato = gradientChartOptionsConfigurationWithTooltipBlue;

      gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, 'rgba(16,32,233,0.2)');
      gradientStroke.addColorStop(0.4, 'rgba(16,32,233,0.0)');
      gradientStroke.addColorStop(0, 'rgba(16,32,233,0)'); //blue

      bordercolor = '#2380f7';
      pointBackgroundColor = '#2380f7';
      pointHoverBackgroundColor = '#2380f7';
    }
    if (colore === 'green') {
      coloreusato = gradientChartOptionsConfigurationWithTooltipGreen;

      gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, 'rgba(16,233,32,0.2)');
      gradientStroke.addColorStop(0.4, 'rgba(16,233,32,0.0)');
      gradientStroke.addColorStop(0, 'rgba(16,233,32,0)'); //green

      bordercolor = '#00d6b4';
      pointBackgroundColor = '#00d6b4';
      pointHoverBackgroundColor = '#00d6b4';
    }
    if (colore === 'primary') {
      coloreusato = gradientChartOptionsConfigurationWithTooltipPrimary;

      gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, 'rgba(236,95,216,0.2)');
      gradientStroke.addColorStop(0.4, 'rgba(236,95,216,0.0)');
      gradientStroke.addColorStop(0, 'rgba(236,95,216,0)'); //primary

      bordercolor = '#ec5fd8';
      pointBackgroundColor = '#ec5fd8';
      pointHoverBackgroundColor = '#ec5fd8';
    }

    this.canvas = document.getElementById("chartLineRed");
    this.ctx = this.canvas.getContext("2d");

    var data = {
      labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      datasets: [{
        label: "Data",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: bordercolor,
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: pointBackgroundColor,
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: pointHoverBackgroundColor,
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: [85, 100, 70, 80, 120, 80],
      }]
    };

    var myChart = new Chart(this.ctx, {
      type: 'line',
      data: data,
      options: coloreusato
    });
  }
    chiamarest()
    {
      this.activecampain.listaautomation().subscribe(result => {
        this.idprova = result.automations[this.numeroautomazionedacercare].id;
        console.log(result);
      });
    }
    cercablocks()
    {
      this.activecampain.blocksdiautomazione(this.idprova).subscribe(result => {
        console.log(result);
        this.idblocco = result.automationBlocks[0].id;
      });
    }
    cercachildren()
    {
      this.activecampain.blockchildren(this.idblocco).subscribe(result => {
        console.log(result);
      });
    }
    cercagoalsautomazione()
    {
      this.activecampain.goalsautomazione(this.idprova).subscribe(result => {
        console.log(result);
      });
    }
    cercagoalblocks()
    {
      this.activecampain.goalblocks(this.idblocco).subscribe(result => {
        console.log(result);
      });
    }
  }

