import {BrowserRouter} from 'react-router-dom'
import {FC, PropsWithChildren} from 'react'

export const WithRouter: FC<PropsWithChildren> = ({children}) => {
  return <BrowserRouter>{children}</BrowserRouter>
}
