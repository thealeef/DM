import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FuncionariosModel } from './models/funcionarios.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  chamaApi() {
    return this.http.get<FuncionariosModel[]>('https://flask-python-five.vercel.app/funcionarios')
  }

}


