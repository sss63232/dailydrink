import { connect } from 'react-redux'
import OrderList from './OrderList'

const mapStateToProps = state => {
  const { orders } = state
  return {
    orders
  }
}

export default connect(mapStateToProps)(OrderList)
