import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css'],
})
export class AlunoComponent implements OnInit {

  private aluno: any; //= { nome: null, telefone: null, email: null };
  alunoLista: string[] = [];


  constructor(private service: AlunoService) { }

  ngOnInit() {
    this.aluno = new Object();
  }

  onSubmit(formularioAluno: NgForm) {
    if (formularioAluno.valid) {

      /*console.log('--- valores do formulario');
      console.log(myForm.form.value);
      console.log('--- Lista de alunos');*/
      console.log(this.aluno);
      this.service.salvar(this.aluno);
      this.alunoLista = this.service.getAlunos();
      this.aluno = new Object();

    }
  }

  getAlunos(){
    
    
    return this.service.getAlunos();
    
  }

}
