import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/base.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Container } from './model/container';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContainerService extends BaseService {

  constructor(private http: HttpClient) {
    super();
   }

   save(container: Container) : Observable<any> {
     return this.http.post(environment.urlWebAPI + "Container/", container)
       .catch((error: any) => Observable.throw(error.error));
   }

   listAll() : Observable<any> {
     return this.http.get(environment.urlWebAPI + "Container/")
      .catch((error: any) => Observable.throw(error.error));
   }

   delete(id: number) : Observable<any> {
    return this.http.delete(environment.urlWebAPI + "Container/" + id)
    .catch((error: any) => Observable.throw(error.error));
   }

   update(container: Container) {
     return this.http.put(environment.urlWebAPI + "Container/" + container.containerId, container)
     .catch((error: any) => Observable.throw(error.error)); 
   }

   getById(id: number) : Observable<any> {
    return this.http.get(environment.urlWebAPI + "Container/" + id)
    .catch((error: any) => Observable.throw(error.error));
   }
}
