import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {


  constructor(private menuService: MenuService, private router: Router) { }

  menu: Menu = new Menu();

  ngOnInit(): void {
  }

  saveMenu(){
    this.menuService.addMenu(this.menu).subscribe(data =>{
      console.log(data);
      this.goToMenus();
    },
    error => console.log(error));
  }


  goToMenus(){
    this.router.navigate(['/menus']);
  }

  onSubmit(){
    console.log(this.menu);
    this.saveMenu();
  }

}
