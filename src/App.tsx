import { useState, useReducer, useEffect } from 'react'
import { AuthContextProvider } from './context/auth/context'
import { reducer } from './context/auth/reducer'
import { IRoute } from './interface/route'

import { DUserContext } from './interface/context/context'

import { Routes, Route } from 'react-router-dom'
import { router } from './routes'

import './App.css'

function App() {
  const [userState, userDispatch] = useReducer(reducer, DUserContext)
  const AuthContextValude = { userState, userDispatch }

  return (
    <>
      <AuthContextProvider value={AuthContextValude}>
        <Routes>
          {
            router.map((r: IRoute, i: number) => {
              return (
                <Route element={< r.element />} path={r.path} key={i} />
              )
            })
          }
        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App
