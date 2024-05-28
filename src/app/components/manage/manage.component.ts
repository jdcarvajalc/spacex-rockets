import { Component } from '@angular/core';
import { RocketsService } from '../../services/rockets.service';

@Component({
  selector: 'manage',
  standalone: true,
  imports: [],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent {

  names: Array<string> = [];
  newName: string = '';

  constructor(private service: RocketsService) {

  }
}
