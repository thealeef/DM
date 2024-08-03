import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FuncionariosModel } from './models/funcionarios.model';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  baseURL: string = "https://flask-python-five.vercel.app/funcionarios";

  constructor(private http: HttpClient) { }

  public novoProdutoForm: FormGroup | undefined;


  chamaApi() {
    return this.http.get<FuncionariosModel[]>('https://flask-python-five.vercel.app/funcionarios')
  }

}