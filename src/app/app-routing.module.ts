import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemFormComponent } from './item-form/item-form.component'
import { AllitemsComponent } from './allitems/allitems.component'

const routes: Routes = [
  { path: '', component: ItemFormComponent},
  { path: 'list', component: AllitemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
