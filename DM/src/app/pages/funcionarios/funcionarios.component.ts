import { Component } from '@angular/core';
import { ApiServiceService } from '../../api-service.service';
import { FuncionariosModel } from '../../models/funcionarios.model';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrl: './funcionarios.component.scss'
})

export class FuncionariosComponent {

  funcionarios: FuncionariosModel[] = []
  criarCadastroBoleana = false
  editarCadastroBoleana = false
  deletaCadastroBoleana = false
  respDeletaCadastroBoleana = false

  //funcionarios = new Observable<FuncionariosModel[]>();

  constructor(private service: ApiServiceService) { };

  ngOnInit() {
    this.service.chamaApi().subscribe(funcionario => this.funcionarios = funcionario)
    //console.log(this.funcionarios)

    //this.funcionarios = this.service.chamaApi();
    //console.log(this.funcionarios);


  }

  eventoEditar() {
    if (this.editarCadastroBoleana == false) {
      this.editarCadastroBoleana = true
    } else {
      this.editarCadastroBoleana = false
    }
  }

  eventoDeletar() {
    this.respDeletaCadastroBoleana = confirm("Deseja deletar?")

    if (this.respDeletaCadastroBoleana) {
      this.deletaCadastroBoleana = true;
    } else {
      this.deletaCadastroBoleana = false;
    }

    console.log(this.deletaCadastroBoleana)
  }

  abrirCadastro() {
    if (this.criarCadastroBoleana == false) {
      this.criarCadastroBoleana = true
    } else {
      this.criarCadastroBoleana = false
    }
  }
}



