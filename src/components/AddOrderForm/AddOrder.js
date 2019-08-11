import React from 'react'
import OrderForm from '../OrderForm/OrderForm'

class AddOrder extends React.Component {
  onSubmit = order => {
    this.props.addOrder(order)
    this.props.history.push('/')
  };

  render () {
    return (
      <div>
        <div className='page-header'>
          <div className='content-container'>
            <h1 className='page-header__title'>Add Order</h1>
          </div>
        </div>
        <div className='content-container'>
          <OrderForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    )
  }
}

export default AddOrder
