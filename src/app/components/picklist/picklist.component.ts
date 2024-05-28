import { Component, Input } from '@angular/core';
import { RocketsService } from '../../services/rockets.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'picklist',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './picklist.component.html',
  styleUrl: './picklist.component.css'
})

export class PicklistComponent {
  @Input() //  Gets the value of this attribute from the parent
  // Creamos los dos arreglos para manejar los componentes de lista
  source: Array<string> = [];
  target: Array<string> = [];
  srcSelect: Array<string> = [];
  trgSelect: Array<string> = [];

  constructor(private service: RocketsService){
    this.source = service.get(); //llenamos el arreglo fuente con la informacion del servicio
  }

  selectAll(){
    this.target = this.source;
    this.source = [];
  }

  unSelectAll(){
    this.source = this.target;
    this.target = [];
  }

  put(){
    // this.srcSelect.forEach((element)=>{
    //   this.target.push(element);
    //   this.source.splice(this.source.indexOf(element));
    // });
    for(let i = 0; i < this.srcSelect.length; i++){
      this.target.push(this.srcSelect[i]);
      this.source.splice(this.srcSelect.indexOf(this.srcSelect[i]),1)
    };
  }

  get(){
    for(let i = 0; i < this.trgSelect.length; i++){
      this.source.push(this.trgSelect[i]);
      this.target.splice(this.trgSelect.indexOf(this.trgSelect[i]),1)
    };
  }
}
