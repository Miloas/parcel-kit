import * as React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import { Hello, World } from './pages'

export const App = () => {
  return (
    <HashRouter hashType='noslash'>
      <Switch>
        <Route exact={ true } path='/' component={ Hello } />
        <Route exact={ true } path='/next' component={ World } />
        <Route component={ () => <h1>204 No Content</h1> } />
      </Switch>
    </HashRouter>
  )
}
