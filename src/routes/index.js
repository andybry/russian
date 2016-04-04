import React from 'react'
import { Route, Redirect } from 'react-router'
import * as urls from './urls'
import Lemmas from './Lemmas'
import Forms from './Forms'

export default (
  <Route>
    <Redirect from="/" to={urls.lemmas(1)} />
    <Route path={urls.lemmas(':pageNumber')} component={Lemmas} />
    <Route path={urls.forms(':pageNumber')} component={Forms} />
  </Route>
)
