



import { IUser, DUser } from '../../interface/user'
import { IUserContext } from '../../interface/context/context'
import { IReducer } from '../../interface/context/reducer'


export function reducer(state: IUserContext, action: IReducer): IUserContext {
  const USER = action.PAYLOAD.USER ?? DUser
  const TOKEN = action.PAYLOAD.TOKEN ?? ''
  const COMPLETION = action.PAYLOAD.COMPLETION ?? false

  switch (action.TYPE) {

    case 'LOGIN':
      return {
        USER,
        TOKEN,
        COMPLETION,
        STATUS: false
      }

    default:
      return state
  }


}
