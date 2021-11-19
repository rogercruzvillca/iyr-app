import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AniversariosComponent } from './pages/aniversarios/aniversarios.component';
import { HomeComponent } from './pages/home/home.component';
import { IdaniaComponent } from './pages/idania/idania.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    component: HomeComponent,
  },
  {
    path: 'mi_idania',
    component: IdaniaComponent,
  },
  {
    path: 'nuestros_aniversarios',
    component: AniversariosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
