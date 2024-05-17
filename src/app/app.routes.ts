import { LoginComponent } from './Components/login/login.component';
import { Routes } from '@angular/router';
import { SignupComponent } from './Components/signup/signup.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { AddTaskComponent } from './Components/add-task/add-task.component';
import { TaskDetailComponent } from './Components/task-detail/task-detail.component';

export const routes: Routes = [
    
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },    
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'signup',
        component:SignupComponent
    },
    {
        path:'dashboard',
        component:DashboardComponent
    },
    {
        path:'userprofile',
        component:UserProfileComponent
    },
    {
        path:'addtask',
        component:AddTaskComponent
    },
    {
        path:'taskdetail',
        component:TaskDetailComponent
    }
  
    
    
];
