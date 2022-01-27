import { Inject, Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  protected url: any;
  protected headers: any;
  protected serverAddress = environment.serverAddress;

  constructor(public http: HttpClient, @Inject(String) private service: string) {

    this.url = `${this.serverAddress}${this.service}`;
  }

  protected getQuery(q: any){

    let str = '?';

    for(const key in q){
      if(q[key] == ' ')
        str += '&'

      str += encodeURIComponent(q[key])
    }

    return str;
  }

  protected getAll(q?:any): Observable<any> {
    const query = this.getQuery(q);

    return this.http.get(this.url+'/'+query, this.headers);
  }

  protected getOne(id: any): Observable<any> {
    return this.http.get(this.url+'/'+id)
  }

  protected createOne(o: any): Observable<any> {
    return this.http.post(this.url, o);
  }

  protected deleteOne(a: any): Observable<any> {
    const id = this.getQuery(a);
    return this.http.delete(this.url+'/'+id, this.headers)
  }

  protected updateOne(o: any, a: any = {}): Observable<any> {
    const id = this.getQuery(a);
    return this.http.put(this.url+'/'+id, o, this.headers)
  }

}
