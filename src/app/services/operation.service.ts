import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  private baseURL=environment.urlService;

  constructor(private http:HttpClient) { }

  getAllOperations():Observable<any>
  {
   
    return this.http.get(this.baseURL+"listar"); 
  }
  addOperation(min:number,max:number):Observable<any>
  {
    return this.http.post(this.baseURL+min+"/"+max,null);   
  }
}
