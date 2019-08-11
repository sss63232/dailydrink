import { connect } from 'react-redux'
import OrdersSummary from './OrdersSummary'

const mapStateToProps = state => {
  const { orders } = state

  const ordersCount = orders.length
  const ordersTotal = orders
    .map(order => {
      const { price, quantity } = order
      return price * quantity
    })
    .reduce((acc, cur) => acc + cur, 0)

  return {
    ordersCount,
    ordersTotal
  }
}

const ConnectedOrderSummary = connect(mapStateToProps)(OrdersSummary)
export default ConnectedOrderSummary
