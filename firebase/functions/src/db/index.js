import * as AuthenticationCreate from './authentication/create'
import * as AuthenticationDelete from './authentication/delete'


export const authenticationCreate = AuthenticationCreate.listener
export const authenticationDelete = AuthenticationDelete.listener
