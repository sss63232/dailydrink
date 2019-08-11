import React from 'react'
import { Link } from 'react-router-dom'
import numeral from 'numeral'

const Order = props => {
  const {
    id,
    name,
    price,
    quantity,
    notes
  } = props
  return (
    <Link className='list-item' to={`/edit/${id}`}>
      <div>
        <h3 className='list-item__title'>{name}</h3>
        <div className='list-item__sub-title'>{`x ${quantity}`}</div>
        <div className='list-item__sub-title'>{notes}</div>
      </div>
      <h3 className='list-item__data'>{numeral(price).format('$0,0')}</h3>
    </Link>
  )
}

export default Order
