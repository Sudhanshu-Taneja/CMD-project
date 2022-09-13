import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEditAccountSettingComponent } from '../settings/components/view-edit-account-setting/view-edit-account-setting.component';
import { AddAppointmentComponent } from './component/add-appointment/add-appointment.component';
import { AppointmentConfirmationComponent } from './component/add-appointment/components/appointment-confirmation/appointment-confirmation.component';
import { AppointmentSchudleComponent } from './component/add-appointment/components/appointment-schudle/appointment-schudle.component';
import { ViewAllAppointmentComponent } from './component/view-all-appointment/view-all-appointment.component';
import { ViewAppointmentComponent } from './component/view-appointment/view-appointment.component';
import { ViewFeedbackComponent } from './component/view-feedback/view-feedback.component';

const routes: Routes = [{
  path:"ViewAppointmentDetails/:id",
  component:ViewAppointmentComponent
},
{
  path: 'viewallappointments',
  component: ViewAllAppointmentComponent,
  
},
{
  path: 'addAppointment',
  component: AddAppointmentComponent,
  
},
{
  path: 'conformAppointment',
  component: AppointmentConfirmationComponent,
  
},
{
  path: 'scheduleAppointment',
  component: AppointmentSchudleComponent,
  
},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentsRoutingModule {}

