import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../menu';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  constructor(private menuService: MenuService, private router: Router) { }

  menus!: Menu[];

  ngOnInit(): void {
    this.getAllMenus();
  }

  private getAllMenus(){
    this.menuService.getAllMenus().subscribe(data => {
      this.menus = data;
      console.log('this is the menu: ' + this.menus)
    })
  }

  updateMenu(id: number){
    this.router.navigate(['update-menu', id]);
  }

}
