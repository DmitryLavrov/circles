import {FC, PropsWithChildren} from 'react'
import {Provider} from 'react-redux'
import {store} from 'processes/store/createStore'

export const WithStore: FC<PropsWithChildren> = ({children}) => {
  return <Provider store={store}>{children}</Provider>
}
