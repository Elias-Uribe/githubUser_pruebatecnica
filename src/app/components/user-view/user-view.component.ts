import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  myUser!: User | any;

  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService){

  }

  // Funciones de ciclo de vida

  // ngOnInit se ejecuta cuando el componente se puede visualizar
  ngOnInit(): void {
    // Tengo que capturar la ruta con el login del usuario
    this.activatedRoute.params.subscribe(async (params: any) => {
      //console.log(params.userLogin);
      let userlogin = params.userLogin;
      this.myUser = await this.usersService.getUserByLogin(userlogin);
      //console.log(this.myUser);
    })
  }
}
