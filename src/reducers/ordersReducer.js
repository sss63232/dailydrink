// Orders Reducer

// default orders
const defaultOrders = [
  {
    id: 'testing_id_1',
    name: '珍珠奶茶',
    price: 50,
    quantity: 3,
    notes: 'no sugar'
  },
  {
    id: 'testing_id_2',
    name: '水果茶',
    price: 60,
    quantity: 1,
    notes: 'half sugar'
  }
]

const ordersReducer = (orders = defaultOrders, action) => {
  switch (action.type) {
    case 'ADD_ORDER':
      return [
        ...orders,
        action.order
      ]
    case 'REMOVE_ORDER':
      return orders.filter(order => order.id !== action.id)
    case 'EDIT_ORDER':
      return orders.map(order => {
        if (order.id === action.id) {
          return {
            ...order,
            ...action.updates
          }
        } else {
          return order
        }
      })
    default:
      return orders
  }
}

export default ordersReducer
