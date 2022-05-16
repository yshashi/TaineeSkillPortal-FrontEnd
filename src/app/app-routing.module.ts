import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { SkillFormComponent } from './admin/skill-catalogue/skill-form/skill-form.component';
import { SkillListComponent } from './admin/skill-catalogue/skill-list/skill-list.component';
import { TraineeinterfaceComponent } from './admin/Traneepage/traineeinterface/traineeinterface.component';
import { TraineeFormComponent } from './trainee/trainee-form/trainee-form.component';




const routes: Routes = [
  {path:'',redirectTo:'traineeform',pathMatch:'full'},
  {path:'traineesinterface',component:TraineeinterfaceComponent},
  {path:'admin',component:AdminComponent},
  {path:'skillform',component:SkillFormComponent},
  {path:'skilllist',component:SkillListComponent},
  // {path:'skilllist',component:SkillListComponent},
  // {path:'edit/:id',component:AzubiComponent},
  {path:'traineeform',component:TraineeFormComponent},
    // {path:'edit/:id',component:AzubiComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
