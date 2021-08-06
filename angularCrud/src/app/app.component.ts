import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular Crud';

  employees = [
    { 'name': 'Pedro', position: 'manager' },
    { 'name': 'Marco', position: 'designer' },
    { 'name': 'Ever', position: 'programmer' }
  ];

  model: any = {};

  addEmpleyee(): void {

  }

  deleteEmployee(): void { }

  editEmployee(): void { }

  updateEmployee(): void { }
}
