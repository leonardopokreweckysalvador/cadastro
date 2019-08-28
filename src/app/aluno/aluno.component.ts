import {Component, OnInit, Input } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css'],
})
export class AlunoComponent implements OnInit {

  private alunos: any = {nome: null, telefone: null, email: null};

  constructor() { }

  ngOnInit() {
  }

  onSubmit(myForm: NgForm) {
    if(myForm.valid) {
      
      console.log('--- valores do formulario');
      console.log(myForm.form.value);
      console.log('--- Lista de alunos');
      console.log(this.alunos.nome);

    }
  }

}
