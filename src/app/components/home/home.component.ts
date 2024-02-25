import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  arrUsers: User[] = [];

  constructor(private usersService: UsersService){

  }
  
  /**
   * getUsers
   * @param $event 
   * User[]
   */
  async getUsers($event: string): Promise<void>{
      //console.log($event);
      let name = $event;
      // Tengo que pedir al servicio los datos de los usuarios por el nombre recibido
      try {
        let response = await this.usersService.getUsersByName(name);
        this.arrUsers = response.items.slice(1,11);
        console.log(this.arrUsers);
      } catch (error) {
        console.log(error);
      }
  }

  trackByFn(index:number, item:User) {
    //console.log(item.id)
    return item.id; // unique id corresponding to the item
  }

}
