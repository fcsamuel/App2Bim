import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './cadastro/container/container.component';
import { ContainerListComponent } from './cadastro/container/container-list/container-list.component';

const routes: Routes = [
  {path: 'container', component: ContainerComponent},
  {path: 'container-edit/:id', component: ContainerComponent},
  {path: 'container-list', component: ContainerListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
