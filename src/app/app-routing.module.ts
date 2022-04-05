import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuListComponent } from './menu-list/menu-list.component';
import { AddMenuComponent } from './MenuComponents/add-menu/add-menu.component';
import { UpdateMenuComponent } from './MenuComponents/update-menu/update-menu.component';

const routes: Routes = [
  {path: 'menus', component: MenuListComponent},
  {path: 'add-menu',component: AddMenuComponent},
  {path: '', redirectTo: 'menus', pathMatch: 'full'},
  {path: 'update-menu/:id', component: UpdateMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
