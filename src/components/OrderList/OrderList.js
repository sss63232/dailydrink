import React from 'react'
import Order from '../Order/Order'
import _ from 'lodash'

const OrderList = (props) => {
  const { orders = [] } = props

  return (
    <div className='content-container'>
      <div className='list-header'>
        {/* <div className='show-for-mobile'>Order</div> */}
        <div className='show-for-desktop'>name</div>
        <div className='show-for-desktop'>unit price</div>
      </div>
      <div className='list-body'>
        {
          orders.length === 0
            ? (
              <div className='list-item list-item--message'>
                <span>No order</span>
              </div>
            )
            : (
              _.map(
                orders,
                order => {
                  const { id } = order

                  return (
                    <Order
                      key={id}
                      {...order}
                    />
                  )
                }
              )

            )
        }
      </div>
    </div>
  )
}

export default OrderList
