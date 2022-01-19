export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
}

export const submitOrder = (order) => {
  return fetch('http://localhost:3001/api/v1/orders', {
    method: "POST",
    body: JSON.stringify(order),
    headers: {
      "Content-type": "application/json"
    }
  })
  .then(res => res.json())
}