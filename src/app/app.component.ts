import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { RocketsService, RocketInterface } from './services/rockets.service';
// import { SummaryComponent } from './components/summary/summary.component'; // Importando componente creado
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PicklistComponent } from './components/picklist/picklist.component';
import { ManageComponent } from './components/manage/manage.component';


@Component({
  selector: 'app-root2',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent, PicklistComponent, ManageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  // title = 'World!';
  // rockets: Array<RocketInterface> = [];

  // constructor(service: RocketsService){
  //   service.load().subscribe(rockets => this.rockets = rockets);
  // }
}
