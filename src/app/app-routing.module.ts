import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoComponent } from './curso/curso.component';
import { AlunoComponent } from './aluno/aluno.component';

const routes: Routes = [
  { path: 'curso', component: CursoComponent },
  { path: 'aluno', component: AlunoComponent },
  { path: '', redirectTo: '/curso', pathMatch: 'full' },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
