import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular Crud';
  msg: string = '';

  employees = [
    { 'name': 'Pedro', position: 'manager', email: 'asd@gmail.com' },
    { 'name': 'Marco', position: 'designer', email: 'asd@gmail.com' },
    { 'name': 'Ever', position: 'programmer', email: 'asd@gmail.com' }
  ];

  model: any = {};
  model2: any = {};
  hideUpdate: boolean = true;

  addEmpleyee(): void {
    this.employees.push(this.model);
    this.msg = 'campo agregado';
  }

  deleteEmployee(i: number): void {
    var answer = confirm('¿seguro que desea eliminarlo?');
    if (answer) {
      this.employees.splice(i, 1);
      this.msg = 'campo eliminado';
    }

  }

  myValue: number = 0;
  editEmployee(i: number): void {
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }

  updateEmployee(): void {
    let i = this.myValue;
    for (let j = 0; j < this.employees.length; j++) {
      if (i == j) {
        this.employees[i] = this.model2;
        this.msg = 'campo actualziado';
        this.model2 = {};
      }
    }

  }

  closeAlert(): void {
    this.msg = '';
  }
}
