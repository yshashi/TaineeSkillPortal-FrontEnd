import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { DialogContentExampleDialog, TraineeListComponent } from './trainee/trainee-list/trainee-list.component';
import { SkillListComponent } from './admin/skill-catalogue/skill-list/skill-list.component';
import { SkillFormComponent } from './admin/skill-catalogue/skill-form/skill-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatInputModule} from '@angular/material/input';

import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { MatNativeDateModule } from '@angular/material/core';

import {MatTabsModule} from '@angular/material/tabs';

import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import {MatSelectModule} from '@angular/material/select';

 import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule} from '@angular/forms'

import {MatMenuModule} from '@angular/material/menu';


import { TraineeinterfaceComponent } from './admin/Traneepage/traineeinterface/traineeinterface.component';
import { TraineeFormComponent } from './trainee/trainee-form/trainee-form.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    TraineeListComponent,
    SkillListComponent,
    SkillFormComponent,
    TraineeinterfaceComponent,
    TraineeFormComponent,
    NavbarComponent,
    DialogContentExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatTabsModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatIconModule,
    HttpClientModule
    // MatDateSelectionModel

  ],
  entryComponents:[],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }],

  bootstrap: [AppComponent]
})
export class AppModule { }
