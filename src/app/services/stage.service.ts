import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Stage } from '../model/stage';

@Injectable({
  providedIn: 'root'
})
export class StageService {
  url= environment.url+'stages/'

  constructor(private http:HttpClient) { }

  getAll():Observable<Stage[]>{
    return this.http.get<Stage[]>(this.url);
  }
  addStage(s:Stage){
    return this.http.post(this.url,s)

  }
  delete(id:number){
    return this.http.delete(this.url+id)

  }
  update(s:Stage){
    return this.http.put(this.url+s.ref,s)

  }
  search(ref:number){
    return this.http.get<Stage>(this.url+ref)

  }
}
