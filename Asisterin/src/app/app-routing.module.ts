import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'prof',
    loadChildren: () => import('./prof/prof.module').then( m => m.ProfPageModule)
  },
  {
    path: 'alum',
    loadChildren: () => import('./alum/alum.module').then( m => m.AlumPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'escaner',
    loadChildren: () => import('./escaner/escaner.module').then( m => m.EscanerPageModule)
  },
  {
    path: 'generador',
    loadChildren: () => import('./generador/generador.module').then( m => m.GeneradorPageModule)
  },
  {
    path: 'secciones',
    loadChildren: () => import('./secciones/secciones.module').then( m => m.SeccionesPageModule)
  },
  {
    path: 'asistencia-al',
    loadChildren: () => import('./asistencia-al/asistencia-al.module').then( m => m.AsistenciaAlPageModule)
  },
  {
    path: 'asistencia-pr',
    loadChildren: () => import('./asistencia-pr/asistencia-pr.module').then( m => m.AsistenciaPrPageModule)
  },
  {
    path: 'justificaciones',
    loadChildren: () => import('./justificaciones/justificaciones.module').then( m => m.JustificacionesPageModule)
  },
  {
    path: 'ticket',
    loadChildren: () => import('./ticket/ticket.module').then( m => m.TicketPageModule)
  },
  {
    path: 'ticket-al',
    loadChildren: () => import('./ticket-al/ticket-al.module').then( m => m.TicketAlPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'secc',
    loadChildren: () => import('./pages/secc/secc.module').then( m => m.SeccPageModule)
  },
  {
    path: 'olv',
    loadChildren: () => import('./page/olv/olv.module').then( m => m.OlvPageModule)
  },
  {
    path: 'olv',
    loadChildren: () => import('./olv/olv.module').then( m => m.OlvPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'redirec',
    loadChildren: () => import('./redirec/redirec.module').then( m => m.RedirecPageModule)
  },
  {
    path: 'otram',
    loadChildren: () => import('./otram/otram.module').then( m => m.OtramPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
