import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAvailibiltySettingComponent } from './components/view-availibilty-setting/view-availibilty-setting.component';
import { ViewEditAccountSettingComponent } from './components/view-edit-account-setting/view-edit-account-setting.component';

const routes: Routes = [{
  path:'editProfile',component:ViewEditAccountSettingComponent
},
{
  path:'addAvilability',component:ViewAvailibiltySettingComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }