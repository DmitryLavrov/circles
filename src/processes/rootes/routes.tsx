import {RouteObject} from 'react-router-dom'
import {paths} from './paths'
import React from 'react'
import {Home} from 'pages/home/ui'
import {Menu} from 'pages/menu/ui'
import {Page404} from 'pages/page404/ui'

export const routes: RouteObject[] = [
  {path: paths.home, element: <Home/>},
  {path: paths.menu, element: <Menu/>},
  // {path: '*', element:  <Navigate replace to={paths.home}/>}
  {path: '*', element: <Page404/>}
]
