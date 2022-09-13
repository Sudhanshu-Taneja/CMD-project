import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, fas } from '@fortawesome/free-solid-svg-icons';
import { AppComponent } from './app.component';
import { ViewEditAccountSettingComponent } from './cmd/settings/components/view-edit-account-setting/view-edit-account-setting.component';
import { LandingScreenComponent } from './shared/components/landing-screen/landing-screen.component';
import { formService } from './shared/service';
import { AppRoutingModule } from './app-routing.module';
import { EditsymptomsComponent } from './editsymptoms/editsymptoms.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommentserviceService } from './cmd/appointments/Service/commentservice.service';
import { MatCardModule } from '@angular/material/card';
import {FeedbackComponent} from './cmd/patients/components/feedback/feedback.component';
import { ViewPatientsAppoinmentsComponent } from './cmd/patients/components/view-patients-appoinments/view-patients-appoinments.component';
import { FeedbackFormService } from './cmd/patients/services/feedbackform.service';
import {AngularFireModule} from "@angular/fire/compat"
import { environment } from 'src/environments/environment';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingScreenComponent,
    ViewEditAccountSettingComponent,
    //AppRoutingModule, //see that not required
    //routingComponents,
    EditsymptomsComponent,
    FeedbackComponent,
    ViewPatientsAppoinmentsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    //RouterModule.forRoot,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [formService, HttpClient, CommentserviceService,FeedbackFormService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIcons(faCoffee);
  }
}
// FormsModule,BrowserAnimationsModule,
// HttpClientModule,MatSliderModule,MatCardModule,MatButtonModule,MatIconModule

//],
