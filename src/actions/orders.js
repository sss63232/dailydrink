import uuid from 'uuid'

// ADD_ORDER
export const addOrderAction = order => {
  return {
    type: 'ADD_ORDER',
    order: {
      id: uuid(),
      ...order
    }
  }
}

// REMOVE_ORDER
export const removeOrderAction = (id) => ({
  type: 'REMOVE_ORDER',
  id
})

// EDIT_ORDER
export const editOrderAction = (id, updates) => ({
  type: 'EDIT_ORDER',
  id,
  updates
})
