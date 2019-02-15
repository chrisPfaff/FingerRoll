const createUser = params => {
  console.log(params)
  fetch('/api/submit', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export default createUser
