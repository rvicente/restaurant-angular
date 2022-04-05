import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from 'src/app/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.css']
})
export class UpdateMenuComponent implements OnInit {
  
  id!: number;
  menu: Menu = new Menu;
  

  constructor(private menuService: MenuService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log('this is de id: ' + this.id + this.menu.id);
    this.menuService.getMenuById(this.id).subscribe({ 
      next:(response: any) =>{
        if(response.status === 'ok') {
          console.log('resposta: ' , response.resValues);
          this.menu = response.resValues[0];
        }else {
          console.log('error!!! ');
        }
      this.menu.id = this.id;
      console.log('this is de menu: ' + this.menu.id);
      },
      error: (error: HttpErrorResponse) =>{
        alert(error.message);
      }
      
    });
  }
  

  onSubmit(){
    this.menuService.updateMenu( this.menu).subscribe( data =>{
      this.goToMenus();
      console.log(this.menu);
    }
    , error => console.log(error));
  }

  goToMenus(){
    this.router.navigate(['/menus']);
  }
}
