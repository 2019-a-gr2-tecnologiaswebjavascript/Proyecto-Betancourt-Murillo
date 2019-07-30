import { Component, OnInit, Injectable, Input } from '@angular/core';
import { ClientHandler } from 'src/app/interfaces/ClientHandler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  cliente

  @Input()
  index

  roles = ''

  constructor(private readonly _router:Router) { }

  ngOnInit() {
    this.cliente.roles.forEach(item=>{
      this.roles = `${this.roles}, ${item.nombre}`
    })
  }

  goToEdit(){
    var parametros = {
      queryParams:{
        'id': this.index
      }
    }
    this._router.navigate(['/homeAdmin', 'editUserAdmin'], parametros)
  }

}
