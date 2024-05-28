import { Component } from '@angular/core';
import { RocketInterface, RocketsService } from '../../services/rockets.service';
import { NgIf, NgFor } from '@angular/common';
import { SummaryComponent } from '../summary/summary.component';


@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [NgIf, NgFor, SummaryComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  rockets: Array<RocketInterface> = [];
  names: Array<string>;

  constructor (private service: RocketsService){
    this.names = service.get();
  }

  ngOnInit(){
    this.service.load().subscribe((rockets:Array<RocketInterface>) => this.rockets = rockets);
  }
}
