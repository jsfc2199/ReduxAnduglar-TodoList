import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions  from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('inputFisico') txtInputFisico: ElementRef

  checkCompletado: FormControl;
  txtnput: FormControl;

  editando: boolean = false //para controlar el doble click de un elemnto
constructor(private store: Store<AppState>){}
  ngOnInit(): void {

    this.checkCompletado = new FormControl(this.todo.completado); //miramos el toggle del completado
    this.txtnput = new FormControl(this.todo.texto, Validators.required); //el texto debe ser requerido al editar

    this.checkCompletado.valueChanges.subscribe( valor => {
      this.store.dispatch(actions.toggle({id: this.todo.id}))
    })
  }

  //se activa con doble click y selecciona todo el texto
  editar(){
    this.editando = true
    this.txtnput.setValue(this.todo.texto)

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select()
    }, 1)

  }

  //termina la edición seteando el editado en false, y se usa blur para desactiva la edicion del doble click
  terminarEdicion(){
    this.editando = false

    if(this.txtnput.invalid) return
    if(this.txtnput.value === this.todo.texto) return

    this.store.dispatch(actions.editar({
      id: this.todo.id,
      texto: this.txtnput.value
    }))
  }

  onEliminar(){
    this.store.dispatch(actions.borrar({id:this.todo.id}))
  }
}
