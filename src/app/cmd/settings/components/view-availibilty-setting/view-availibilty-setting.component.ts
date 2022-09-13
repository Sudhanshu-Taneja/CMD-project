import { Component, OnInit } from '@angular/core';
import { faChartSimple,faTrash,faBarsStaggered,faUser,faMessage,faGear,faBell,faChevronDown,faCamera } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view-availibilty-setting',
  templateUrl: './view-availibilty-setting.component.html',
  styleUrls: ['./view-availibilty-setting.component.scss']
})
export class ViewAvailibiltySettingComponent implements OnInit {
  router: any;

  constructor() { }
  addAvailability(){
    this.router.navigate(['/CMD/settings/addAvailability'])

   }


   
  ngOnInit(): void {
    
  }
  dropdwon='dropdwon'
  faChartSimple=faChartSimple
  faTrash=faTrash
  faBarsStaggered=faBarsStaggered
  faUser=faUser
  faMessage=faMessage
  faGear=faGear
  faBell=faBell
  faChevronDown=faChevronDown
  faCamera=faCamera
  button='Edit'
  active=''
  active2='active2'
  
  drop(dropdwon:string){
    
    if(dropdwon===''){
     console.log(dropdwon)
      this.dropdwon='dropdwon'
  
    }
    else{
      console.log(dropdwon)
      this.dropdwon=''
    }
  }
}
