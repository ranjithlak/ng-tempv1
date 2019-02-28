import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
 
import { AuthModule } from '../auth/auth.module';
import { AuthGuard } from '../login-list/_guards/auth.guard';

const routes: Routes = [ 

    {path: 'auth', loadChildren: '../auth/auth.module#AuthModule',canActivate: [AuthGuard]},
    {path: 'register', loadChildren: '../register/register.module#RegisterModule'},
    //{path: 'login', loadChildren: '../pages/login/login.module#LoginModule'},
    // {path: 'editor', loadChildren: '../editor/editor.module#EditorModule'},
   { path:'login-list', loadChildren: '../login-list/login-list.module#LoginListModule'},
   
  
    {path: '**', redirectTo: 'login-list/welcome'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class LazyLoadModule { }
