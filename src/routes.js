import React from 'react'
import { Switch, Route } from 'react-router-dom'

import CallbackPage from './pages/Callback/Callback'
import LogInPage from './pages/LogIn/LogIn'
import LogOutPage from './pages/LogOut/LogOut'
import DashboardRouting from './pages/Dashboard/DashboardRouting';
import ErrorPage from './pages/Error/Error';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={CallbackPage} />

      <Route path="/login" component={LogInPage} />
      <Route path="/logout" component={LogOutPage} />

      {/* Dashboard */}
      {/* Protect dashboard for logged users only */}
      <Route path="/dashboard" component={DashboardRouting} />

      <Route path="/error-page" component={ErrorPage} />

      <Route component={CallbackPage} />
    </Switch>
  </main>
)

export default Routes
