import React from 'react'
import OrderForm from '../OrderForm/OrderForm'

export class EditOrder extends React.Component {
  onSubmit = order => {
    this.props.editOrder(this.props.order.id, order)
    this.props.history.push('/')
  };

  onRemove = () => {
    this.props.removeOrder(this.props.order.id)
    this.props.history.push('/')
  };

  render () {
    return (
      <div>
        <div className='page-header'>
          <div className='content-container'>
            <h1 className='page-header__title'>Edit Order</h1>
          </div>
        </div>
        <div className='content-container'>
          <OrderForm
            order={this.props.order}
            onSubmit={this.onSubmit}
          />
          <button className='button button--secondary' onClick={this.onRemove}>Remove Order</button>
        </div>
      </div>
    )
  }
};

export default EditOrder
