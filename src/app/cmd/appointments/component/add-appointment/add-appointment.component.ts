import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss']
})
export class AddAppointmentComponent implements OnInit {
  confirmationData: any;
  service: any;

  constructor() { }
  type = 'Appointment';
  PreviousPrescription = 'Click here to open';
  path = '../../../../../../../assets/pic.png';
  alttext: string = 'first image';
  path1 = '../../../../../../../assets/left.png';
  alttext1: string = 'second image';
  alttext2: string = 'calender';
  nameofthedr = 'JohnDoe';
  specialist = 'Leg Specialist';

  ngOnInit(): void {
    
    

    this.confirmationData = this.service.GetAppointmentConfirmationData();
    console.log('Confirmation Component',  this.confirmationData);
  }
  formatTime(time: string) {
    return time.slice(0, 5);
  }
  setActivePage(pageName: string) {
    localStorage.setItem('activePageName', pageName);
  }
  activePageName: any;
}
  
 
  


