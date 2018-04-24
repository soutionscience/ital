import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs/observable';

@Injectable()
export class ApiService {

  constructor(private restangular: Restangular) { }

getResource(apiRoute): Observable<any[]> {
  return this.restangular.all(apiRoute).getList();

}
getSingleResource(apiRoute, id: number) {
  return this.restangular.one(apiRoute, id).get();
}
postResource(apiRoute, message): Observable<any[]>{
  return this.restangular.all(apiRoute).post(message);
}
postTypes(apiRoute, id:number, message, item){
  return this.restangular.one(apiRoute, id).all(item).post(message);
}

deleteAll(apiRoute){
  this.restangular.all(apiRoute).remove();
}

}
