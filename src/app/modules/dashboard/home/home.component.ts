import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public canvas : any;
  public ctx: any;
  public chartColor: any;
  public chartEmail: any;
  public chartHours: any;

    ngOnInit(){

    }

}
