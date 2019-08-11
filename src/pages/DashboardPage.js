import React from 'react'
import ConnectedOrderList from '../components/OrderList/ConnectedOrderList'
import ConnectedOrderSummary from '../components/OrdersSummary/ConnectedOrderSummary'

const DashboardPage = props => (
  <React.Fragment>
    <ConnectedOrderSummary />
    <ConnectedOrderList />
  </React.Fragment>
)

export default DashboardPage
