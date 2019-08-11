import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header/Header'
import DashboardPage from '../pages/DashboardPage'
import AddOrderPage from '../pages/AddOrderPage'
import EditOrderPage from '../pages/EditOrderPage'

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path='/' component={DashboardPage} exact />
      <Route path='/add' component={AddOrderPage} />
      <Route path='/edit/:id' component={EditOrderPage} />
      <Route component={() => '404'} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter
