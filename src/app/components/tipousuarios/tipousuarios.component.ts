import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TipousuarioService } from 'src/app/services/tipousuario.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tipousuarios',
  templateUrl: './tipousuarios.component.html',
  styleUrls: ['./tipousuarios.component.sass']
})
export class TipousuariosComponent implements OnInit {

  FormularioTipoUsuario: FormGroup

  constructor(
    private _builder: FormBuilder,
    public _tipousuario: TipousuarioService,
    private _api: ApiService 
  ) 
  { 
    this.FormularioTipoUsuario = this._builder.group({
      nombre: ['', Validators.required]
    })
  }

  add: boolean = false;
  listarTipousuarios(token: string){
    this._api.listartipousuarios(token).subscribe( reponse => 
      {
        if(reponse.success){
          this._tipousuario.tipousuarios= reponse.tipousuarios
        }
      })
  }

  enviar(value){
    console.log(value)
  }

  ngOnInit(): void {
  }

}
