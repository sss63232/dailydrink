import React from 'react'

export default class OrderForm extends React.Component {
  constructor (props) {
    super(props)

    const hasOrderData = !!props.order

    this.state = {
      name: hasOrderData ? props.order.name : '',
      quantity: hasOrderData ? props.order.quantity : '',
      notes: hasOrderData ? props.order.notes : '',
      price: hasOrderData ? props.order.price : '',
      error: ''
    }
  }

  onNameChange = (e) => {
    const name = e.target.value
    this.setState(() => ({ name }))
  };

  onNotesChange = (e) => {
    const notes = e.target.value
    this.setState(() => ({ notes }))
  };

  onQuantityChange = (e) => {
    const quantity = e.target.value
    this.setState(() => ({ quantity }))
  };

  onPriceChange = (e) => {
    const price = e.target.value

    if (!price || price.match(/^\d{1,}?$/)) {
      this.setState(() => ({ price }))
    }
  };

  onSubmit = (e) => {
    e.preventDefault()

    const {
      name,
      price,
      quantity,
      notes
    } = this.state

    const hasFullInfo = name && price && quantity

    if (hasFullInfo) {
      this.setState(() => ({ error: '' }))
      this.props.onSubmit({
        name,
        price,
        quantity,
        notes
      })
    } else {
      this.setState(() => ({ error: 'Please provide name, price and quantity.' }))
    }
  };

  render () {
    const {
      name,
      price,
      quantity,
      notes,
      error
    } = this.state

    return (
      <form className='form' onSubmit={this.onSubmit}>
        {
          error && (
            <p className='form__error'>
              {error}
            </p>
          )
        }

        <input
          type='text'
          placeholder='Name, ex. 珍珠奶茶'
          autoFocus
          className='text-input'
          value={name}
          onChange={this.onNameChange}
        />

        <input
          type='number'
          placeholder='Price'
          className='text-input'
          value={price}
          onChange={this.onPriceChange}
        />

        <input
          type='number'
          placeholder='Quantity'
          className='text-input'
          value={quantity}
          onChange={this.onQuantityChange}
        />

        <textarea
          placeholder='notes for the order (optional)'
          className='textarea'
          value={notes}
          onChange={this.onNotesChange}
        />

        <div>
          <button className='button'>Save Order</button>
        </div>
      </form>
    )
  }
}
