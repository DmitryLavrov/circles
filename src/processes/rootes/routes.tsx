import {RouteObject} from 'react-router-dom'
import {paths} from './paths'
import React from 'react'
import {Home} from 'pages/home/ui'
import {Menu} from 'pages/menu/ui'

export const routes: RouteObject[] = [
  {path: paths.home, element: <Home/>},
  {path: paths.menu, element: <Menu/>},
]
