import { Component, Input } from '@angular/core';
import { RocketInterface } from '../../services/rockets.service';

@Component({
  selector: 'summary',
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {
  @Input()
  // En Angular 16 y 17 es necesario inicializar el objeto con valores
  public rocket: RocketInterface = {
    rocket_id: '',
    cost_per_launch: 0,
    rocket_name: '',
    height: {meters: 0},
    flickr_images: [],
    company: ''
  };

  // isNegative() {return;}
  // isPositive() {return;}
}


