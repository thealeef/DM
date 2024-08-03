import { Component, OnInit, Output } from '@angular/core';
import { ApiServiceService } from '../../api-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { EventEmitter } from 'events';
import { FuncionariosModel, FuncionariosModel2 } from '../../models/funcionarios.model';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrl: './funcionarios.component.scss'
})

export class FuncionariosComponent implements OnInit {

  @Output() enviar = new EventEmitter<FuncionariosModel2>();

  funcionarioForm!: FormGroup

  funcionarios: FuncionariosModel[] = [];

  criarCadastroBoleana = false;
  editarCadastroBoleana = false;
  deletaCadastroBoleana = false;
  respDeletaCadastroBoleana = false;

  constructor(private service: ApiServiceService) { };

  ngOnInit(): void {
    this.service.chamaApi().subscribe(funcionario => this.funcionarios = funcionario);

    //Montando o Form
    this.funcionarioForm = new FormGroup({
      id: new FormControl(0),
      nomeCompleto: new FormControl(''),
      nomeMae: new FormControl('')
    })



  }

  abrirCadastro() {
    if (this.criarCadastroBoleana == false) {
      this.criarCadastroBoleana = true
      this.editarCadastroBoleana = false
      this.deletaCadastroBoleana = false

      this.cadastraFuncionario()

    } else {
      this.criarCadastroBoleana = false
    }
  }

  abrirEditar() {
    if (this.editarCadastroBoleana == false) {
      this.editarCadastroBoleana = true
      this.criarCadastroBoleana = false
      this.deletaCadastroBoleana = false;
    } else {
      this.editarCadastroBoleana = false
    }
  }

  abrirDeletar() {
    this.respDeletaCadastroBoleana = confirm("Deseja deletar?")

    if (this.respDeletaCadastroBoleana) {
      this.deletaCadastroBoleana = true;
      this.criarCadastroBoleana = false
      this.editarCadastroBoleana = false

      alert('Deletado com Sucesso!')
    } else {
      this.deletaCadastroBoleana = false;
    }
  }

  cadastraFuncionario() {
    console.log(this.funcionarioForm.value)
    this.enviar.emit(this.funcionarioForm.value)
  }

}



