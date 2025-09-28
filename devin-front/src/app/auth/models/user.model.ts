export interface LoginRequest {
  id_empresa: string;
  email_usuario: string;
  senha_usuario: string;
}

export interface LoginResponse {
  valido: boolean;
  dataObject: {
    token: string;
    usuario: User;
  } | null;
  erros: string[] | null;
  statusCode: number;
}

export interface User {
  idUsuario: string;
  nomeUsuario: string;
  emailUsuario: string;
  idEmpresa: string;
  configuracoes?: UserConfigurations;
}

export interface UserConfigurations {
  openAiToken?: string;
  geminiToken?: string;
  claudeToken?: string;
}

export interface UserProfile {
  valido: boolean;
  dataObject: {
    idUsuario: string;
    nomeUsuario: string;
    configuracoes: UserConfigurations;
  } | null;
  erros: string[] | null;
  statusCode: number;
}

export interface PasswordResetRequest {
  email_usuario: string;
  id_empresa: string;
}

export interface PasswordUpdateRequest {
  nova_senha: string;
  confirma_senha: string;
}

export interface PasswordChangeRequest {
  senha_atual: string;
  nova_senha: string;
  confirma_senha: string;
}
