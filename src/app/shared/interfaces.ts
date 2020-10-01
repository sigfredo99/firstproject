
import { Usuario } from '../entidad/usuario';
import { TipoUsuario } from '../entidad/tipousuario';

export interface LoginResponse{
    success: boolean
    access_token: string
    token_type: string
    expires_in: number
    usuario: Usuario
}


export interface ListarTipoUsuarioResponse{
    success: boolean
    tipousuarios: TipoUsuario
}

export interface GuardarTipoUsuarioResponse{
    success: boolean
    tipousuario: TipoUsuario
}

export interface UsersResponse{
    userId: number
    id: number
    title: string
    completed: boolean
}
