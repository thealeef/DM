import { Component } from '@angular/core';
import { ApiServiceService } from '../../api-service.service';
import { FuncionariosModel } from '../../models/funcionarios.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrl: './funcionarios.component.scss'
})

export class FuncionariosComponent {

  funcionarios: FuncionariosModel[] = []

  //funcionarios = new Observable<FuncionariosModel[]>();

  constructor(private service: ApiServiceService) { };

  ngOnInit() {
    this.service.chamaApi().subscribe(funcionario => this.funcionarios = funcionario)
    //console.log(this.funcionarios)

    //this.funcionarios = this.service.chamaApi();
    //console.log(this.funcionarios);
  }

  eventoCriar() {
    console.log('Evento Criar')
  }

  eventoEditar() {
    console.log('Evento Editar')
  }

  eventoDeletar() {
    console.log('Evento Deletar')
  }
}



