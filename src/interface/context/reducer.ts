
import { IUser } from '../user'

export interface IReducer {
  TYPE: 'LOGIN' | 'REGISTER' | 'AUTH',
  PAYLOAD: {
    USER?: IUser,
    TOKEN?: string,
    COMPLETION?: boolean
  }
}
