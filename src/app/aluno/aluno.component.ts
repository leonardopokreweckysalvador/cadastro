import { Component, OnInit, Input } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css'],
})
export class AlunoComponent implements OnInit {

  private aluno: any; //= { nome: null, telefone: null, email: null };
  //alunoLista: string[] = [];

  constructor(private service: AlunoService) { }

  ngOnInit() {
    this.aluno = new Object();
  }

  onSubmit(myForm: NgForm) {
    if (myForm.valid) {

      /*console.log('--- valores do formulario');
      console.log(myForm.form.value);
      console.log('--- Lista de alunos');*/
      console.log(this.aluno.nome);

      this.service.salvar(this.aluno);
      this.aluno = new Object();
      //this.alunoLista = this.service.getAlunos();

      console.log(this.aluno);

    }
  }

  getAlunos(){
    return this.service.getAlunos();
  }
}
