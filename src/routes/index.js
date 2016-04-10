import React from 'react'
import { Route, Redirect } from 'react-router'
import * as urls from './urls'
import App from './App'
import Lemmas from './Lemmas'
import Lemma from './Lemma'
import Forms from './Forms'
import LemmasWithPart from './LemmasWithPart'

export default (
  <Route component={App}>
    <Redirect from="/" to={urls.lemmas(1)} />
    <Route path={urls.lemmasWithPart(':part', ':pageNumber')} component={LemmasWithPart} />
    <Route path={urls.lemmas(':pageNumber')} component={Lemmas} />
    <Route path={urls.lemma(':lemma')} component={Lemma} />
    <Route path={urls.forms(':pageNumber')} component={Forms} />
  </Route>
)
