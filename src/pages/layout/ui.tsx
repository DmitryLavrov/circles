import React, {FC, PropsWithChildren} from 'react'
import Header from 'components/header/ui'
import {Layout} from 'antd'

export const AppLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <Layout>
      <Layout.Header style={{background: 'transparent'}}>
        <Header/>
      </Layout.Header>
        <Layout.Content>
          {children}
        </Layout.Content>
    </Layout>
  )
}
