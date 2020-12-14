import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Angular Sample Project';

  firstName: string="Purandaran";
  lastName: string="Vudhayagiri";

  isDisabled: boolean=false;

  getFullName():string {
    return this.firstName + " " + this.lastName;
  }

  inputvar: string="Sending data from parent to child";

  getdata(value: any):void{
    alert(value);
  }

}
