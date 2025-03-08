import { Routes, CanActivateFn } from '@angular/router';
import { UsercomponentComponent } from './usercomponent/usercomponent.component';
import { TaskcomponentComponent } from './taskcomponent/taskcomponent.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';
import { authguardGuard } from './authguard.guard';
export const routes: Routes = [
    {path : '', redirectTo : 'newaccount',pathMatch:'full'},
    {path : 'login',component : UsercomponentComponent},
    {path : 'create/:username',component : TaskcomponentComponent,canActivate:[authguardGuard]},
    {path : 'newaccount',component : CreateaccountComponent},
    {path : 'view/:username',component : ViewtaskComponent,canActivate:[authguardGuard]},
    {path: 'updatetask/:id',component:UpdatetaskComponent,canActivate:[authguardGuard]}

];
