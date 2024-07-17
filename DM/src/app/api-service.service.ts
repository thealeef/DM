import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FuncionariosModel } from './models/funcionarios.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  chamaApi() {
    return this.http.get<FuncionariosModel[]>('http://127.0.0.1:5000/funcionarios')
  }

}


