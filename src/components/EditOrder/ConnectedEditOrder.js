import { connect } from 'react-redux'
import { EditOrder } from './EditOrder'
import { editOrderAction, removeOrderAction } from '../../actions/orders'
import _ from 'lodash'

const mapStateToProps = (state, props) => {
  const targetId = _.get(props, 'match.params.id', null)
  const orders = _.get(state, 'orders', [])
  const targetOrder = orders.find(order => order.id === targetId)

  return {
    order: targetOrder
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  editOrder: (id, order) => dispatch(editOrderAction(id, order)),
  removeOrder: (id) => dispatch(removeOrderAction(id))
})

const ConnectedEditOrder = connect(mapStateToProps, mapDispatchToProps)(EditOrder)

export default ConnectedEditOrder
