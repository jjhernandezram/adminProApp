import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [],
})
export class PromisesComponent implements OnInit {
  users: any;
  constructor() {}

  ngOnInit(): void {
    this.getUsersOneWay();
    this.getUsersOtherWay().then((users) => (this.users = users));

    // const promesa = new Promise((resolve, reject) => {
    //   if (false) {
    //     resolve('Promesa cumplida!');
    //   } else {
    //     reject('Algo salio mal!');
    //   }
    // });
    //   promesa
    //     .then((msg) => {
    //       console.log(msg);
    //     })
    //     .catch((err) => {
    //       console.log('Error', err);
    //     });
  }

  getUsersOneWay() {
    fetch('https://reqres.in/api/users')
      .then((resp) => resp.json())
      .then((body) => console.log(body.data));
  }

  getUsersOtherWay() {
    return new Promise((resolve, reject) => {
      fetch('https://reqres.in/api/users')
        .then((resp) => resp.json())
        .then((body) => resolve(body.data));
    });
  }
}
