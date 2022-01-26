import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { LocalStorageService } from './local-storage.service';
import { IService } from './service.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends AppService implements IService<any> {

  constructor(public override http: HttpClient,
    private storage: LocalStorageService,
    private route: Router) {
    super(http, 'users')
  }

  one(id: string): Observable<any> {
    throw new Error('Method not implemented.');
  }
  
  all(query?: any): Observable<any[]> {
    return this.getAll();
  }
  update(o: any, q?: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  create(o: any): Observable<any> {
   return this.createOne(o);
  }

}
