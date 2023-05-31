import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full',
  },
  // Your route here:
  { 
    path: 'brain', loadChildren: () => import('mfe1/Module').then(m => m.BrainModule)
  },
  {
    path: 'brain', loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'mfe1',
      exposedModule: './Module'
    }).then(m => m.BrainModule)
  },
  {
    path: '**',
    component: AppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
