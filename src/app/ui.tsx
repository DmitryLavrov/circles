import React, {Suspense} from 'react'
import {useRoutes} from 'react-router-dom'
import {routes} from 'processes/rootes/routes'
import {WithRouter} from './providers/withRouter'
import {WithStore} from './providers/withStore'
import {AppLayout} from 'pages/layout/ui'

const Application = () => {
  const router = useRoutes(routes)

  return (
    <Suspense fallback="Loading...">
      <AppLayout>
        {router}
      </AppLayout>
    </Suspense>
  )
}

export const AppWithProviders = () => {
  return (
    <WithStore>
      <WithRouter>
        <Application/>
      </WithRouter>
    </WithStore>
  )
}
