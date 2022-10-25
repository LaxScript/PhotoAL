

import { IRoute } from '../interface/route'


import { homePage } from '../pages/homePage'

export const mainRoute: IRoute[] = [
  {
    path: '/',
    auth: false,
    element: homePage
  }
]

