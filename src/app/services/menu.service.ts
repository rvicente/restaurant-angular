import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from '../menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = "http://localhost:8080/api/v1";

  getAllMenus(): Observable<Menu[]>{
    return this.httpClient.get<Menu[]>(`${this.baseUrl}/getAllMenus`)
  }

  addMenu(menu: Menu): Observable<object>{
    return this.httpClient.post(`${this.baseUrl}/addMenu`, menu)
  }

  getMenuById(id: number): Observable<Menu>{
    return this.httpClient.get<Menu>(`${this.baseUrl}/getMenuById/${id}`);
  }

  updateMenu( menu: Menu): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/updateMenu`, menu);
  }
}

