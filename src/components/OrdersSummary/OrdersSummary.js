import React from 'react'
import { Link } from 'react-router-dom'
import numeral from 'numeral'

const OrdersSummary = props => {
  const {
    ordersCount,
    ordersTotal
  } = props

  const orderWord = ordersCount === 1 ? 'order' : 'orders'
  const formattedOrdersTotal = numeral(ordersTotal).format('$0,0')

  return (
    <div className='page-header'>
      <div className='content-container'>
        <h1 className='page-header__title'>
          Viewing <span>{ordersCount}</span> {orderWord} totalling <span>{formattedOrdersTotal}</span>
        </h1>
        <div className='page-header__actions'>
          <Link className='button' to='/add'>
            Add Order
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OrdersSummary
