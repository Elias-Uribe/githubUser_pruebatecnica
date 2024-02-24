import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  searchForm!: FormGroup;
  
  constructor(){
    this.searchForm = new FormGroup({
      name: new FormControl('',[])
    } , []) // {} campos, [] validaciones

  }

  getData() : void{
    console.log(this.searchForm.value)
    
  }
}
