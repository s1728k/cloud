import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FileStorageComponent } from './file-storage.component';

export const routes: Routes = [
  { path: '', 
  	component: FileStorageComponent,
  	children: [
  		// {path: 'my-client-apps', loadChildren: './client-app-list/client-app-list.module#ClientAppListModule'},
  		{path: 'my-files', loadChildren: './my-files/my-files.module#MyFilesModule'},
  	]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class FileStorageRouting {
}
