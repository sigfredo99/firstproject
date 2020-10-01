import { Component, OnInit } from '@angular/core';
import { UserService } from '@services/user.service';
import { TipousuarioService } from '@services/tipousuario.service';
import { ApiService } from '@services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  FormularioLogin: FormGroup

  constructor(
    public _usuario: UserService,
    public _tipousuario: TipousuarioService,
    private _api: ApiService,
    private _builder: FormBuilder
  ) 
  { 
    this.FormularioLogin = this._builder.group({
      correo: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  isLogged: boolean = false
  showMessage: boolean = false
  dataformat: boolean = false
  token: string
  isLoading: boolean = false
  errormessage: string = 'Mensaje de Error'

  loginSuccess(){
    //TODO: Redirigir a página principal
    console.log('Ingreso al sistema!')
  }

  showloading( show: boolean){
    this.showMessage=true
    if (show){
      this.isLoading=true
    }else{
      this.isLoading=false
    }
  }

  login(dataform){
    const correo = dataform.correo
    const password = dataform.password
    if(this.FormularioLogin.valid){
      this.showloading(true)
      this._api.login(correo, password).subscribe( response =>{
        if (response.success){
          this._usuario.usuarios = response.usuario
          this.token=response.access_token
          this.isLogged=true
          this.loginSuccess()
        }else{
          this.showloading(false)
          this.errormessage="Correo o clave incorrectos, verfique sus datos e intentelo nuevamente"
        }
      },
      error => {
        this.showloading(false)
        this.errormessage="No se pudo conectar al servidor, por favor intentelo mas tarde"})
    }else{
      this.showloading(false)
      this.errormessage="Por favor ingrese un correo y clave validos"
    }
  }
}
