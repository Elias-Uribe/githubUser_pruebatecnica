import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  searchForm!: FormGroup;
  @Output() nombreEmitido: EventEmitter<string>;
  
  constructor(){
    this.nombreEmitido = new EventEmitter<string>();

    this.searchForm = new FormGroup({
      name: new FormControl('',[
        Validators.minLength(4),
        Validators.required
      ])
    } , []) // {} campos, [] validaciones

  }

  getData() : void{
    // console.log(this.searchForm.value.name)
    // Quiero enviarselo al padre home. OUTPUT 
    this.nombreEmitido.emit(this.searchForm.value.name);
  }
}
