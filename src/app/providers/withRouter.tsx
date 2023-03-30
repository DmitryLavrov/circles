import {BrowserRouter} from 'react-router-dom'
import {FC, PropsWithChildren} from 'react'
import {BASE_URL} from '../const'

export const WithRouter: FC<PropsWithChildren> = ({children}) => {
  return <BrowserRouter basename={BASE_URL}>{children}</BrowserRouter>
}
