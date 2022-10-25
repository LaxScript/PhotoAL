
import React from 'react'


export interface IRoute {
  path: string,
  auth: boolean,
  element: React.FC
}
