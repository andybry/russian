import React from 'react'
import { Route, Redirect } from 'react-router'
import Lemmas from '../containers/Lemmas'
import * as urls from './urls'

export default (
  <Route>
    <Redirect from="/" to={urls.lemmas(1)} />
    <Route path={urls.lemmas(':pageNumber')} component={Lemmas} />
  </Route>
)
