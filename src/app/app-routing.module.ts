import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingScreenComponent } from './shared/components/landing-screen/landing-screen.component';
import { ViewFeedbackComponent } from './cmd/appointments/component/view-feedback/view-feedback.component';
import { ViewAllAppointmentComponent } from './cmd/appointments/component/view-all-appointment/view-all-appointment.component';
import { ViewEditAccountSettingComponent } from './cmd/settings/components/view-edit-account-setting/view-edit-account-setting.component';
import { ViewAllPatientComponent } from './cmd/patients/components/view-all-patient/view-all-patient.component';
import { DashboardComponent } from './cmd/dashboard/component/dashboard/dashboard.component';
import { ViewPatientsAppoinmentsComponent } from './cmd/patients/components/view-patients-appoinments/view-patients-appoinments.component';
import { ViewAppointmentComponent } from './cmd/appointments/component/view-appointment/view-appointment.component';
import { FeedbackComponent } from './cmd/patients/components/feedback/feedback.component';
import { RegisterComponent } from './component/register/register.component';
import { AddAppointmentComponent } from './cmd/appointments/component/add-appointment/add-appointment.component';
import { AppointmentConfirmationComponent } from './cmd/appointments/component/add-appointment/components/appointment-confirmation/appointment-confirmation.component';
import { AppointmentSchudleComponent } from './cmd/appointments/component/add-appointment/components/appointment-schudle/appointment-schudle.component';
import { ViewAvailibiltySettingComponent } from './cmd/settings/components/view-availibilty-setting/view-availibilty-setting.component';

const routes: Routes = [

  { path: 'fb', component: ViewFeedbackComponent },
  { path: 'viewallappointments', component: ViewAllAppointmentComponent },
  { path: 'settings', component: ViewEditAccountSettingComponent },
  { path: 'patient', component: ViewAllPatientComponent },
  { path: 'viewpatientsapp', component: ViewPatientsAppoinmentsComponent },
  { path: 'feedback', component: FeedbackComponent },

  { path: 'addAppointment', component: AddAppointmentComponent},
  { path: 'conformAppointment', component: AppointmentConfirmationComponent},
  { path: 'scheduleAppointment', component: AppointmentSchudleComponent},
  { path: 'addAvilability', component: ViewAvailibiltySettingComponent},
 
  { path: 'viewappointment', component: ViewAppointmentComponent },


  { path: 'landing', component: LandingScreenComponent},
  { path: '', component: LandingScreenComponent, pathMatch: 'full'},
  { path : 'register' , component : RegisterComponent},
  { path: 'CMD', loadChildren: () => import('./cmd/cmd.module').then((m) => m.CmdModule)},
  //{ path: 'allappointments', loadChildren: () => import('./cmd/appointments/appointments.module').then((m) => m.AppointmentsModule )},
  
  { path:'settings',loadChildren: () =>import('./cmd/settings/settings.module').then((m)=> m.SettingsModule )},
   {path: '', redirectTo : 'landing', pathMatch:'full'}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [ViewFeedbackComponent];
