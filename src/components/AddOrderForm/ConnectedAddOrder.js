import { addOrderAction } from '../../actions/orders'
import AddOrder from './AddOrder'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => ({
  addOrder: order => dispatch(addOrderAction(order))
})

const ConnectedAddOrder = connect(undefined, mapDispatchToProps)(AddOrder)

export default ConnectedAddOrder
