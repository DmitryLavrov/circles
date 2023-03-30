import {BrowserRouter} from 'react-router-dom'
import {FC, PropsWithChildren} from 'react'
import {BASE_URL} from '../const'

//--------------------------
console.log('BASE_URL',BASE_URL)
//--------------------------

export const WithRouter: FC<PropsWithChildren> = ({children}) => {
  return <BrowserRouter basename={BASE_URL}>{children}</BrowserRouter>
}
