
import { Observable } from "rxjs";

export interface IService<T> {

  one(id: string): Observable<any>;

  all(query?: any): Observable<Array<any>>

  update(o: T, q?: any): Observable<any>

  create(o: T): Observable<any>

}
